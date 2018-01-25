import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import styles from "./contact.css";

class Contact extends Component {

render() {
	return(
	<Jumbotron>
	<div class="ui big form big-form">
		<div class="two fields">
			<form class="ui form" />
		    	<label class="name-one">First Name</label>
		    		<input type="text" name="first-name" placeholder="First Name" />
		  <div class="field" />
		    	<label class="name-one">Last Name</label>
		    		<input type="text" name="last-name" placeholder="Last Name" />
		 </div>
		    <div class="ui big form">
			  <div class="field">
			    <label class="name-one">Text</label>
			    	<textarea></textarea>
			  </div>
			</div>
		  
	</div>
	</Jumbotron>
	);
}
}

export default Contact;