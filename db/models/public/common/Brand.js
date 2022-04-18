/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const BrandSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true,
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

const BrandOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,

};

const BrandAssociation = (schema) => {
  schema.public.common.Brand.hasMany(schema.public.common.SexBrandMap, {
    as: 'mapSex',
    sourceKey: 'id',
    foreignKey: 'brandId',
    onDelete: 'CASCADE',
  });
};


module.exports = (seq) => {
  const model = seq.define('Brand', BrandSchema, BrandOptions);
  model.associate = BrandAssociation;
  return model;
};
