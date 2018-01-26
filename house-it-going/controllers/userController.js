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
				console.log("that user already exists")
			}
		})

		
	},

	login: function(req, res) {
		db.User.findOne({
			where: {
				userName: req.body.userName,
				password: req.body.password,
				email: req.body.email
			}
		}).then(function (data){

			

			if (data) {
				res.json(data.id)
				console.log(data.id)
			}
			else {
				console.log("incorrect login info, please try again.")
			}
			
		}).catch(function (error){
			console.log(error)
		})
	}
};