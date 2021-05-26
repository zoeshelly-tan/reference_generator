const User = require('./User');
const Paper = require('./Paper');
const Reference = require('./Reference')

User.hasMany(Paper, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Paper.hasMany(Reference, {
  foreignKey: 'paper_id',
  onDelete: 'CASCADE'
});


Paper.belongsTo(User, {
  foreignKey: 'user_id', 
});


module.exports = { User, Paper,Reference };
