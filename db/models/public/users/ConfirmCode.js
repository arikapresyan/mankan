/**
 * @type {Sequelize}
 */
const DataTypes = require('sequelize');

const ConfirmCodeSchema = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  userId: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: true,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  confirmed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  type: {
    type: DataTypes.ENUM,
    values: ['email', 'password', 'changeEmail'],
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

const ConfirmCodeOptions = {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,
};

const ConfirmCodeAssociation = (schema) => {
  // schema.public.users.ConfirmCode.hasOne(schema.public.users.User, {
  //   as: 'confirmedUser',
  //   foreignKey: 'id',
  //   sourceKey: 'userId',
  //   onDelete: 'CASCADE',
  // });
};


module.exports = (seq) => {
  const model = seq.define('ConfirmCode', ConfirmCodeSchema, ConfirmCodeOptions);
  model.associate = ConfirmCodeAssociation;
  return model;
};
