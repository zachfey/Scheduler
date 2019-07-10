const router = require("express").Router();
const rowsController = require("../../controllers/rowsController");

// Matches with "/api/rows"
router.route("/")
  .get(rowsController.findAll)
  // .post(rowsController.create);

// // Matches with "/api/rows/:year/:week"
router.route("/:year/:week")
  .get(rowsController.findByDate)
  // .put(booksController.update)
  // .delete(booksController.remove);

module.exports = router;
