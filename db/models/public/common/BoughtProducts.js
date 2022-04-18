/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const BoughtProductsSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: {
        tableName: 'User',
        schema: 'public',
      },
      key: 'id',
    },
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
  },
  minAge: {
    type: DataTypes.INTEGER,
  },
  maxAge: {
    type: DataTypes.INTEGER,
  },
  sex: {
    type: DataTypes.ENUM,
    values: ['BOY', 'GIRL', 'ALL'],
  },
  paymentType: {
    type: DataTypes.ENUM,
    values: ['cash', 'non-cash', 'bonus'],
    defaultValue: 'cash',
  },
  amount: {
    type: DataTypes.STRING,
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

const BoughtProductsOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,
  indexes: [
    {
      name: 'ProductIdUserIdBoughtUnique',
      unique: true,
      fields: ['productId', 'userId'],
    },
  ],

};

// const BoughtProducts = (schema) => {
//   // schema.public.common.Orders.belongsTo(schema.public.common.ProductModel, {
//   //   as: 'productsss',
//   //   foreignKey: 'productId',
//   //   onDelete: 'CASCADE',
//   // });
// };


module.exports = (seq) => {
  const model = seq.define('BoughtProducts', BoughtProductsSchema, BoughtProductsOptions);
  // model.associate = BoughtProducts;
  return model;
};
