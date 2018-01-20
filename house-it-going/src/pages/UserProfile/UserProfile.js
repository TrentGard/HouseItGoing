import React, { Component } from 'react';
import Table from "../../components/Table";
import { Col, Row, Container } from "../../components/Grid";

class UserProfile extends Component {
    render() {
        return (
	      <div>

	        <Container fluid>
	          <Row>
	            <Col size="md-3">
	              
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

export default UserProfile;
