// let Tweet = require('../models/tweet');
const mongoose = require('mongoose');
const Tweet = mongoose.model('Tweet');

let userTweets = [
  {
    body: 'My first tweet',
    user: 'Al Amin',
    createdDate: new Date(),
  },
  {
    body: 'My second tweet',
    user: 'Al Lagabja',
    createdDate: new Date(),
  },
  {
    body: 'My third tweet',
    user: 'Al Jagbajantis',
    createdDate: new Date(),
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
  let tweet = {
    body: req.body.tweet,
    user: req.body.username,
  };
  let data = new Tweet(tweet);
  data.save();
  res.redirect('/tweet');
};

exports.getTweets = function(req, res, next) {
  Tweet.find().then(function(tweets) {
    // console.log(tweets);
    res.render('tweet', { title: 'My tweets', tweets: tweets });
  });
};

exports.deleteTweet = function(req, res, next) {
  console.log(req.body);
  
  Tweet.findByIdAndRemove(req.body.tweetId, function() {
    res.redirect('/tweet');
  })
  
};