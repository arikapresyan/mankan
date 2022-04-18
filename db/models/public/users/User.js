/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
const {
  hashPassword,
} = require('../../../../server/helpers/crypto/generator');
/**
 *
 * @type {Sequelize}
 */

const UserSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
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
    allowNull: false,
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
  password: {
    type: DataTypes.STRING,
    validate: {
      len: {
        args: 6,
        msg: 'Password length must be  between 6 to  20',
      },

    },
    allowNull: false,
  },
  lang: {
    type: DataTypes.ENUM,
    values: ['ENG', 'ARM', 'RU'],
    defaultValue: 'ENG',
  },
  isEmailConfirmed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isAcceptedRules: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  bonus: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  boughtSum: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  bonusPercent: {
    type: DataTypes.INTEGER,
    defaultValue: 2,
  },
  deliveryAddress: {
    type: DataTypes.JSONB,
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

const UserOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,
  indexes: [
    {
      name: 'userEmailUnique',
      unique: true,
      fields: ['email'],
    },
  ],
};

const UserAssociation = (schema) => {
  // schema.public.users.User.belongsToMany(schema.public.users.Interests, {
  //   through: 'UserInterestsMap',
  //   as: 'userInterests',
  //   foreignKey: 'userId',
  //   otherKey: 'interestId',
  //   onDelete: 'CASCADE',
  // });
  // schema.public.users.User.belongsToMany(schema.public.common.ProductModel, {
  //   through: 'WishList',
  //   as: 'wishList',
  //   foreignKey: 'userId',
  //   otherKey: 'productId',
  //   onDelete: 'CASCADE',
  // });
  // schema.public.users.User.belongsToMany(schema.public.common.ProductModel, {
  //   through: 'CartList',
  //   as: 'cartList',
  //   foreignKey: 'userId',
  //   otherKey: 'productId',
  //   onDelete: 'CASCADE',
  // });
  //
  schema.public.users.User.hasMany(schema.public.common.Orders, {
    foreignKey: 'userId',
    as: 'userOrders',
  });
  schema.public.users.User.hasMany(schema.public.common.CartList, {
    foreignKey: 'userId',
    as: 'cartList',
    onDelete: 'CASCADE',
  });
  schema.public.users.User.hasMany(schema.public.common.WishList, {
    foreignKey: 'userId',
    as: 'wishList',
    onDelete: 'CASCADE',
  });

  schema.public.users.User.hasOne(schema.public.users.ConfirmCode, {
    as: 'userConfirmCode',
    foreignKey: 'userId',
    onDelete: 'CASCADE',
  });

  schema.public.users.User.beforeCreate((user) => {
    if (user.password && user.password.length) {
      user.password = hashPassword(user.password);
    } else {
      user.blocked = true;
    }
    return user;
  });
};


module.exports = (seq) => {
  const model = seq.define('User', UserSchema, UserOptions);
  model.associate = UserAssociation;
  return model;
};
