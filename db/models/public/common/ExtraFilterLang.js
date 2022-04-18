/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const ExtraFilterLangSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  extraFilterId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: {
        tableName: 'ExtraFilter',
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

const ExtraFilterLangOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,
  indexes: [
    {
      name: 'ExtraFilterIdLangUnique',
      unique: true,
      fields: ['lang', 'extraFilterId'],
    },
  ],

};


module.exports = (seq) => {
  const model = seq.define('ExtraFilterLang', ExtraFilterLangSchema, ExtraFilterLangOptions);
  return model;
};
