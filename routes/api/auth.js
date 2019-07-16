const router = require("express").Router();
const authController = require("../../controllers/authController");
const passport = require('../../passport')

// Matches with "/api/rows"
router.route("/signup")
  .post(authController.signUp)
// .put(rowsController.updateWeek)


router.route('/login')
  .post(authController.logLoginRequest, passport.authenticate('local'), authController.loginSuccess)


module.exports = router;
