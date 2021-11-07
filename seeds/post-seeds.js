const { Post } = require('../models');

const postdata = [
  {
    title: 'Look at this robot dog!.',
    post_url: 'https://www.bostondynamics.com/spot',
    user_id: 1
  },
  {
    title: 'Did you know you could do this?!',
    post_url: 'https://www.computerhope.com/jargon/c/ctrlc.htm',
    user_id: 2
  },
  {
    title: 'Check out whats happening to bitcoin!',
    post_url: 'https://bitcoin.org/en/',
    user_id: 1
  },
  {
    title: 'OMG Elon musk is at it again!',
    post_url: 'https://twitter.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
    user_id: 3
  },
  {
    title: 'How do I reset my computer?',
    post_url: 'https://linustechtips.com/',
    user_id: 3
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
