var Sequelize = require('sequelize');

// Will put db name here at some point. Spudiferous is my test db
var dbName = 'sidebar2';
var username = 'masonborchard';
var password = '';

// Databse login info
const db = new Sequelize(dbName, username, password, {
  dialect: 'postgres'
  // host: 'localhost'
});

// Connect to database
db
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established');
  }, function (err) {
    console.log('Unable to connect to the database: ', err);
  });

// Defining a model. Id, createdAt and updateAt auto added.
const Artist = db.define('artist', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: Sequelize.STRING,
  track_count: Sequelize.INTEGER,
  follower_count: Sequelize.INTEGER,
  following_count: Sequelize.INTEGER,
  about: Sequelize.STRING,
  links: Sequelize.STRING,
  liked_songs: Sequelize.INTEGER
  // songs: Sequelize.ARRAY(Sequelize.STRING)
}, {
  freezeTableName: true,
  timestamps: false,
  underscored: true
});

Artist.sync({ force: false });



var SongLike = db.define('likedsongs', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  artist_id: Sequelize.INTEGER,
  song_name: Sequelize.STRING,
  artist_name: Sequelize.STRING,
  plays: Sequelize.INTEGER,
  likes: Sequelize.INTEGER,
  reposts: Sequelize.INTEGER,
  comments: Sequelize.INTEGER,
  album_art: Sequelize.STRING,
  location: Sequelize.STRING,
  artist_pic: Sequelize.STRING
}, {
  freezeTableName: true,
  timestamps: false,
  underscored: true
});

SongLike.sync({ force: false });




module.exports.Artist = Artist;
module.exports.SongLike = SongLike;