const router = require("express").Router();
const rowRoutes = require("./rows");

// Book routes
router.use("/rows", rowRoutes);

module.exports = router;
