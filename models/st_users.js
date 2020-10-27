'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class st_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  st_users.init({
    username: DataTypes.STRING,
    profile_img: DataTypes.STRING,
    level: DataTypes.INTEGER,
    desc: DataTypes.TEXT,
    rating: DataTypes.FLOAT,
    reviewer: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'st_users',
  });
  return st_users;
};