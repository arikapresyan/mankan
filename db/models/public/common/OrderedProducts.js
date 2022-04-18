/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
const moment = require('moment');

/**
 *
 * @type {Sequelize}
 */

const OrderedProductsSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: {
        tableName: 'Orders',
        schema: 'public',
      },
      key: 'id',
    },
    onDelete: 'cascade',
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // references: {
    //   model: {
    //     tableName: 'Product',
    //     schema: 'public',
    //   },
    //   key: 'id',
    // },
  },
  url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    // references: {
    //   model: {
    //     tableName: 'User',
    //     schema: 'public',
    //   },
    //   key: 'id',
    // },
  },
  xmlId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  xmlBarCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  xmlPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  percent: {
    type: DataTypes.INTEGER,
  },

  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  count: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nameForUser: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM,
    values: ['pending', 'rejected', 'completed'],
    defaultValue: 'pending',
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    get() {
      return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
    },
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    get() {
      return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
    },
  },
};

const OrderedProductsOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,
  indexes: [
    {
      name: 'OrderedProductsUnique',
      unique: true,
      fields: ['productId', 'orderId'],
    },
  ],

};
const orderedProductsAccosiation = (schema) => {
  schema.public.common.OrderedProducts.belongsTo(schema.public.common.ProductModel, {
    foreignKey: 'productId',
    as: 'product',
  });
};


module.exports = (seq) => {
  const model = seq.define('OrderedProducts', OrderedProductsSchema, OrderedProductsOptions);
  model.associate = orderedProductsAccosiation;
  return model;
};
