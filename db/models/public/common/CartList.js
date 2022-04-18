/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const CartListSchema = {
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
      model: 'Product',
      key: 'id',
    },
    onDelete: 'cascade',
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id',
    },
    onDelete: 'cascade',
  },
  count: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  batteryId: {
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

const CartListOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,
  indexes: [
    {
      name: 'ProIdUserIdUnique',
      unique: true,
      fields: ['productId', 'userId'],
    },
  ],

};

const CartListAssociation = (schema) => {
  // schema.public.common.WishList.belongsTo(schema.public.common.ProductModel, {
  //   as: 'productInCartList',
  //   foreignKey: 'productId',
  //   sourceKey: 'id',
  //   onDelete: 'CASCADE',
  //
  // });
};

module.exports = (seq) => {
  const model = seq.define('CartList', CartListSchema, CartListOptions);
  model.associate = CartListAssociation;
  return model;
};
