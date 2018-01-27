import React, { Component } from "react";
import './Contact.css';
import API from "../../utils/API";
import { 
	Button,
	Container,	
	Form,
	Input,
	Segment 
} from 'semantic-ui-react';


class Contact extends Component {

	state = {
		firstName: "",
		lastName: "",
		contactMessage: ""
	};


	handleContactChange = event => {
		const {name, value} = event.target;
		this.setState ({
			[name]: value
		});
	};

	handleContactSubmit = event => {

		event.preventDefault();
		console.log(event.currentTarget)

		// this.createMessage({
		// 	userName: this.state.userName,
		// 	password: this.state.password,
		// 	email: this.state.email
		// })
	};

	// createMessage(messageData) {
	//     API.createMessage(messageData)
	//     .then(function (result){
	//       console.log(result)
	//     })
	//     .catch(function (err) {
	//       console.log(err)
	//     })
 //  	};	

	render() {
		return(
			<div>
				<Segment
					inverted
					textAlign='center'
					style={{ minHeight: 700 }}
					vertical
				>
		            <Container>
                  <Form onSubmit={this.handleContactSubmit}>
                    <Form.Field 
                      name="firstName"
                      value={this.state.firstName} 
                      control={Input} 
                      label='First Name' 
                      placeholder='First Name' 
                      onChange={this.handleContactChange} 
                    />		            
                    <Form.Field 
                      name="lastName"
                      value={this.state.lastName} 
                      control={Input} 
                      label='Last Name' 
                      placeholder='Last Name' 
                      onChange={this.handleContactChange} 
                    />
                    <Form.Field 
                      name='contactMessage' 
                      value={this.state.contactMessage} 
                      control={Input} 
                      label='Message' 
                      placeholder='Message' 
                      onChange={this.handleContactChange}
                    />
                    <Form.Field 
                      id='contactMessageButton' 
                      control={Button} 
                      content='Submit Message' 
                      disabled={!(this.state.firstName && this.state.lastName && this.state.contactMessage)} 
                      onClick={this.handleContactSubmit}
                    />
                  </Form>	
		            </Container>
		        </Segment>    		
			</div>   
		);
	}
}

export default Contact;	
