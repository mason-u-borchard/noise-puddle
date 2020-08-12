const fs = require('fs');
const request = require('request');
const axios = require('axios');
const download = require('image-downloader');
const PEXEL_API_KEY = require('./pexel.config.js');

var index = 1;

var get80 = function (i) {
  axios.get(`https://api.pexels.com/v1/curated?per_page=80&page=${i}`, {
    headers: {
      'Authorization': `${PEXEL_API_KEY}`,
      responseType:'stream'
    }
  })
  .then(res => {
    const photos = [];
    for(var i = 0; i < res.data.photos.length; i++) {
      photos.push(res.data.photos[i].src.tiny)
    }
    return photos;
  })
  .then(photos => {
    for(var i = 0; i < photos.length; i ++) {
      download.image({
        url: `${photos[i]}`,
        dest: `/Users/anthonyha/hrr44/SDC/FEC-comments-feed-module-riley/server/db/data/images/image${index}.jpg`
      })
      .then(({ filename, image }) => {
        console.log('Saved!')
      })
      .catch((err) => console.error(err))
      index++;
    }
  })
  .catch(err => {
    if(err) {
      console.error('Error getting images')
    }
  })
}

for(var i = 1; i <= 24; i++) {
  get80(i);
}



