import React, {Component} from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import API from "../../utils/API";

class ZipForm extends Component {
	state = {
		userName: "",
		password: "",
		email: "",
		currentUserId: ""
	};

	// componentDidMount() {

	// };

	handleLoginChange = event => {
		const {name, value} = event.target;
		this.setState ({
			[name]: value
		});
	};

	handleLoginSubmit = event => {

		event.preventDefault();

		this.createUser({
			userName: this.state.userName,
			password: this.state.password,
			email: this.state.email
		})
	};

	createUser(userData) {

		if(this.state.userName || this.state.email) {
			return //error message saying hey that already exists
		}
		else {
			API.createUser(userData)
	    	.then(res => localStorage.UserId = res.data)
	    	.catch(err => console.log(err))
		}  
  	};

	render () {
		return (
			<Form onSubmit={this.handleLoginSubmit}>
				<Form.Field name='userName' value={this.state.userName} control={Input} label='User Name' placeholder='User Name' onChange={this.handleLoginChange} />
				<Form.Field name='password' value={this.state.password} control={Input} label='Password' type='password' placeholder='Password' onChange={this.handleLoginChange} />
				<Form.Field name='email' value={this.state.email} control={Input} label='Email' placeholder='Email' onChange={this.handleLoginChange}/>
				<Form.Field id='button' control={Button} content='Create Account' disabled={!(this.state.userName && this.state.password && this.state.email)} onClick={this.handleLoginSubmit}/>
			</Form>
		)
	};
};

export default ZipForm;