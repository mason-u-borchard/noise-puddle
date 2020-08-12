/* eslint-disable func-style */
var faker = require('faker');
var fakeData = require('./fakeData.js');
var db = require('../db/LikedSongs.js');
// var db = require('../db/index.js');
const moment = require('moment');
const fs = require('fs');
var Sequelize = require('sequelize');





//////// Get random song name
// generate random index number


const createLikedSong = function() {

 //////// Generate random song
  var artistId = Math.floor(Math.random() * (300));
  var songId = Math.floor(Math.random() * (10));
  var songName = fakeData.fakeSongs[(artistId * 10) + songId];

  //////// Generate random Location
  var city = faker.address.city();
  var country = faker.address.country();
  var fakeLocation = city + ', ' + country;

  //////// Generate profile picture
  // generate random index number to choose random profile art link
  var max = fakeData.profile.length;
  var num = Math.floor(Math.random() * max);
  var fakePic = fakeData.profile[num];
  var fakeAlbum = fakeData.album[num];

  /////// GENERATE RANDOM NUMBERS
  var fakePlays = Math.ceil(Math.random() * 900000);

  var fakeLikes = Math.floor(Math.random() * 10000);

  var fakeReposts = Math.floor(Math.random() * 90000);

  var fakeComments = Math.floor(Math.random() * 20000);

  var songName = db.query


  const likedsong = `${null};${artistId};${fakePlays};${fakeLikes};${fakeReposts};${fakeComments};${fakeAlbum};${fakeLocation};${fakePic}\n`;
  return likedsong;
};

const writeLikedSongs = fs.createWriteStream('./LikedSongs2.csv');
writeLikedSongs.write('name;artist_id;plays;likes;reposts;comments;album_art;location;pic\n', 'utf8');

const createSeedFile = function(callback) {
  let i = 400;
  write();
  function write() {
    let ok = true;
    while (i > 0 && ok) {
      i--;
      if (i === 0) {
        writeLikedSongs.write(createLikedSong(), 'utf-8', callback);
      } else {
        ok = writeLikedSongs.write(createLikedSong(), 'utf-8');
      }
    }
    if (i > 0) {
      writeLikedSongs.once('drain', write);
    }
  }
};

createSeedFile(() => {
  console.log('finished creating csv file LikedSongs.csv');
});
