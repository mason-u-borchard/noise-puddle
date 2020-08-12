const faker = require('faker');
const moment = require('moment');
const axios = require('axios');
const cliProgress = require('cli-progress');
const _colors = require('colors');

const db = require('./db');


let fakeArtist = function () {
    db.Artist.create({
    name: 'the1975',
    followers_count: 981356,
    tracks_count: 136,
    profile_pic: 'https://fec-comments-images.s3.us-east-2.amazonaws.com/frailstateofmindsm.jpg'
  })
  .then((message) => {
    console.log('Success: Created Artist Table');
  })
  .catch((err) => {
    console.log('Error: Artist Table', err)
  })
}

let fakeSong = function() {
  db.Artist.findOrCreate({ where: { name: 'the1975' } })
  .spread((artist, created) => {
    console.log(artist)
    db.Song.create({
      artist_id: artist.id,
      title: 'Frail State of Mind',
      play_count: 16543,
      likes_count: 368,
      repost_count: 41,
      description: '',
      released_by: '',
      release_date: '24 October 2019',
      p_line: '2020 Dirty Hit, under exclusive licence to Polydor Records and Interscope Records',
      c_line: '2019 Dirty Hit, under exclusive licence to Polydor Records and Interscope Records',
      hashtags: ''
    })
    .then((message) => {
      console.log('Success: Created Song Table');
    })
    .catch((err) => {
      console.log('Error: Song.create', err);
    })
  })
  .then((message) => {
    console.log('Success: Artist.findOrCreate');
  })
  .catch((err) => {
    console.log('Error: Artist.findOrCreate', err);
  })
}

async function fakeCommentAsync (string) {
  let fakeCommentsFeed = {
    user_id: faker.random.uuid(),
    user_name: faker.internet.userName(),
    user_profile_pic: faker.internet.avatar(),
    text: faker.lorem.sentence(),
    user_followers_count: Math.floor(Math.random() * 100),
    track_location: moment.utc(Math.floor(Math.random() * 235000)).format('mm:ss'),
    original_comment_id: null
  }
  // console.log(fakeCommentsFeed)
  return fakeCommentsFeed;
}

// async function getHipsum () {
//   axios.get('https://hipsum.co/api/?type=hipster-centric&sentences=100')
//   .then((sentences) => {
//     return sentences.data.join('').split('.')
//   })
// }

let fakeComment = function () {

  fakeCommentAsync()
  // fakeCommentAsync(hipsum.data)
  .then((obj) => {
    db.Comments.create(obj)
  })
  .then((result) => {
    console.log('Success: Created Comments Table');

  })
  .catch((err) => {
    console.log('Error: Comments Table', err);
  })

}

// Run Generator

// start progress bar
// let lorem = '';
// getHipsum()
// .then((result) => console.log(result))

fakeArtist()
fakeSong()

let n = 0
while(n < 100) {
  fakeComment();
  n++;
}

// end generator