/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const ProductMapSchema = {
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
  productUsageId: {
    type: DataTypes.INTEGER,
  },
  productTypeId: {
    type: DataTypes.INTEGER,
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

const ProductMapOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,

};

const ProductMapAssociation = (schema) => {
  schema.public.common.ProductMap.belongsTo(schema.public.common.ProductModel, {
    as: 'product',
    foreignKey: 'productId',
    onDelete: 'CASCADE',

  });
};

module.exports = (seq) => {
  const model = seq.define('ProductMap', ProductMapSchema, ProductMapOptions);
  model.associate = ProductMapAssociation;
  return model;
};
