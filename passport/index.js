const passport = require('passport')
const LocalStrategy = require('./localStrategy');
const User = require('../models/user')

passport.serializeUser((user, cb) => {
    console.log('serializeUser called, user: ');
    console.log(user);
    cb(null, {_id: user._id})
})

passport.deserializeUser((id, cb) => {
    console.log('deserializeUser called')
    User.findOne(
        {_id: id},
        'username',
        (err, user) => {
            console.log('deserialize user, user: ', user)
            cb(null, user);
        }
    )
})

passport.use(LocalStrategy)

module.exports = passport