import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import ZipForm from "../../components/ZipForm";
// import { Container } from "../../components/Grid";


class HomePage extends Component {

  state = {
    zipCode: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.setState({
      zipCode: ""
    });
  };    

	componentDidMount() {
		this.searchListings("78722")
	}

  searchListings(zipCode) {
      API.search(zipCode)
      .then(res => console.log(res))
      .catch(err => console.log(err));

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
      </Jumbotron>        
    );
  }
}

export default HomePage;
