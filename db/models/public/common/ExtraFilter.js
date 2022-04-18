/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');
/**
 *
 * @type {Sequelize}
 */

const ExtraFilterSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  sliderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: {
        tableName: 'Sliders',
        schema: 'public',
      },
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

const ExtraFilterOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,
  indexes: [
    {
      name: 'SliderIdUnique',
      unique: true,
      fields: ['sliderId'],
    },
  ],

};

const ExtraFilterAssociation = (schema) => {
  schema.public.common.ExtraFilter.hasMany(schema.public.common.ExtraFilterLang, {
    as: 'langs',
    foreignKey: 'extraFilterId',
    sourceKey: 'id',
    onDelete: 'CASCADE',
  });

};



module.exports = (seq) => {
  const model = seq.define('ExtraFilter', ExtraFilterSchema, ExtraFilterOptions);
  model.associate = ExtraFilterAssociation;
  return model;
};
