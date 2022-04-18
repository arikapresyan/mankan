/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const AgeMapSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Product',
      key: 'id',
    },
    onDelete: 'cascade',
  },
  brandId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Brand',
      key: 'id',
    },
    onDelete: 'cascade',
  },
  sex: {
    type: DataTypes.ENUM,
    values: ['BOY', 'GIRL', 'ALL'],
    defaultValue: 'All',
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

const AgeMapOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,

};

const AgeMapAssociation = (schema) => {
  schema.public.common.SexBrandMap.belongsTo(schema.public.common.Brand, {
    as: 'sexMap',
    sourceKey: 'id',
    foreignKey: 'brandId',
    onDelete: 'CASCADE',
  });
};


module.exports = (seq) => {
  const model = seq.define('SexBrandMap', AgeMapSchema, AgeMapOptions);
  model.associate = AgeMapAssociation;
  return model;
};
