import React from 'react';
import {HouseholdSize} from './QuestionnaireChildren/HouseholdSize';
import {AnnualIncome} from './QuestionnaireChildren/AnnualIncome';

export class Questionnaire extends React.Component {

	constructor (props) {

		super(props);

		this.state = {
			// look into what to intialize state too
			householdSize: 1,
			annualIncome: "",
			zipCode: ""
		};

	}

	handleInputChange (event) {
		// this.setState()
		let value = event.target.value;
		const name = event.target.name;
		console.log(value, name);
		this.setState({[name]: value})
	}

	render() {
		return (
			<form>
				<HouseholdSize
					value={this.state.householdSize}
					handleInputChange={this.handleInputChange.bind(this)}
					/>
				<AnnualIncome
					value={this.state.annualIncome}
					handleInputChange={this.handleInputChange.bind(this)}
					/>
			</form>
		)
	}
}