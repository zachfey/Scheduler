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
    console.log('req.session:', req.session)

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
  }
};
