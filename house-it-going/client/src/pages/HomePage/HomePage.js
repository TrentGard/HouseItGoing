import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import ZipForm from "../../components/ZipForm";
// import { Container } from "../../components/Grid";
import Questionnaire from "../../components/Questionnaire/Questionnaire"


class HomePage extends Component {

  state = {
    zipCode: "",
    size: "",
    income: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.setState({
      zipCode: ""
    });
  };    

	componentDidMount() {
		this.searchListings("78722", "80")
	}

  searchListings(zipCode, mfi) {
      API.search(zipCode, mfi)
      .then(function (res){
        console.log(res)
      })
      .catch(function (err) {
        console.log(err)
      });

  }	

  render() {
    return (
      <Jumbotron>
        <ZipForm 
          handleFormSubmit={this.handleFormSubmit} 
          value={this.state.zipCode}
          name="zipCode"
          type="text"
          placeholder="Enter a zip code to search listings"       
        />
        <Questionnaire />
      </Jumbotron>        
    );
  }
}

export default HomePage;