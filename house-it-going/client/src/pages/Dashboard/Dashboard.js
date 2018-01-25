import React, { Component } from "react";
import Cards from '../../components/Cards';
import {TablePadded, TableItem} from "../../components/Table/";
import AddBtn from '../../components/AddBtn';
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";


class Dashboard extends Component {
  
  state = {
        results: [],
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

        //test COA search API functionality
        this.searchListings("78722", "65");

        this.renderListings("78722", "80");

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
    }

  //searchListings funciton is only a test function for hitting the COA API
  searchListings(zipCode, mfiNumber) {
      API.search(zipCode, mfiNumber)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  renderListings(zipCode, mfiNumber) {
    API.search(zipCode, mfiNumber)
    .then(res => this.setState({ results: res.data }))
    .catch(err => console.log(err))
  };

  saveListing(listingData) {
      
      API.saveListing(listingData)
      .then(function (result){
        console.log(result);
      })
      .catch(function (err) {
        console.log(err)
      })
  };

  createUser(userData) {
    API.createUser(userData)
    .then(function (result){
      console.log(result)
    })
    .catch(function (err) {
      console.log(err)
    })
  };

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
        <Container fluid>
          <Row>
            <Col size="md-4 sm-12">
              <Cards 
              name="Unit Availibility"
              description="Percentage of units currently available"
              value="80%"

              />
            </Col>
            <Col size="md-4 sm-12">
              <Cards 
              name="Upcoming Units"
              description="Number of units in production"
              value="600"
             
              />
            </Col>
            <Col size="md-4 sm-12">
              <Cards 
              name="Misc"
              description="TBD"
              value="100"
             
              />
            </Col>                         
          </Row>
          <div style={{height: '75px', width: '100%'}}/>
          <Row>
            <Col size="md-12">
              {this.state.results.length ? (
                <TablePadded>
                  {this.state.results.map(listing => {
                    return (
                      <TableItem
                        // handleBtnClick={this.handleBtnClick}
                        key={listing.project_id}
                        address={listing.address}
                        zip={listing.zip_code}
                        councilDistrict={listing.council_district}
                        propertyId={listing.project_id}
                        
                      >
                        <AddBtn onClick={() => this.handleFormSubmit(listing)} />
                      </TableItem>   
                    );
                  })};
                </TablePadded>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
          </Row>         
        </Container>
      </div>  
      );
    }
}

export default Dashboard;
