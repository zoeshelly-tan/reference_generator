// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Paper extends Model {}

// Paper.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,

//     },
   
//       user_id: {
//         type: DataTypes.INTEGER,
//         user: {
//           model: 'user',
//           key: 'id',
//         },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'paper',
//   }
// );

// module.exports = Paper;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paperSchema = new Schema({
  name: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Paper = mongoose.model("Paper", paperSchema);

module.exports = Paper;