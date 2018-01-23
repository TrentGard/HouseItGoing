// import Dashboard from '../../src/pages/Dashboard/Dashboard';
// import UserProfile from '../../src/pages/UserProfile/UserProfile';

// const appRoutes = [


// ];

// export default appRoutes;

// const router = require("express").Router();
// const listingRoutes = require("./apiRoutes");

// router.use("/users", listingRoutes);

// router.use("/listings", listingRoutes);



// module.exports = router;

const path = require("path");
const router = require("express").Router();
const userRoutes = require("./api/users");
const listingRoutes = require("./api/listings");

// User API Routes
router.use("/api", userRoutes);

//Listing API Routes
router.use("/api", listingRoutes)

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
