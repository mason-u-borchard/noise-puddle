var Sequelize = require('sequelize');

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
      inks: Sequelize.STRING,
      songs: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allownull: false
      }
    }, {
      freezeTableName: true,
      timestamps: false
    });


    return Artist;

  })
  .catch((err) => {
    console.log('error in artist db index: ', err);
  });


