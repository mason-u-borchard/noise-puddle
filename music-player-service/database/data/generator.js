/* eslint-disable func-style */
const fs = require('fs');
const axios = require('axios');
const writeStream = fs.createWriteStream(__dirname + '/data.csv');
writeStream.write('id,songtitle,artistname,albumcover,songurl\n', 'utf8');


const title = ['A New Beginning', 'Creative Minds', 'Happy Rock', 'Hey', 'Jazzy Frenchy', 'Little Idea', 'Summer', 'Ukulele'];
const artist = ['Dave Matthews Band', 'Jason Mraz', 'John Mayer', 'Dwilly', 'Chance the Rapper', 'Tame Impala', 'Tom Misch', 'Smashing Pumpkins'];
const url = ['https://hr-sdc-assets.s3.us-east-2.amazonaws.com/songs/bensound-anewbeginning.mp3', 'https://hr-sdc-assets.s3.us-east-2.amazonaws.com/songs/bensound-creativeminds.mp3', 'https://hr-sdc-assets.s3.us-east-2.amazonaws.com/songs/bensound-happyrock.mp3', 'https://hr-sdc-assets.s3.us-east-2.amazonaws.com/songs/bensound-hey.mp3', 'https://hr-sdc-assets.s3.us-east-2.amazonaws.com/songs/bensound-jazzyfrenchy.mp3', 'https://hr-sdc-assets.s3.us-east-2.amazonaws.com/songs/bensound-littleidea.mp3', 'https://hr-sdc-assets.s3.us-east-2.amazonaws.com/songs/bensound-summer.mp3', 'https://hr-sdc-assets.s3.us-east-2.amazonaws.com/songs/bensound-ukulele.mp3'];
const photo = () => {
  var randomNum = Math.floor(Math.random() * 1038);
  return `https://hr-sdc-assets.s3.us-east-2.amazonaws.com/album-covers/photos/photo-${randomNum}.jpg`;
};

const random = array => array[Math.floor(Math.random() * array.length)];
const createSong = (i) => ` ${i}, ${random(title)}, ${random(artist)}, ${photo()}, ${random(url)}
`;



function writeDataToCsv(callback) {
  var i = 10000000;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        console.log('writing the 10 millionth row');
        writeStream.write(createSong(i), 'utf8', callback);
      } else {
        ok = writeStream.write(createSong(i), 'utf8');
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writeStream.once('drain', write);
    }
  }
}

writeDataToCsv(() => console.log('errything is dun'));