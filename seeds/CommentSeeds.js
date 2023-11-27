const { Comment } = require('../models');

const commentdata = [
  {
    user_id: 1,
    blog_id:1,
  },
  {
    user_id: 2,
    blog_id:2,
  },
  {
   user_id: 3,
   blog_id:3,
  },
  {
   user_id: 4,
   blog_id:4,
  },

];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
