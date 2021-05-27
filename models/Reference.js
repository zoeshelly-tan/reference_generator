// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Reference extends Model {}

// Reference.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     author: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     year: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//     publisher: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     cityPublished: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     paper_id: {
//       type: DataTypes.INTEGER,
//       paper: {
//         model: 'paper',
//         key: 'id',
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'Reference',
//   }
// );

// module.exports = Reference;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const referenceSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  year:{type:Integer, required:true},
  publisher:{type:Date, required:true},
  cityPublished:{type:String, required:true},
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Reference = mongoose.model("Reference", referenceSchema);

module.exports = Reference;