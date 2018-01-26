const router = require("express").Router();
const userController = require("../../../controllers/userController");


router.route("/")
	.post(userController.create)
	.get(userController.login)


module.exports = router;