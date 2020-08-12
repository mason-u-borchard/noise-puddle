const moment = require('moment');
const fs = require('fs');
const faker = require('faker');

const imageURL = 'https://sdc-media-player.s3.us-east-2.amazonaws.com/photos/photo-';


const songURL = ['https://sdc-media-player.s3.us-east-2.amazonaws.com/songs2/bensound-allthat.mp3', 'https://sdc-media-player.s3.us-east-2.amazonaws.com/songs2/bensound-badass+(1).mp3', 'https://sdc-media-player.s3.us-east-2.amazonaws.com/songs2/bensound-funnysong+(1).mp3', 'https://sdc-media-player.s3.us-east-2.amazonaws.com/songs2/bensound-hipjazz+(1).mp3', 'https://sdc-media-player.s3.us-east-2.amazonaws.com/songs2/bensound-jazzcomedy+(1).mp3', 'https://sdc-media-player.s3.us-east-2.amazonaws.com/songs2/bensound-moose+(1).mp3', 'https://sdc-media-player.s3.us-east-2.amazonaws.com/songs2/bensound-perception+(1).mp3', 'https://sdc-media-player.s3.us-east-2.amazonaws.com/songs2/bensound-retrosoul+(1).mp3', 'https://sdc-media-player.s3.us-east-2.amazonaws.com/songs2/bensound-sexy+(1).mp3', 'https://sdc-media-player.s3.us-east-2.amazonaws.com/songs2/bensound-theelevatorbossanova+(1).mp3'];

const getRandomDate = function() {
  const start = new Date(2000, 0, 1);
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const getRandom = function(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const paddedImg = function(num) {
  var pad = new Array(5).join('0');
  return (pad + num).slice(-pad.length);
}

const createSong = function() {
  const song = `${faker.hacker.adjective()}|${faker.hacker.noun()}|${Math.floor(Math.random() * 500000) + 1}|${imageURL + paddedImg(Math.floor(Math.random() * 1040) + 1)}|${getRandom(songURL)}|${moment(getRandomDate()).format('DD-MMMM-YYYY')}\n`
  return song;
}

const createArtist = function() {
  const artist =  `${faker.name.firstName()}\n`;
  return artist;
}

const writeSongs = fs.createWriteStream('./generatedSongs.csv');
writeSongs.write('title|genre|artist_id|art|url|release\n', 'utf8');

const writeArtists = fs.createWriteStream('./generatedArtists.csv');
writeArtists.write('name\n', 'utf8');

const createSeedFile = function(callback) {
  // 10000000
  let i = 10000000;
  write();
  function write() {
    let ok = true;
    while(i > 0 && ok) {
      i--;
      if (i === 0) {
        writeSongs.write(createSong(), 'utf-8', callback);
      } else {
        ok = writeSongs.write(createSong(), 'utf-8');
      }
    }
    if (i > 0) {
      writeSongs.once('drain', write);
    }
  }
}

const createArtistSeed = function(callback) {
  // 500000
  let i = 500000;
  write();
  function write() {
    let ok = true;
    while(i > 0 && ok) {
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
}

createArtistSeed(() => {
  createSeedFile(() => {
    console.log('finished');
  });
});