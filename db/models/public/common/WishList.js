/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const WishListSchema = {
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
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
};

const WishListOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,
  indexes: [
    {
      name: 'ProductIdUserIdUnique',
      unique: true,
      fields: ['productId', 'userId'],
    },
  ],

};

const WishListAssociation = (schema) => {
  schema.public.common.WishList.belongsTo(schema.public.common.ProductModel, {
    as: 'productInWishList',
    foreignKey: 'productId',
    sourceKey: 'id',
    onDelete: 'CASCADE',

  });
};

module.exports = (seq) => {
  const model = seq.define('WishList', WishListSchema, WishListOptions);
  model.associate = WishListAssociation;
  return model;
};
