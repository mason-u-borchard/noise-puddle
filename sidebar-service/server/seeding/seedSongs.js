var faker = require('faker');
var Sequelize = require('sequelize');
var db = require('../postgres-db/index.js');
const fs = require('fs');
var fakeData = require('./fakeData.js');


const createLikedSong = function() {
  //////// Get random song name
  // generate random index number
  var k = Math.floor(Math.random() * (287));
  var fakeSongName = fakeData.fakeSongs[k];
  var artistInd = Math.floor(k / 10) + 1;

  var artistName = fakeData.fakeNames[artistInd - 1];
  if (artistName === undefined) {
    artistName = fakeData.fakeNames[Math.floor(Math.random() * (300))];
  }
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
  /////// GENERATE RANDOM NUMBERSSS
  var fakePlays = Math.ceil(Math.random() * 900000);

  var fakeLikes = Math.floor(Math.random() * 10000);

  var fakeReposts = Math.floor(Math.random() * 90000);

  var fakeComments = Math.floor(Math.random() * 20000);

  // Create new liked song in database
  const likedsong = `${artistInd}; ${fakeSongName}; ${artistName}; ${fakePlays}; ${fakeLikes}; ${fakeReposts}; ${fakeComments}; ${fakeAlbum}; ${fakeLocation}; ${fakePic}\n`;
  return likedsong;
};

const writeLikedSongs = fs.createWriteStream('./LikedSongs4.csv');
writeLikedSongs.write('artist_id,song_name,artist_name,plays,likes,reposts,comments,album_art,location,artist_pic\n', 'utf8');

const createSeedFile = function(callback) {
  // let i = 400; uncomment for test run
  let i = 100;
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
  console.log('finished creating csv file LikedSongs3.csv');
});
