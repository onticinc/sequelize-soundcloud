'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AudioFile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AudioFile.init({
    fileName: DataTypes.STRING,
    fileDescription: DataTypes.STRING,
    public: DataTypes.INTEGER,
    tags: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AudioFile',
  });
  return AudioFile;
};