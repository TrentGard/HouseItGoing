const router = require("express").Router();
const listingController = require("../../../controllers/listingController");


router.route("/")
	.post(listingController.create)
	

router.route("/userprofile")
	.post(listingController.findAll)


module.exports = router;