const faker = require('faker');

const processor = (userContext, events, done) => {

  const artist_id = Math.floor(Math.random() * 1000000);

  const song_name = faker.random.word();

  const artist_name = faker.random.word();


  const plays = Math.ceil(Math.random() * 900000);

  const likes = Math.floor(Math.random() * 10000);

  const reposts = Math.floor(Math.random() * 90000);

  const comments = Math.floor(Math.random() * 20000);

  const album_art = 'https://elasticbeanstalk-us-west-1-542100083154.s3-us-west-1.amazonaws.com/tfb-self-titled.jpg';

  const city = faker.address.city();
  const country = faker.address.country();
  const location = city + ', ' + country;

  const artist_pic = 'https://elasticbeanstalk-us-west-1-542100083154.s3-us-west-1.amazonaws.com/tfb-self-titled.jpg';


  userContext.consts.artist_id = artist_id;
  userContext.consts.song_name = song_name;
  userContext.consts.artist_name = artist_name;
  userContext.consts.plays = plays;
  userContext.consts.likes = likes;
  userContext.consts.reposts = reposts;
  userContext.consts.comments = comments;
  userContext.consts.album_art = album_art;
  userContext.consts.location = location;
  userContext.consts.artist_pic = artist_pic;


  return done();
};
("use strict");

module.exports = {
  post
};