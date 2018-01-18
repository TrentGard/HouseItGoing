module.exports = function (sequelize, DataTypes) {
	
	var SavedListing = sequelize.define("SavedListing", {
		
		//column contains the unique property ID
		propertyId: {
			type: DataTypes.STRING,
			allowNull: false
		},
		address: {
			type: DataTypes.STRING
		},
		zip: {
			type: DataTypes.STRING
		},
		councilDistrict: {
			type: DataTypes.INTEGER
		}
		
	});

	//associating each saved listing with a user profile
	SavedListing.associate = function (models) {

		SavedListing.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});
	};
	
	return SavedListing;

};