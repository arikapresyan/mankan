/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const VocationLangSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  vocationId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  lang: {
    type: DataTypes.ENUM,
    values: ['ENG', 'ARM', 'RU'],
    defaultValue: 'ARM',
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shortDesc: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  // image: {
  //   type: DataTypes.STRING,
  // },

  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
};

const VocationLangOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,

};

module.exports = (seq) => {
  const model = seq.define('VocationLang', VocationLangSchema, VocationLangOptions);
  return model;
};
