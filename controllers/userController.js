const mongoose = require('mongoose');
const User = require('../models/user');

exports.signUp = function(req, res, next) {
  console.log(req.body);
  let user = {
    email: req.body.email,
    username: req.body.username,
    password: User.generateHash(req.body.password)
  };
  let data = new User(user);
  data.save();
  res.redirect('/tweet');
//   res.render('signup', { title: 'My tweets', message: '' });
};


exports.signUpForm = function(req, res, next) {
    res.render('signup', { title: 'My tweets', message: '' });
  };

exports.logIn = function(req, res, next) {
  res.render('login', { title: 'My tweets', message: '' });
};
