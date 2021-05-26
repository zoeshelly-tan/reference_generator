const sequelize = require('../config/connection');
const { User, Paper, Reference } = require('../models');

const userData = require('./userData.json');
const paperData = require('./paperData.json');
const referenceData = require('./referenceData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const paper of paperData) {
    await Paper.create({
      ...paper,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  for (const reference of referenceData ){
    await Reference.create({
      ...reference,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    })
  }

  process.exit(0);
};

seedDatabase();
