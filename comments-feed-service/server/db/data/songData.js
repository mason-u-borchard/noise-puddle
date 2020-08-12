const faker = require('faker');
const fs = require('fs');

const writeSongs = fs.createWriteStream('songData.csv');
writeSongs.write('id,artist_id,title,play_count,likes_count,repost_count,release_date\n', 'utf8')

function songSeed (writer, encoding, callback) {
  var i = 2000000;
  var j = 1;
  write();
  function write() {
    let ok = true;
    while (i > 0 && ok) {
      i-=1;
      const title = faker.hacker.noun();
      const artist_id = Math.floor(Math.random() * 1000000);
      const play_count = faker.random.number();
      const likes_count = faker.random.number();
      const repost_count = faker.random.number({min: 10, max: 100});
      const release_date = faker.date.past();

      const data = `${j},${artist_id},${title},${play_count},${likes_count},${repost_count},${release_date}\n`;
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

songSeed(writeSongs, 'utf-8', () => {
  writeSongs.end();
});