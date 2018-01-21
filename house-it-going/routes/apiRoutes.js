const router = require("express").Router();
const listingController = require("../controllers/listingController");

router.route("/dash").post(listingController.create);

module.exports = router;