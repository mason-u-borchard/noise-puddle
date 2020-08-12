const Sequelize = require('sequelize');
const db = require('./index.js');

const Songs = db.define('songs', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  songtitle: Sequelize.STRING,
  artistname: Sequelize.STRING,
  albumcover: Sequelize.STRING,
  songurl: Sequelize.STRING,
}, {timestamps: false});

// Songs.sync({force: false});

module.exports = Songs;
