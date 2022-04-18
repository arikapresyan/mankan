// * eslint-disable no-param-reassign */
// const DataTypes = require('sequelize');
// /**
//  *
//  * @type {Sequelize}
//  */
//
// const ProductItemSchema = {
//   id: {
//     primaryKey: true,
//     autoIncrement: true,
//     allowNull: false,
//     type: DataTypes.INTEGER,
//   },
//   productId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     references: {
//       model: {
//         tableName: 'Product',
//         schema: 'public',
//       },
//       key: 'id',
//     },
//   },
//   captionText: {
//     type: DataTypes.STRING,
//   },
//   type: {
//     type: DataTypes.ENUM,
//     values: ['image', 'video'],
//   },
//   url: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   createdAt: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW,
//   },
//   updatedAt: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW,
//   },
// };
//
// const ProductItemOptions = {
//   timestamps: true,
//   schema: 'public',
//   freezeTableName: true,
//
// };
//
//
// module.exports = (seq) => {
//   const model = seq.define('ProductItem', ProductItemSchema, ProductItemOptions);
//   return model;
// };
