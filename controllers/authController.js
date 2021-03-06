const db = require("../models");
const passport = require('../passport')

module.exports = {
  reqSess: (req, res, next) => {
    console.log('req.session', req.session);
    next();
  },

  signUp: function (req, res) {
    const { username, password } = req.body
    req.session.username = username;

    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  logLoginRequest: (req, res, next) => {
    console.log('routes/user.js, login, req.body: ', req.body);
    next()
  },

  loginSuccess: (req, res) => {
    console.log('logged in', req.user);
    var userInfo = {
      username: req.user.username
    };
    res.send(userInfo);
  },

  checkUser: (req, res) => {
    console.log('checking user')
    req.user ?
      res.json({ user: req.user })
      : res.json({ user: null })
  },

  logOut: (req, res) => {
    if (req.user) {
      req.logout()
      console.log('logging out')
      res.send({ msg: 'logging out' })
    } else {
      res.send({ msg: 'no user to log out' })
    }
  }
};
