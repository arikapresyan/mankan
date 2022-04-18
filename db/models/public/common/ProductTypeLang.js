/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const ProductTypeLangSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  productTypeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: {
        tableName: 'ProductType',
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

const ProductTypeLangOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,
  indexes: [
    {
      name: 'ProductTypeIdLangUnique',
      unique: true,
      fields: ['productTypeId', 'lang'],
    },
  ],

};



module.exports = (seq) => {
  const model = seq.define('ProductTypeLang', ProductTypeLangSchema, ProductTypeLangOptions);
  return model;
};
