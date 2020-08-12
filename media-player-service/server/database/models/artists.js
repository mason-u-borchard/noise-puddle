
module.exports = (sequelize, Sequelize) => {
  const Artists = sequelize.define('artists', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    underscored: true,
    freezeTableName: true,
    timestamps: false
  });
  return Artists
};