import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
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
            </Col>
          </Row>          
        </Container>
      </div>  
    );
  }
}

export default Dashboard;
