const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Paper extends Model {}

Paper.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
   
      reference_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Reference',
          key: 'id',
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'paper',
  }
);

module.exports = Paper;
 