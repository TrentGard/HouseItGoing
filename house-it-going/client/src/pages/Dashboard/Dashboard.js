import React, { Component } from "react";
import Cards from '../../components/Cards';
import {TablePadded, TableItem} from "../../components/Table/";
import AddBtn from '../../components/AddBtn';
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";


class Dashboard extends Component {
  state = {
        results: [],
        zipCode: "",
        mfi: ""
    };



    componentDidMount() {
        this.renderListings("78722")
        this.saveListing({
          propertyId: "aaron",
          address: "whitt",
          zip: "aaron",
          councilDistrict: 1
        })
    }


  searchListings(zipCode) {
      API.search(zipCode)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  renderListings(zipCode) {
    API.search(zipCode)
    .then(res => this.setState({ results: res.data }))
    .catch(err => console.log(err))
  }

  saveListing(dataToSave) {
      API.saveListing(dataToSave)
      .then(function (result){
        console.log(result);
      })
  }


  // handleBtnClick = event => {
  //   // Get the data-value of the clicked button
  //   const btnType = event.target.attributes.getNamedItem("data-value").value;
  //   // Clone this.state to the newState object
  //   // We'll modify this object and use it to set our component's state
  //   const newState = { ...this.state };

  //   if (btnType === "Save") {
  //     // Save to database
  //     //Update image to 'Saved'
  //     //Set state to 'Saved'
  //     console.log("saved");

  //   } else {
  //     // If already in user database, don't add again
  //     //Show image for 'Saved' listing
  //     console.log("already saved");


  //   }
  //   // Replace our component's state with newState
  //   this.setState(newState);
  // };
    } else {
      // If already in user database, don't add again
      //Show image for 'Saved' listing
      console.log("already saved");
    }

    // Replace our component's state with newState
    this.setState(newState);
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
                  {this.state.results.map(results => {
                    return (
                      <TableItem
                        handleBtnClick={this.handleBtnClick}
                        key={results.project_id}
                        address={results.address}
                        zip={results.zip_code}
                        councilDistrict={results.council_district}
                      >
                        <AddBtn />
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
