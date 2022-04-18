/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const TypeMapSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },

  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Product',
      key: 'id',
    },
    onDelete: 'cascade',
  },
  typeId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'ProductType',
      key: 'id',
    },
    onDelete: 'cascade',
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

const TypeMapOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,

};

const TypeMapAssociation = (schema) => {

};

module.exports = (seq) => {
  const model = seq.define('TypeMap', TypeMapSchema, TypeMapOptions);
  model.associate = TypeMapAssociation;
  return model;
};
