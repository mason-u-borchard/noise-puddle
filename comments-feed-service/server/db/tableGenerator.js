const Sequelize = require('sequelize');

const db = new Sequelize('sdc_comments', 'anthony', 'spring2020', {
  dialect: 'postgres',
  host: '54.198.132.59'
});

const Comments = db.define('Comments', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  song_id: Sequelize.INTEGER,
  user_name: Sequelize.STRING,
  user_followers_count: Sequelize.INTEGER,
  user_profile_pic: Sequelize.STRING,
  text: Sequelize.STRING,
  track_location: Sequelize.STRING,
  createdat: Sequelize.STRING,
  updatedat: Sequelize.STRING
},{
  timestamps: false
});

const Artist = db.define('Artists', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: Sequelize.STRING,
  followers_count: Sequelize.INTEGER,
  tracks_count: Sequelize.INTEGER,
  profile_pic: Sequelize.STRING
},{
  freezeTableName: true,
  timestamps: false
});

const Song = db.define('Songs', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  artist_id: Sequelize.INTEGER,
  title: Sequelize.STRING,
  play_count: Sequelize.INTEGER,
  likes_count: Sequelize.INTEGER,
  repost_count: Sequelize.INTEGER,
  release_date: Sequelize.STRING
},{
  freezeTableName: true,
  timestamps: false
});

Artist.sync({ force: false });
Song.sync({ force: false });
Comments.sync({ force: false });
