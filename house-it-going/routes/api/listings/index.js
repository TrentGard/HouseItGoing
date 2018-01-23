const router = require("express").Router();
const listingRoutes = require("./listings");

// Book routes
router.use("/listings", listingRoutes);

module.exports = router;