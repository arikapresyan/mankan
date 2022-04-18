/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const ProductTypeSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
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

const ProductTypeOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,

};

const ProductTypeAssociation = (schema) => {
  // schema.public.common.ProductType.belongsToMany(schema.public.common.ProductModel, {
  //   through: 'ProductMap',
  //   as: 'productType',
  //   sourceKey: 'id',
  //   foreignKey: 'productTypeId',
  //   onDelete: 'CASCADE',
  // });
  schema.public.common.ProductType.hasMany(schema.public.common.ProductTypeLang, {
    as: 'langs',
    foreignKey: 'productTypeId',
    sourceKey: 'id',
    onDelete: 'CASCADE',
  });
};


module.exports = (seq) => {
  const model = seq.define('ProductType', ProductTypeSchema, ProductTypeOptions);
  model.associate = ProductTypeAssociation;
  return model;
};
