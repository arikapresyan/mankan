/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const WeekTimeSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },

  week: {
    type: DataTypes.JSONB,
  },
  time: {
    type: DataTypes.JSONB,
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

const WeekTimeOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,

};


module.exports = (seq) => {
  const model = seq.define('WeekTime', WeekTimeSchema, WeekTimeOptions);
  return model;
};
