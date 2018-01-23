import React from "react";
import { Button, Form } from 'semantic-ui-react';
import './ZipForm.css'

const ZipForm = props =>

	<Form>
		<Form.Field>
			<label>Find affordable housing</label>
			<input value={props.zipCode}/>
		</Form.Field>
		<Button onClick={props.handleFormSubmit}>Search</Button>
	</Form>

export default ZipForm;