const router = require("express").Router();
const rowsController = require("../../controllers/rowsController");

// Matches with "/api/rows"
router.route("/")
  .get(rowsController.findAll)
  .post(rowsController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
