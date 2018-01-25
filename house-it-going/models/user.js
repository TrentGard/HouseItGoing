module.exports = function (sequelize, DataTypes) {
	
	var User = sequelize.define("User", {
		userName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING
		},
		password: {
			type: DataTypes.STRING
		}
	});

	//associating authors with their saved listings
	// User.associate = function (models) {
		
	// 	User.hasMany(models.SavedListing);

	// };

	return User;
	
};