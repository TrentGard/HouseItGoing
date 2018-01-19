import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Cards from '../../components/Cards';
import Table from "../../components/Table";
import { Col, Row, Container } from "../../components/Grid";

class Dashboard extends Component {
  render() {
    return (
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
            </Col>
          </Row>          
        </Container>
      </div>  
    );
  }
}

export default Dashboard;
