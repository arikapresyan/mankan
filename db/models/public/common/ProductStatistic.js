/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const ProductStatisticSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },

  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: {
        tableName: 'Product',
        schema: 'public',
      },
      key: 'id',
    },
    onDelete: 'cascade',
  },
  count: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  totalPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  bestSeller: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
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

const ProductStatisticOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,
  indexes: [
    {
      name: 'ProductStatisticUnique',
      unique: true,
      fields: ['productId'],
    },
  ],
};

const ProductStatisticAssociation = (schema) => {
  // schema.public.common.ProductMap.belongsTo(schema.public.common.ProductModel, {
  //   as: 'product',
  //   sourceKey: 'id',
  //   foreignKey: 'productId',
  //   onDelete: 'CASCADE',
  // });
  // schema.public.common.ProductMap.belongsTo(schema.public.common.ProductType, {
  //   as: 'productType',
  //   sourceKey: 'id',
  //   foreignKey: 'productTypeId',
  //   onDelete: 'CASCADE',
  // });
  // schema.public.common.ProductMap.belongsTo(schema.public.common.ProductUsage, {
  //   as: 'productUsage',
  //   sourceKey: 'id',
  //   foreignKey: 'productUsageId',
  //   onDelete: 'CASCADE',
  // });
};


module.exports = (seq) => {
  const model = seq.define('ProductStatistic', ProductStatisticSchema, ProductStatisticOptions);
  model.associate = ProductStatisticAssociation;
  return model;
};
