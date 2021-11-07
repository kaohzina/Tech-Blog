const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'This tech blog is super cool!',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'I think that this is helpful!!',
    user_id: 2,
    post_id: 5
  },
  {
    comment_text: 'Can someone tell me what ctrl+c does?',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'This is so cool!',
    user_id: 3,
    post_id: 4
  },
  {
    comment_text: 'Awesome sauce!',
    user_id: 1,
    post_id: 3
  },
  
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
