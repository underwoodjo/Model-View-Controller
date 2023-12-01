const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

// Added Association Methods:
    // Blog belongsTo User
    Blog.belongsTo(User, {
      foreignKey: "user_id"
    })
     // User have many Blogs and Comments
    User.hasMany(Blog, {
      foreignKey: "user_id"
    })
    User.hasMany(Comment, {
      foreignKey: "user_id"
    })
    // Comment belongs to User and Blog
   Comment.belongsTo(User, {
    foreignKey: "user_id"
   })
   Comment.belongsTo(Blog, {
    foreignKey: "blog_id"
   })
   
    module.exports = {
      User,
      Blog,
      Comment,
    };
    

Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
});

Comment.belongsTo(Blog, {
  foreignKey: 'blog_id',
});

module.exports = { User, Blog, Comment };
