let Tweet = require('../models/tweet');

let userTweets = [
  {
    body: 'My first tweet',
    user: 'Al Amin',
    date: new Date(),
  },
  {
    body: 'My second tweet',
    user: 'Al Lagabja',
    date: new Date(),
  },
  {
    body: 'My third tweet',
    user: 'Al Jagbajantis',
    date: new Date(),
  },
];

exports.homePage = function(req, res, next) {
  res.render('index', { title: 'LASUCode' });
};

// exports.tweets = function(req, res, next) {
//     console.log(req.body.username);
//   res.render('tweet', { title: 'My tweets', tweets: userTweets });
// };

exports.profilePage = function(req, res, next) {
  res.render('profile', { title: 'My tweets', username: req.params.name });
};

exports.tweets = function(req, res, next) {
    console.log(req.body);
    res.render('tweet', { title: 'My tweets', tweets: userTweets });
  };