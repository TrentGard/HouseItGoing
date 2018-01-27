import React, { Component } from "react";
import {StatCard, CardContainer} from '../../components/Card';
import {TablePadded, TableItem} from "../../components/Table/";
import API from "../../utils/API";
import AddBtn from '../../components/AddBtn';
import Questionnaire from "../../components/Questionnaire/Questionnaire";

import {
  Button,
  Container,
  Header,
  Icon,
  Segment
} from 'semantic-ui-react';


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
    // this.renderListings(zipCode, mfiNumber)

    // this.myCallBack()
  };

  //searchListings funciton is only a test function for hitting the COA API
  searchListings(zipCode, mfiNumber) {
      API.search(zipCode, mfiNumber)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };


  //renderListings searches using user input and renders the results to the page
  renderListings = (zipCode, mfiNumber) => {
    API.search(zipCode, mfiNumber)
    .then(res => 
      this.setState({ listings: res.data }))
    .catch(err => console.log(err))
  };

  //saveListing saves a particular listing to the db when user clicks save button
  saveListing(listingData) {    
      API.saveListing(listingData)
      .then(function (result){
        console.log(result);
      })
      .catch(function (err) {
        console.log(err)
      })
  }; 

  //handleFormSubmit calls the saveListing function and passes it the relevant data
  handleFormSubmit = (listing) => {
    console.log(window.localStorage.UserId);
    console.log(listing)

    this.saveListing({
      propertyId: listing.project_id,
      address: listing.address,
      zip: listing.zip_code,
      councilDistrict: listing.council_district,
      unitType: listing.housing_type,
      endYear: listing.affordability_end_year,
      UserId: localStorage.UserId
    })
  };

  myCallBack = (dataFromChild) => {
    // let mfiNum = dataFromChild.mfiNumber.value;
    // let mfi = mfiNum.toString();


    // let zipNum = dataFromChild.zipCode;
    // let zip = zipNum.toString();

    let input = Object.values(dataFromChild)

    console.log(dataFromChild)
    console.log(input)
    // console.log(mfiNum)
    // console.log(mfi)
    // console.log(zipNum)
    // console.log(zip)

    this.setState ({

      searchParameters: {
        mfi: dataFromChild.zipCode,
        zip: dataFromChild.mfiNumber
      }
    })

    // userInput.mfiNumber = dataFromChild.mfiNumber
    // userInput.zipCode = dataFromChild.zipCode
    this.renderListings( input ) 
    // this.renderListings(this.state.searchParameters.zipCode, this.state.searchParameters.mfiNumber)
  }

  render() {
    return (
      <div >
      <Segment
      style={{ minHeight: 700, background: 'url(./img/austin3.jpg) center', backgroundSize: 'cover' }}
      >
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
      </Segment>  

        <Questionnaire /> 

        {/*// <div>
        //   {this.state.listings.length ? (
        //     <TablePadded>
        //       {this.state.listings.map(listing => 
        //         return (
        //           <TableItem
        //             listing={listing}
        //             key={listing.project_id}
        //             unitType={listing.housing_type}
        //             endYear={listing.affordability_end_year}
        //             address={listing.address}
        //             zip={listing.zip_code}
        //             councilDistrict={listing.council_district}
        //             propertyId={listing.project_id}
                    
        //           >
        //           <AddBtn onClick={() => this.handleFormSubmit(listing)} />
        //           </TableItem>   
        //         );
        //       })};
        //     </TablePadded>
        //   ) : (
        //     <h3>No Results to Display</h3>
        //   )}
        // </div>*/}
      </div>  
    );
  }
}

export default Dashboard;

// Access data points on returned JSON from COA API 
  //res.data[x].unit_type
  //res.data[x].affordability_end_year
  //res.data[x].location_address
  //res.data[x].location_zip
  //res.data[x].housing_type
  //res.data[x].total_affordable_units
