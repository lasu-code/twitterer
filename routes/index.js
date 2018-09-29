var express = require('express');
var router = express.Router();
const tweetController = require('../controllers/tweetController');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'LASU' });
// });

router.get('/', tweetController.homePage);
router.get('/tweet', tweetController.getTweets);
router.post('/tweet', tweetController.tweets);
router.post('/deleteTweet', tweetController.deleteTweet);


router.get('/:name', tweetController.profilePage);

// router.get('/tweet', function(req, res, next) {
//   res.render('tweet', { title: 'My tweets', tweets: "Uwawu pawpaw mehn Yaw!!!" });
// });

// router.get('/:name', function(req, res, next) {
//   res.render('profile', { title: 'My tweets', username: req.params.name });
// });

module.exports = router;
