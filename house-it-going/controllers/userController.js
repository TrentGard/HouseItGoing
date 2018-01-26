const db = require("../models");

module.exports = {
	create: function(req, res) {

		console.log("<<<<USER CREATED>>>>" + req.body)

		db.User.findOne({
			where: {
				userName: req.body.userName,
				email: req.body.email
			}
		}).then(function (data){
			if (!data) {
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
			else {
				console.log("sorry, that user name has been taken")
			}
		})
	},

	login: function(req, res) {
		db.User.findOne({
			where: {
				userName: req.body.userName,
				password: req.body.password
			}
		}).then(function (data){
			if (!data) {
				console.log("incorrect login info, please try again or create a new account")
			}
			else {
				res.json(data.id)
				console.log(data.id)
			}	
		}).catch(function (error){
			console.log(error)
		})
	}
};