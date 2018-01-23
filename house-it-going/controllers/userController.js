const db = require("../models");

module.exports = {
	create: function(req, res) {

		console.log("<<<<USER CREATED>>>>" + req.body)

		db.User.create({
			userName: req.body.userName,
			email: req.body.email,
			password: req.body.password,
		}).then(function(data) {
			res.json(data.id);
			console.log(data.id);
		}).catch(function (error) {
			console.log(error)
		})
	}
};