const faker = require('faker');
const fs = require('fs');
const moment = require('moment');

const writeComments = fs.createWriteStream('commentData3.csv');
writeComments.write('id,song_id,user_name,user_followers_count,user_profile_pic,text,track_location,createdat,updatedat\n', 'utf8');

function commentSeed (writer, encoding, callback) {
  var i = 2000000;
  var j = 8000001;
  write();
  function write() {
    let ok = true;
    while (i > 0 && ok) {
      i-=1;
      const random = Math.floor(Math.random() * (1920-960) + 960);
      const song_id = Math.floor(Math.random() * 2000000);
      const user_name = faker.internet.userName();
      const user_followers_count = Math.floor(Math.random() * 100);
      const user_profile_pic = `https://sdc-comments-pictures.s3.amazonaws.com/comments/image${random}.jpg`
      const text = faker.lorem.sentence();
      const track_location = moment.utc(Math.floor(Math.random() * 235000)).format('mm:ss');
      const createdAt = faker.date.past();
      const updatedAt = faker.date.future();

      let data = `${j},${song_id},${user_name},${user_followers_count},${user_profile_pic},${text},${track_location},${createdAt},${updatedAt}\n`
      if(i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
        j++;
      }
    };
    if(i > 0) {
      writer.once('drain', write);
    };
  };
};

commentSeed(writeComments, 'utf-8', () => {
  writeComments.end();
});