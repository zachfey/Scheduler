const router = require("express").Router();
const authController = require("../../controllers/authController");
const passport = require('../../passport')

// Matches with "/api/rows"
router.route("/signup")
  .post(authController.signUp)
// .put(rowsController.updateWeek)


router.route('/login')
  .post(authController.logLoginRequest, passport.authenticate('local', function(err, user, info){
    console.log('err', err)
    console.log('user', user)
    console.log('info', info)
  }), authController.loginSuccess)

router.route('/logout')
  .post(authController.logOut)

router.route('/user')
.get(authController.checkUser)

module.exports = router;
