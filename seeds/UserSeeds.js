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
  {
    username: 'user3',
    email: 'user3@gmail.com',
    password: 'user3password',
  },
  {
    username: 'user4',
    email: 'user4@gmail.com',
    password: 'user4password',
  },
 
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
