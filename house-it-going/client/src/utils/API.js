import axios from "axios";
const BASEURL = "https://data.austintexas.gov/resource/2drp-3fg9.json?status=Project Complete&zip_code="
const APIKEY = "&$$app_token=EArK5werWrK5LH6M7XAjxbY31"
const mfiPart1 = "&$where=units_"
const mfiPart2 = "_mfi>0 AND affordability_end_year>2019"


export default {
	search: function (zipCode, mfiNumber) {
		return axios.get(BASEURL + zipCode + mfiPart1 + mfiNumber + mfiPart2 + APIKEY);
	},
	saveListing: function (listingData) {
		return axios.post("/api/listings", listingData);
	},
	createUser: function (userData) {
		return axios.post("/api/users", userData);
	}
};


// Access data points on returned JSON from COA API
//res.data[1].unit_type
//res.data[1].affordability_end_year
//res.data[1].location_address
//res.data[1].location_zip
//res.data[1].housing_type
//res.data[1].total_affordable_units