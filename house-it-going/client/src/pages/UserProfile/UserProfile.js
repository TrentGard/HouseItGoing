import React, { Component } from 'react';
// import Table from "../../components/Table";
// import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import {TablePadded, TableItem} from "../../components/Table/";

class UserProfile extends Component {



	state = {
		listings: []
	};

	

	componentDidMount () {
		console.log(localStorage.UserId)
		let UserId = localStorage.UserId
		
		UserId = JSON.parse(UserId)
		console.log(UserId)
		this.findUserListings(UserId)
	};

	// findUserListings(UserId) {
	//     API.findUserListings(UserId)
	//     .then(function (result) {
	//     	this.setState({
	//     		listings: result.data
	//     	})
	//       console.log(this.state.listings)
	//     })
	//     .catch(function (err) {
	//       console.log(err)
	//     })
 //  	};



  	findUserListings(UserId) {
  		API.findUserListings(UserId)
  		.then(res => this.setState({ listings: res.data }))
  		.catch(err => console.log(err))
  	};

    render() {
        return (

	      <div>

	       {/* <Container fluid>
	          <Row>
	            <Col size="md-3">
	              
	            </Col>
	          </Row>
	          <Row>
	            <Col size="md-6 sm-12"> */}
	              <div>
          {this.state.listings.length ? (
            <TablePadded>
              {this.state.listings.map(listing => {
                return (
                  <TableItem
                    listing={listing}
                    key={listing.project_id}
                    unitType={listing.housing_type}
                    endYear={listing.affordability_end_year}
                    address={listing.address}
                    zip={listing.zip_code}
                    councilDistrict={listing.council_district}
                    propertyId={listing.project_id}
                  >
                  </TableItem>   
                );
              })};
            </TablePadded>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </div>
	           {/* </Col>
	          </Row>          
	        </Container> */}

	      </div>  
    );
  }
}

export default UserProfile;
