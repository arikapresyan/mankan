/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const ExtraFilterProductSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },

  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  extraFilterId: {
    type: DataTypes.INTEGER,
    allowNull: false,
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

const ExtraFilterProductOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,

};

const ExtraFilterProductAssociation = (schema) => {

};


module.exports = (seq) => {
  const model = seq.define('ExtraFilterProduct', ExtraFilterProductSchema, ExtraFilterProductOptions);
  model.associate = ExtraFilterProductAssociation;
  return model;
};
