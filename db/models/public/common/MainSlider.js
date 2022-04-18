
module.exports = (sequelize, DataTypes) => {
  const MainSlider = sequelize.define('MainSlider', {
    url: DataTypes.STRING,
    link: DataTypes.STRING,
  }, {});
  MainSlider.associate = function (models) {
    // associations can be defined here
  };
  return MainSlider;
};

/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const MainSliderSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  image: {
    type: DataTypes.STRING,
  },
  url: {
    type: DataTypes.STRING,
  },
  link: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
};

const MainSliderOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,

};


module.exports = (seq) => {
  const model = seq.define('MainSlider', MainSliderSchema, MainSliderOptions);
  return model;
};
