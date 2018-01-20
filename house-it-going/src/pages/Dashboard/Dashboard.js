import React, { Component } from "react";
<<<<<<< HEAD
import Jumbotron from "../../components/Jumbotron";
=======
// import Jumbotron from "../../components/Jumbotron";
>>>>>>> 09a84225fae63edfcf3ff94ad2b020d47aa60c92
import Cards from '../../components/Cards';
import Table from "../../components/Table";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";


class Dashboard extends Component {
  state = {
        result: {},
        zipCode: "",
        mfi: ""
    };

    componentDidMount() {
        this.searchListings("78722")
    }

    searchListings(zipCode) {
        API.search(zipCode)
        .then(res => console.log(res))
        .catch(err => console.log(err));

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
<<<<<<< HEAD
      <div>
        <Jumbotron />
        <Container fluid>
          <Row>
            <Col size="md-3">
              <Cards />
            </Col>
          </Row>
          <Row>
            <Col size="md-6 sm-12">
              <Table />
=======
      <div >
        <Container fluid style={{marginBottom:'50'}}>
          <Row>
            <Col size="md-12">
              <Table />
            </Col>
          </Row>
          <Row>
            <Col size="md-4 sm-12">
              <Cards />
>>>>>>> 09a84225fae63edfcf3ff94ad2b020d47aa60c92
            </Col>
          </Row>          
        </Container>
      </div>  
    );
  }
}

export default Dashboard;
