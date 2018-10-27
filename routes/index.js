var express = require('express');
var router = express.Router();
const tweetController = require('../controllers/tweetController');
const userController = require('../controllers/userController');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'LASU' });
// });

router.get('/', tweetController.homePage);
router.get('/tweet', tweetController.getTweets);
router.post('/tweet', tweetController.tweets);
router.post('/deleteTweet', tweetController.deleteTweet);

// Authentication
router.get('/login', userController.logIn);
router.post('/login', tweetController.deleteTweet);

router.get('/signup', userController.signUpForm);
router.post('/signup', userController.signUp);


router.get('/:name', tweetController.profilePage);

// router.get('/tweet', function(req, res, next) {
//   res.render('tweet', { title: 'My tweets', tweets: "Uwawu pawpaw mehn Yaw!!!" });
// });

// router.get('/:name', function(req, res, next) {
//   res.render('profile', { title: 'My tweets', username: req.params.name });
// });

module.exports = router;
