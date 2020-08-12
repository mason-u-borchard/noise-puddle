var faker = require('faker');
var fakeData = require('./fakeData.js');
var db = require('../postgres-db/index.js');
const fs = require('fs');

const createArtist = function(j) {

  artistName = fakeData.fakeNames[j];
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
  var likedSongs = Math.floor(Math.random() * 10);

  const artist = `${artistName}; ${trackCount};${followerCount}; ${followingCount}; ${fakeAbout}; ${fakeLinks}; ${likedSongs}\n`;
  return artist;


};

const writeArtists = fs.createWriteStream('./Artist.csv');


writeArtists.write('name,track_count,follower_count,following_count,about,links,liked_songs\n', 'utf8');

const createSeedFile = function(callback) {
  let i = -1;
  // let id = 400; uncomment for test run
  let id = 1000000;
  write();
  function write() {
    let ok = true;
    while (id > 0 && ok) {
      i++;
      id--;
      if (id === 0) {
        writeArtists.write(createArtist(), 'utf-8', callback);
      } else {
        if (i === 300){
          i = 0;
        }
        ok = writeArtists.write(createArtist(i), 'utf-8');
      }
    }
    if (id > 0) {
      writeArtists.once('drain', write);
    }
  }
};


createSeedFile(() => {
  console.log('finished creating csv file Artist.csv');
});
