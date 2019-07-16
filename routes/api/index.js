const router = require("express").Router();
const rowRoutes = require("./rows");
const authRoutes = require('./auth')

// Schedule routes
router.use("/rows", rowRoutes);

// Authentication routes
router.use('/auth', authRoutes)

module.exports = router;
