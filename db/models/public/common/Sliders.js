/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const SlidersSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  names: {
    type: DataTypes.JSONB,
    allowNull: false,


  },
  order: {
    type: DataTypes.INTEGER,

  },
  status: {
    type: DataTypes.ENUM,
    values: ['on', 'off'],
    defaultValue: 'off',
  },
  type: {
    type: DataTypes.ENUM,
    values: ['static','extraFilter'],
    defaultValue: 'static',
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

const SlidersOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,

};

const SlidersAssociation = (schema) => {
  schema.public.common.Sliders.hasMany(schema.public.common.ExtraFilter, {
    as: 'extraFilter',
    sourceKey: 'id',
    foreignKey: 'sliderId',
    onDelete: 'CASCADE',
  });
};


module.exports = (seq) => {
  const model = seq.define('Sliders', SlidersSchema, SlidersOptions);
 model.associate = SlidersAssociation;
  return model;
};
