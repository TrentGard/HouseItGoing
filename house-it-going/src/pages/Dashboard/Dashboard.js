import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
import Cards from '../../components/Cards';
import {TablePadded, TableItem} from "../../components/Table/";
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

    findListings(zipcode) {
      API.search(zipCode).then(function (res){
        this.setState({
          result: res.data
        }).catch(function (err){
          console.log(err)
        })
      })

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
        <Container fluid>
          <Row>
            <Col size="md-12">
              <TablePadded>
              {this.state.results.map(results => {
                return (
                  <TableItem
                    key={results.project_id}
                    address={results.address}
                    zip={results.zip_code}
                    councilDistrict={results.council_district}
                  />
                );
              })};
              </TablePadded>
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
