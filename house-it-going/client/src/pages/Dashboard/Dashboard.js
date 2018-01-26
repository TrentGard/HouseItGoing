import React, { Component } from "react";
import {StatCard, CardContainer} from '../../components/Card';
import {TablePadded, TableItem} from "../../components/Table/";
import API from "../../utils/API";


class Dashboard extends Component {
  
  state = {
        listings: [],
        listingInfo: {
          propertyId: "",
          address: "",
          zip: "",
          councilDistrict: ""
        },
        searchParameters: {
          zip: "",
          mfi: ""
        },
        userInfo: {
          userName: "",
          email: "",
          password: ""
        }
  };

  componentDidMount() {
    this.searchListings("78722", "65");
    this.renderListings("78722", "80")

    // //test save listing to db functionality
    // this.saveListing({
    //   propertyId: "aaron",
    //   address: "trent",
    //   zip: "aaron",
    //   councilDistrict: 1
    // });

    // //test save new user to db functionality
    // this.createUser({
    //   userName: "aaron",
    //   email: "aaron",
    //   password: "aaron"
    // });

  };

  //searchListings funciton is only a test function for hitting the COA API
  searchListings(zipCode, mfiNumber) {
      API.search(zipCode, mfiNumber)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  renderListings = (zipCode, mfiNumber) => {
    API.search(zipCode, mfiNumber)
    .then(res => 
      this.setState({ listings: res.data }))
    .catch(err => console.log(err))
  };

  saveListing = (listingData) => {
    API.saveListing(listingData)
      .then(function (result) {
        console.log(result)
      })
      .catch(function (err) {
        console.log(err)
      })
  };

  findUserListings(UserId) {
    API.findUserListings(UserId)
    .then(function (result) {
      console.log(result)
    })
    .catch(function (err) {
      console.log(err)
    })
  };

  // createUser(userData) {
  //   API.createUser(userData)
  //   .then(function (result){
  //     console.log(result)
  //   })
  //   .catch(function (err) {
  //     console.log(err)
  //   })
  // };  

  handleFormSubmit = (listing) => {
    console.log(window.localStorage.UserId);
    console.log(listing)
    

    this.saveListing({
      propertyId: listing.project_id,
      address: listing.address,
      zip: listing.zip_code,
      councilDistrict: listing.council_district,
      UserId: localStorage.UserId
    })
  };

  //when logout button is clicked, delete UserId from localstorage
  logout = (event) => {
    localStorage.removeItem("UserId")
  }


// Access data points on returned JSON from COA API 
  //res.data[x].unit_type
  //res.data[x].affordability_end_year
  //res.data[x].location_address
  //res.data[x].location_zip
  //res.data[x].housing_type
  //res.data[x].total_affordable_units

  render() {
    return (
      <div >
        <CardContainer>
          <StatCard
          name="Unit Availibility"
          description="Percentage of units currently available"
          value="80%"
          />

          <StatCard
          name="Upcoming Units"
          description="Number of units in production"
          value="600"
          />

          <StatCard
          name="Misc"
          description="TBD"
          value="100"
          />
        </CardContainer>  

        <div>
          {this.state.listings.length ? (
            <TablePadded>
              {this.state.listings.map(listing => {
                return (
                  <TableItem
                    listing={listing}
                    key={listing.project_id}
                    // unitType={listing.}
                    // endYear={listing.}
                    address={listing.address}
                    zip={listing.zip_code}
                    councilDistrict={listing.council_district}
                    propertyId={listing.project_id}
                    onClick={this.handleFormSubmit}
                  >
                  </TableItem>   
                );
              })};
            </TablePadded>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </div>
      </div>  
    );
  }
}

export default Dashboard;



