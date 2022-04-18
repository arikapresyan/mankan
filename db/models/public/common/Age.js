/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const AgeSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  minAge: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  maxAge: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 20,
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

const AgeOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,

};

const AgeAssociation = (schema) => {

};


module.exports = (seq) => {
  const model = seq.define('Age', AgeSchema, AgeOptions);
  model.associate = AgeAssociation;
  return model;
};
