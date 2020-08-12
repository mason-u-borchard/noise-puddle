const Sequelize = require('sequelize');
const sequelize = new Sequelize('media', 'jon', 'raccoon', {
  host: '3.134.84.99',
  dialect: 'postgres'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.songs = require('./models/songs.js')(sequelize, Sequelize);
db.artists = require('./models/artists.js')(sequelize, Sequelize);

db.artists.sync();
db.songs.sync();


// COPY artists (name) FROM '/Users/jonbaltz/Documents/Hack Reactor/system-design/media-player/generatedArtists.csv' DELIMITER '|' CSV HEADER;

// COPY songs (title,genre,artist_id,art,url,release) FROM '/Users/jonbaltz/Documents/Hack Reactor/system-design/media-player/generatedSongs.csv' DELIMITER '|' CSV HEADER;
