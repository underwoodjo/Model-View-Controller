const { Blog } = require('../models');

const blogdata = [
  {
    title: 'The Art of Decorating Cakes',
    content: 'This is where content goes',
    user_id: 1,
  },
  {
    title: 'The Art of Baking Cookies',
    content: 'This is where content goes',
    user_id: 2,
  },

];

const seedBlog = () => Blog.bulkCreate(blogdatadata);

module.exports = seedBlog;
