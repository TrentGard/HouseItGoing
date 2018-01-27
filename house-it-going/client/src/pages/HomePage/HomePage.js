import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import HomePageInfo from "../../components/HomePageInfo";

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
      <div>
        <Jumbotron />
        <HomePageInfo />
      </div>              
    );
  }
}

export default HomePage;
