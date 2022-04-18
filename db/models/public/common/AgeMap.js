/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const AgeSchema = {
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
  ageId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Age',
      key: 'id',
    },
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

const AgeOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,

};

const AgeAssociation = (schema) => {

};


module.exports = (seq) => {
  const model = seq.define('AgeMap', AgeSchema, AgeOptions);
  model.associate = AgeAssociation;
  return model;
};
