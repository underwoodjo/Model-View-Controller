const { User } = require('../models');

const userData = [
  {
    username: 'user1',
    email: 'user1@gmail.com',
    password: 'user1password'
  },
  {
    username: 'user2',
    email: 'user2@gmail.com', 
    password: 'user2password',
  },

 
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
