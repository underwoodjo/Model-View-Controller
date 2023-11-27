const { Blog } = require('../models');

const blogdata = [
  {
    title: 'Printemps',
    content: 'April 20, 2021 07:00:00',
    user: 'userhere',
  },
  {
    title: 'Sommer',
    content: 'June 22, 2021 09:00:00',
    user: 'September 22, 2021 22:00:00',
  },
  {
    title: 'Herfst',
    content: 'September 23, 2021 08:30:00',
    user: 'December 21, 2021 20:30:00',
  },
  {
    title: 'Invierno',
    content: 'December 22, 2020 11:00:00',
    user: 'March 19, 2021 19:00:00',
  },
];

const seedBlog = () => Blog.bulkCreate(blogdatadata);

module.exports = seedBlog;
