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

  xmlName: {
    type: DataTypes.TEXT,
  },
  xmlPrice: {
    type: DataTypes.INTEGER,
  },
  xmlCount: {
    type: DataTypes.INTEGER,
  },
  xmlBarCode: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },

  price: {
    type: DataTypes.INTEGER,
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

  isNew: {
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
  type: {
    type: DataTypes.ENUM,
    values: ['product', 'battery', 'bug'],
    defaultValue: 'product',
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
  // schema.public.common.ProductModel.hook('beforeUpdate', (user) => {
  //   if (user.password && user.password.length) {
  //     user.password = hashPassword(user.password);
  //   }
  //   return user;
  // });
  schema.public.common.ProductModel.hasMany(schema.public.common.ProductPhotos, {
    as: 'photos',
    sourceKey: 'id',
    foreignKey: 'productId',
    onDelete: 'CASCADE',
  });
  schema.public.common.ProductModel.hasMany(schema.public.common.ProductLang, {
    as: 'langs',
    sourceKey: 'id',
    foreignKey: 'productId',
    onDelete: 'CASCADE',
  });
  schema.public.common.ProductModel.belongsToMany(schema.public.common.Brand, {
    through: 'SexBrandMap',
    as: 'brand',
    otherKey: 'brandId',
    foreignKey: 'productId',
    onDelete: 'CASCADE',
  });
  schema.public.common.ProductModel.hasMany(schema.public.common.SexBrandMap, {
    as: 'productSex',
    sourceKey: 'id',
    foreignKey: 'productId',
    onDelete: 'CASCADE',
  });

  schema.public.common.ProductModel.hasMany(schema.public.common.ProductStatistic, {
    as: 'statistic',
    sourceKey: 'id',
    foreignKey: 'productId',
    onDelete: 'CASCADE',
  });

  schema.public.common.ProductModel.belongsToMany(schema.public.common.Age, {
    through: 'AgeMap',
    as: 'productAge',
    otherKey: 'ageId',
    foreignKey: 'productId',
    onDelete: 'CASCADE',
  });
  schema.public.common.ProductModel.belongsToMany(schema.public.common.ProductType, {
    through: 'TypeMap',
    as: 'productType',
    otherKey: 'typeId',
    foreignKey: 'productId',
    onDelete: 'CASCADE',
  });
  schema.public.common.ProductModel.belongsToMany(schema.public.common.ProductUsage, {
    through: 'UsageMap',
    as: 'productUsage',
    otherKey: 'usageId',
    foreignKey: 'productId',
    onDelete: 'CASCADE',
  });
  schema.public.common.ProductModel.belongsToMany(schema.public.common.ProductModel, {
    through: 'ProductAccessoriesMap',
    as: 'accessories',
    sourceKey: 'id',
    foreignKey: 'productId',
    otherKey: 'accessoryId',
    onDelete: 'CASCADE',
  });
  schema.public.common.ProductModel.belongsToMany(schema.public.common.ExtraFilter, {
    through: 'ExtraFilterProduct',
    as: 'extraFilter',
    otherKey: 'extraFilterId',
    foreignKey: 'productId',
    onDelete: 'CASCADE',
  });
};


module.exports = (seq) => {
  const model = seq.define('Product', ItemSchema, ItemOptions);
  model.associate = ItemAssociation;
  return model;
};
