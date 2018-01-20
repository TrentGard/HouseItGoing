import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
import Cards from '../../components/Cards';
import Table from "../../components/Table";
import { Col, Row, Container } from "../../components/Grid";

class Dashboard extends Component {
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
