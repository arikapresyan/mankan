/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
const moment = require('moment');

/**
 *
 * @type {Sequelize}
 */

const OrdersSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: {
        tableName: 'User',
        schema: 'public',
      },
      key: 'id',
    },
    onDelete: 'cascade',
  },
  promoCodeId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    // references: {
    //   model: {
    //     tableName: 'PromoCodes',
    //     schema: 'public',
    //   },
    //   key: 'id',
    // },
  },
  paymentId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  paymentAccepted: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  promoCode: {
    type: DataTypes.INTEGER,
  },
  promoCodePercent: {
    type: DataTypes.INTEGER,
  },
  firstName: {
    type: DataTypes.STRING,
    validate: {
      len: {
        args: 3,
        msg: 'FirstName must be at least 3 characters in length',
      },
      is: {
        args: ['^\\p{L}+$', 'u'],
        msg: 'Only letters allowed',
      },
    },
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    validate: {
      len: {
        args: 3,
        msg: 'LastName must be at least 3 characters in length',
      },
      is: {
        args: ['^\\p{L}+$', 'u'],
        msg: 'Only letters allowed',
      },
    },
    allowNull: false,
  },
  email: {

    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: {
        msg: 'Invalid email.',
      },
    },
  },
  phone: {
    type: DataTypes.STRING,
    validate: {
      len: {
        args: [9, 12],
        msg: 'phone number must be at least 9 and at max 12 characters in length',
      },
      is: {
        args: ['^[\\+]?[(]?[0-9]+$', 'i'],
        msg: 'Only numbers allowed',
      },
    },
    allowNull: false,
  },
  deliveryAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  deliveryTime: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  deliveryPrice: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  percent: {
    type: DataTypes.INTEGER,
  },
  paymentType: {
    type: DataTypes.ENUM,
    values: ['cash', 'non-cash', 'bonus'],
    defaultValue: 'cash',
  },
  totalWithOutPromo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalWithPromo: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  totalAmount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM,
    values: ['pending', 'rejected', 'completed'],
    defaultValue: 'pending',
  },
  bonus: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    get() {
      return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
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

const OrdersOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,


};

const ordersAssoc = (schema) => {
  schema.public.common.Orders.belongsToMany(schema.public.common.ProductModel, {
    through: 'OrderedProducts',
    as: 'prods',
    otherKey: 'productId',
    foreignKey: 'orderId',
    onDelete: 'CASCADE',
  });

  schema.public.common.Orders.hasMany(schema.public.common.OrderedProducts, {
    foreignKey: 'orderId',
    as: 'userOrderedProds',
    onDelete: 'CASCADE',

  });
};


module.exports = (seq) => {
  const model = seq.define('Orders', OrdersSchema, OrdersOptions);
  model.associate = ordersAssoc;
  return model;
};
