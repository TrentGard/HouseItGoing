import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
// import { Container } from "../../components/Grid";



class HomePage extends Component {

	componentDidMount() {
		this.searchListings()
	}

    searchListings(zipCode) {
        API.search(zipCode)
        .then(res => console.log(res))
        .catch(err => console.log(err));

    }	

  render() {
    return (
      <Jumbotron />        
    );
  }
}

export default HomePage;
