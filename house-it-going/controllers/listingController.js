const db = require("../models");

module.exports = {
	create: function(req, res) {

		console.log("<<<<--->>>>" + req.body)

		db.SavedListing.create({
			propertyId: req.body.propertyId,
			address: req.body.address,
			zip: req.body.zip,
			councilDistrict: req.body.councilDistrict
			// UserId: req.body.UserId
		}).then(function(data) {
			res.json(data);
			console.log(data);
		}).catch(function (error) {
			console.log(error)
		})
	}
};