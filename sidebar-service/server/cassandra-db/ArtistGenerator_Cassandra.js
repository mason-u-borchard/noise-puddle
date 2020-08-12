var faker = require('faker');
var fakeData = require('../seeding/fakeData.js');
var db = require('./schema.cql');
const moment = require('moment');
const fs = require('fs');

// const artistNames = []

const createArtist = function() {

  var nameInd = Math.floor(Math.random() * (36));

  fakeArtist = fakeData.fakeNames[nameInd];

  fakeAbout = '';
  // About stuff
  var words = fakeData.fakeAbouts;

  // How many sentences
  var random = Math.ceil(Math.random() * 1);

  // What sentences
  var index = Math.floor(Math.random() * (words.length - 7));

  // Creates artist about text.
  while (random > 0) {
    fakeAbout += words[index] + '. ';
    index ++;
    random --;
  }

  // Generate random amount of social links
  var numLinks = Math.ceil(Math.random() * 4);
  var linkArr = [];
  while (numLinks > 0) {
    var newLink = faker.internet.url();
    linkArr.push(newLink);
    numLinks--;
  }

  // Join array of fake links into one string separated by a space.
  var fakeLinks = linkArr.join(' ');

  /////// Generate rest of fake data ///////////
  var trackCount = Math.ceil(Math.random() * 200);
  var followerCount = Math.floor(Math.random() * 20000);
  var followingCount = Math.floor(Math.random() * 1000);
  var likedSongs = Math.floor(Math.random() * 5);
  var artist_id = Math.floor(Math.random() * 1000000);
  // const artist = `${artist_id}| ${fakeArtist}| ${trackCount}| ${followerCount}| ${followingCount}| ${fakeAbout}| ${fakeLinks}| ${likedSongs}\n`;

  const artist = `${artist_id}; ${fakeArtist}; ${trackCount}; ${followerCount}; ${followingCount}; ${fakeAbout}; ${fakeLinks}; ${likedSongs}\n`;
  return artist;
};

const writeArtists = fs.createWriteStream('./ArtistCass.csv');
// writeArtists.write('artist_id|artist_name|track_count|follower_count|following_count|artist_about|artist_links|liked_songs\n', 'utf8');

writeArtists.write('artist_id;artist_name;track_count;follower_count;following_count;artist_about;artist_links;liked_songs\n', 'utf8');

const createSeedFile = function(callback) {
  let i = 100;
  write();
  function write() {
    let ok = true;
    while (i > 0 && ok) {
      i--;
      if (i === 0) {
        writeArtists.write(createArtist(), 'utf-8', callback);
      } else {
        ok = writeArtists.write(createArtist(), 'utf-8');
      }
    }
    if (i > 0) {
      writeArtists.once('drain', write);
    }
  }
};

createSeedFile(() => {
  console.log('finished creating csv file Artist.csv');
});
