/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const ProductPhotosSchema = {
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
  },
  captionText: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.ENUM,
    values: ['image'],
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alt: {
    type: DataTypes.STRING,
  },
  title: {
    type:DataTypes.STRING,
  },
  order: {
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

const ProductPhotosOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,

};


module.exports = (seq) => {
  const model = seq.define('ProductPhotos', ProductPhotosSchema, ProductPhotosOptions);
  return model;
};
