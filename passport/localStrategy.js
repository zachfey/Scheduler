const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
    {
        usernameField: 'username'
    },
    function(username, password, cb){
        User.findOne({username: username}, (err, user) => {
            // console.log('user', user)
            // console.log('localstrategy password', password)
            if (err) {
                return cb(err)
            }
            if (!user){
                return cb(null, false, {message: 'Incorrect username'})
            }
            if(!user.checkPass(password)){
                return cb(null, false, {message: 'Yo wrong pass'})
            }
            return cb(null, user)
        })
    }
)

module.exports = strategy