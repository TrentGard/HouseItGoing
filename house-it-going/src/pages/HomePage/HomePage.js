import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <Container fluid>
          <Row>
            <Col size="md-3">

            </Col>
          </Row>
          <Row>
            <Col size="md-6 sm-12">

            </Col>
          </Row>          
        </Container>
      </div>  
    );
  }
}

export default HomePage;
