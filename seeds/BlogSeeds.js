const { Blog } = require('../models');

const blogdata = [
  {
    title: 'The Art of Decorating Cakes',
    content: 'April 20, 2021 07:00:00',
    user: 'user1',
  },
  {
    title: 'The Art of Baking Cookies',
    content: 'June 22, 2021 09:00:00',
    user: 'user2',
  },
  {
    title: 'The Art of ',
    content: 'September 23, 2021 08:30:00',
    user: 'user3',
  },
  {
    title: 'Invierno',
    content: 'December 22, 2020 11:00:00',
    user: 'user4',
  },
];

const seedBlog = () => Blog.bulkCreate(blogdatadata);

module.exports = seedBlog;
