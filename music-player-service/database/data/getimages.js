const fs = require('fs');
const axios = require('axios');
const Promise = require('bluebird');
const download = require('image-downloader');

const apiKey = require('/Users/jacobwilson/hr/sdc/jake-service/pexels.config.js');

const writeFileAsync = Promise.promisify(fs.writeFile);
const readFileAsync = Promise.promisify(fs.readFile);

//DIRECTIONS:
// Uncomment all obove this line then uncoment each step, run that step through node, then recomment and move on to the next step.


//STEP 1

// const get80 = function(page) {
//   let padded = page.toString().padStart(4, '0');
//   axios.get(`https://api.pexels.com/v1/curated?per_page=80&page=${page}`, {
//     headers: {'Authorization': apiKey.apiKey}
//   })
//     .then((res) => {
//       let photos = [];
//       for (var i = 0; i < res.data.photos.length; i++ ) {
//         photos.push(res.data.photos[i].src.small);
//       }
//       return photos;
//     })
//     .then((photos) => {
//       return writeFileAsync(`/Users/jacobwilson/hr/sdc/jake-service/server/database/images/${padded}.json`, JSON.stringify(photos));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// for (var i = 0; i < 13; i++) {
//   get80(i);
// }


//STEP 2

// const combine = function() {
//   let all = [];

//   for (var j = 0; j < 13; j++) {
//     let paddedNum = j.toString().padStart(4, '0');
//     all.push(readFileAsync(`/Users/jacobwilson/hr/sdc/jake-service/server/database/images/${paddedNum}.json`, 'utf-8'));
//   }
//   Promise.all(all)
//     .then((result) => {
//       return writeFileAsync(`/Users/jacobwilson/hr/sdc/jake-service/server/database/images/allPhotos.json`, result);
//     });
// };

// console.log(combine());


//STEP 3

let parsed = readFileAsync('/Users/jacobwilson/hr/sdc/jake-service/server/database/images/allPhotos.json', 'utf-8')
  .then((result) => {
    return JSON.parse(result);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.all(parsed)
  .then((result) => {
    let all = [];

    for (var i = 0; i < result.length; i++) {
      for (var j = 0; j < result[i].length; j++) {
        all.push(result[i][j]);
      }
    }

    return all;

  })
  .then((all) => {
    let count = 1;
    let result = all.map((photoURL) => {

      var padded = count.toString().padStart(4, '0');
      download.image({
        url: photoURL,
        dest: `/Users/jacobwilson/hr/sdc/jake-service/server/database/images/photos/photo-${count}.jpg`
      })
        .catch((err) => {
          console.log(err);
        });
      count++;
    });
    return result;
  })
  .catch((err) => {
    console.log(err);
  });