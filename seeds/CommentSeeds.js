const { Comment } = require('../models');

const commentdata = [
  {
    comment: 'I hope this helps with any new cake decorators!',
    user_id: 1,
    blog_id: 1,
  },
  {
    comment: 'That is so helpful!',
    user_id: 2,
    blog_id: 1,
  },
  {
   comment: 'Happy Baking everyone!',
    user_id: 1,
   blog_id: 2,
  },
  {
   comment: 'Cant wait to try out this recipe!',
    user_id: 2,
   blog_id: 2,
  },

];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
