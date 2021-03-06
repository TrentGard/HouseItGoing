import React, {Component} from 'react'
import { Form, Input, Button } from 'semantic-ui-react'
import API from "../../utils/API";

class ZipForm extends Component {
	state = {
		userName: "",
		password: "",
		email: ""
		
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

	// createUser(userData) {

	// 	API.createUser(userData)
	//     .then(res => localStorage.UserId = JSON.stringify(res.data))
	//     .catch(err => console.log(err))
	 
 //  	};

  	createUser(userData) {
  		API.createUser(userData)
  		.then(function (res) {
  			localStorage.UserId = JSON.stringify(res.data)
  			window.location.href = "/dashboard"
  		})
  		.catch(err => console.log(err))
  	}

  	// login(loginData) {
  	// 	API.login(loginData)
  	// 	.then(res => localStorage.UserId = res.data)
  	// 	.catch(err => console.log(err))
  	// };

  	login(loginData) {
  		API.login(loginData)
  		.then(function (res){
  			localStorage.UserId = JSON.stringify(res.data)
  			window.location.href = "/dashboard"
  		})
  		.catch(err => console.log(err))
  	};

  	handleLogin = event => {
  		event.preventDefault();

  		this.login({
  			userName: this.state.userName,
  			password: this.state.password,
  			email: this.state.email
  		})
  	};

	render () {
		return (
			<Form onSubmit={this.handleLoginSubmit}>
				<Form.Field 
					name='userName' 
					value={this.state.userName} 
					control={Input} 
					label='User Name' 
					placeholder='User Name' 
					onChange={this.handleLoginChange} 
				/>
				<Form.Field 
					name='password' 
					value={this.state.password} 
					control={Input} 
					label='Password' 
					type='password' 
					placeholder='Password' 
					onChange={this.handleLoginChange} 
				/>
				<Form.Field 
					name='email' 
					value={this.state.email} 
					control={Input} 
					label='Email' 
					placeholder='Email' 
					onChange={this.handleLoginChange}
				/>
				<Form.Field 
					id='button' 
					control={Button} 
					content='Create Account' 
					disabled={!(this.state.userName && this.state.password && this.state.email)} 
					onClick={this.handleLoginSubmit}
				/>
				<Form.Field 
					id='Loginbutton' 
					control={Button} 
					content='Login' 
					disabled={!(this.state.userName && this.state.password && this.state.email)} 
					onClick={this.handleLogin}
				/>
			</Form>
		)
	};
};

export default ZipForm;