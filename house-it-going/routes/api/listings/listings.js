const router = require("express").Router();
const listingController = require("../../../controllers/listingController");


router.route("/")
	.post(listingController.create)
	.get(listingController.findAll)


module.exports = router;