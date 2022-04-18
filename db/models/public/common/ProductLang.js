/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const ProductLangSchema = {
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
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  metaTitle: {
    type: DataTypes.STRING,
  },
  metaDescription: {
    type: DataTypes.TEXT,
  },
  lang: {
    type: DataTypes.ENUM,
    values: ['ARM', 'ENG', 'RU'],
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

const ProductLangOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,
  indexes: [
    {
      name: 'ProductIdLangUnique',
      unique: true,
      fields: ['productId', 'lang'],
    },
  ],

};


module.exports = (seq) => {
  const model = seq.define('ProductLang', ProductLangSchema, ProductLangOptions);
  return model;
};
