/* eslint-disable no-param-reassign */
const DataTypes = require('sequelize');

/**
 *
 * @type {Sequelize}
 */

const SubscribersSchema = {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    email: {
        unique:true,
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: 'Invalid email.',
            },
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

const SubscribersOptions = {
    timestamps: true,
    schema: 'public',
    freezeTableName: true,

};



module.exports = (seq) => {
    const model = seq.define('Subscribers', SubscribersSchema, SubscribersOptions);
    return model;
};
