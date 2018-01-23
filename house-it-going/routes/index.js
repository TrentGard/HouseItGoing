// import Dashboard from '../../src/pages/Dashboard/Dashboard';
// import UserProfile from '../../src/pages/UserProfile/UserProfile';

// const appRoutes = [


// ];

// export default appRoutes;

const router = require("express").Router();
const listingRoutes = require("./apiRoutes");

router.use("/listings", listingRoutes);

module.exports = router;
