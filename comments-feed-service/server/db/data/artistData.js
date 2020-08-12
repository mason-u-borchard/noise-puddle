const faker = require('faker');
const fs = require('fs');

const writeArtists = fs.createWriteStream('artistData.csv');
writeArtists.write('id,name,followers_count,tracks_count,profile_pic\n', 'utf8')

function artistSeed (writer, encoding, callback) {
  var i = 1000000;
  var j = 1;
  write();
  function write() {
    let ok = true;
    while (i > 0 && ok) {
      i-=1;
      const random = Math.floor(Math.random() * (960-1) + 1);
      const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
      const followers_count = faker.random.number();
      const tracks_count = faker.random.number({min: 10, max: 100});
      const profile_pic = `https://sdc-comments-pictures.s3.amazonaws.com/artists/image${random}.jpg`

      const data = `${j},${name},${followers_count},${tracks_count},${profile_pic}\n`;
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

artistSeed(writeArtists, 'utf-8', () => {
  writeArtists.end();
});