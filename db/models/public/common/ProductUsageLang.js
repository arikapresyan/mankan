/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const ProductUsageLangSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  productUsageId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: {
        tableName: 'ProductUsage',
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
    defaultValue: 'ARM',
  },
  description: {
    type: DataTypes.TEXT,
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

const ProductUsageLangOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,
  indexes: [
    {
      name: 'ProductUsageIdLangUnique',
      unique: true,
      fields: ['productUsageId', 'lang'],
    },
  ],

};


module.exports = (seq) => {
  const model = seq.define('ProductUsageLang', ProductUsageLangSchema, ProductUsageLangOptions);

  return model;
};
