const db = require("../models");

module.exports = {
	create: function(req, res) {

		console.log("<<<<--->>>>" + req.body)

		db.SavedListing.create({
			propertyId: req.body.property_id,
			address: req.body.address,
			zip: req.body.zip_code,
			councilDistrict: req.body,council_district
			// UserId: req.params.id
		}).then(function(data) {
			res.json(data);
			console.log(data);
		}).catch(function (error) {
			console.log(error)
		})
	}
};