const router = require("express").Router();
const rowsController = require("../../controllers/rowsController");

// Matches with "/api/rows"
router.route("/")
  .get(rowsController.findAll)
  // .put(rowsController.updateWeek)
  // .post(rowsController.create);

// // Matches with "/api/rows/:year/:week"
router.route("/:year/:week")
  .get(rowsController.findByDate)
  // .put(booksController.update)
  // .delete(booksController.remove);

router.route('/update')
  .put(rowsController.updateWeek)

router.route('/create')
  .put(rowsController.createWeek)


module.exports = router;
