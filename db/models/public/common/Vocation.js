/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const VocationSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },

  image: {
    type: DataTypes.STRING,
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

const VocationOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,

};

const VocationAssociation = (schema) => {
  schema.public.common.Vocation.hasMany(schema.public.common.VocationLang, {
    as: 'langs',
    foreignKey: 'vocationId',
    sourceKey: 'id',
  });
};

module.exports = (seq) => {
  const model = seq.define('Vocation', VocationSchema, VocationOptions);
  model.associate = VocationAssociation;
  return model;
};
