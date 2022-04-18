/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const ProductUsageSchema = {
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

const ProductUsageOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,

};

const ProductUsageAssociation = (schema) => {
  schema.public.common.ProductUsage.hasMany(schema.public.common.ProductUsageLang, {
    as: 'langs',
    foreignKey: 'productUsageId',
    sourceKey: 'id',
    onDelete: 'CASCADE',
  });
};


module.exports = (seq) => {
  const model = seq.define('ProductUsage', ProductUsageSchema, ProductUsageOptions);
  model.associate = ProductUsageAssociation;
  return model;
};
