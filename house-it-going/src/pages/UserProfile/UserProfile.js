import React, { Component } from 'react';
<<<<<<< HEAD

// import {Card} from 'components/Card/Card.jsx';
// import {FormInputs} from 'components/FormInputs/FormInputs.jsx';
// import {UserCard} from 'components/UserCard/UserCard.jsx';
// import Button from 'elements/CustomButton/CustomButton.jsx';
import Footer from '../../components/Footer';
=======
import Table from "../../components/Table";
import { Col, Row, Container } from "../../components/Grid";
>>>>>>> 09a84225fae63edfcf3ff94ad2b020d47aa60c92

class UserProfile extends Component {
    render() {
        return (
<<<<<<< HEAD
            <Footer />
        );
    }
=======
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
>>>>>>> 09a84225fae63edfcf3ff94ad2b020d47aa60c92
}

export default UserProfile;
