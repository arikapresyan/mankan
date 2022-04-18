/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const PromoCodesSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },

  code: {
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
  },
  dateOfUse: {
    type: DataTypes.DATE,
  },
  isUsed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  percent: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  validTill: {
    type: DataTypes.DATEONLY,
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

const PromoCodesOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,

};

const PromoCodesAssociation = (schema) => {
  // schema.public.common.WishList.belongsToMany(schema.public.users.User, {
  //   as: 'userInWishList',
  //   foreignKey: 'userId',
  //   sourceKey: 'id',
  //   onDelete: 'CASCADE',
  //
};


module.exports = (seq) => {
  const model = seq.define('PromoCodes', PromoCodesSchema, PromoCodesOptions);
  model.associate = PromoCodesAssociation;
  return model;
};
