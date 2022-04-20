/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const ItemSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  xmlId: {
    type: DataTypes.INTEGER,
  },
  xmlBarCode: {
    type: DataTypes.STRING,
  },
  xmlName: {
    type: DataTypes.TEXT,
  },
  xmlPrice: {
    type: DataTypes.INTEGER,
  },
  xmlCount: {
    type: DataTypes.INTEGER,
  },

  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },

  price: {
    type: DataTypes.STRING,
  },
  size: {
    type: DataTypes.JSONB,
  },
  boxSize: {
    type: DataTypes.JSONB,
  },

  percent: {
    type: DataTypes.INTEGER,
  },
  visible: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

  minAge: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  maxAge: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 12,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
};

const ItemOptions = {
  timestamps: false,
  schema: 'public',
  freezeTableName: true,
  indexes: [
    {
      name: 'ProductIdUnique',
      unique: true,
      fields: ['xmlId'],
    },
  ],

};

const ItemAssociation = (schema) => {
  schema.public.common.ProductModel.beforeCreate((product, options) => new Promise((resolve) => {
    product.createdAt = new Date();
    return resolve(product, options);
  }));
  schema.public.common.ProductModel.hasMany(schema.public.common.ProductItemModel, {
    as: 'items',
    sourceKey: 'id',
    foreignKey: 'productId',
    onDelete: 'CASCADE',
  });
};


module.exports = (seq) => {
  const model = seq.define('Product', ItemSchema, ItemOptions);
  model.associate = ItemAssociation;
  return model;
};
