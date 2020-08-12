module.exports = (sequelize, Sequelize) => {
  const Songs = sequelize.define('songs', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    genre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    artist_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    art: {
      type: Sequelize.STRING,
      allowNull: false
    },
    url: {
      type: Sequelize.STRING,
      allowNull: false
    },
    release: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    underscored: true,
    freezeTableName: true,
    timestamps: false
  });
  return Songs
};