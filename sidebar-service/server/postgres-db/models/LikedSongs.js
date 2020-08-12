var Sequelize = require('sequelize');

// Will put db name here at some point. Spudiferous is my test db
var dbName = 'sidebar2';
var username = 'masonborchard';
var password = '';

// Databse login info
var db = new Sequelize(dbName, username, password, {
  dialect: 'postgres',
  host: 'localhost'
});

// Connect to database
db
  .authenticate()
  .then(() => {
    var SongLike = db.define('likedsongs', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: Sequelize.STRING,
      artist_id: Sequelize.STRING,
      plays: Sequelize.INTEGER,
      likes: Sequelize.INTEGER,
      reposts: Sequelize.INTEGER,
      comments: Sequelize.INTEGER,
      album_art: Sequelize.STRING,
      location: Sequelize.STRING,
      pic: Sequelize.STRING
    }, {
      freezeTableName: true,
      timestamps: false,
      underscored: true
    });
    SongLike.sync({ force: false });
  })
  .catch((err) => {
    console.log('error in likedsongs db index: ', err);
  });


