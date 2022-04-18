/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const ProductAccessoriesMapSchema = {
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
      model: {
        tableName: 'Product',
        schema: 'public',
      },
      key: 'id',
    },
    onDelete: 'cascade',
  },
  accessoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: {
        tableName: 'Product',
        schema: 'public',
      },
      key: 'id',
    },
    onDelete: 'cascade',
  },
  count: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  type: {
    type: DataTypes.ENUM,
    values: ['bug', 'battery'],
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

const ProductAccessoriesMapOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,
  indexes: [
    {
      name: 'ProductIdAccessoriesIdUnique',
      unique: true,
      fields: ['productId', 'accessoryId'],
    },
  ],


};
//
// const ProductMapAssociation = (schema) => {
//
// };


module.exports = (seq) => {
  const model = seq.define('ProductAccessoriesMap', ProductAccessoriesMapSchema, ProductAccessoriesMapOptions);
  // model.associate = ProductAccessoriesMapAssociation;
  return model;
};
