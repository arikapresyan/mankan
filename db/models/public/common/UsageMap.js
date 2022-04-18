/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const UsageMapSchema = {
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
  usageId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'ProductUsage',
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

const UsageMapOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,

};

const UsageMapAssociation = (schema) => {

};

module.exports = (seq) => {
  const model = seq.define('UsageMap', UsageMapSchema, UsageMapOptions);
  model.associate = UsageMapAssociation;
  return model;
};
