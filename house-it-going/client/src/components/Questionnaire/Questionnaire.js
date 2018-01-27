import React, {Component} from 'react';
// import HouseholdSize from './QuestionnaireChildren/HouseholdSize';
import AnnualIncome from './QuestionnaireChildren/AnnualIncome';
import ZipCode from './QuestionnaireChildren/ZipCode';

const annualArray = [["11400","17100","22750","28500","34200","37000","39900","45600","57000","68400","79750"],
					["13000","19550","26000","32600","39050","42300","45600","52100","65100","78150","91150"],
					["14650","22000","29250","36650","43950","47600","51300","58600","73250","87950","102550"], 
					["16300","24600","32500","40700","48850","52900","57000","65100","81400","97700","113950"],
					["17600","28780","35100","44000","52750","57150","61550","70350","87900","105500","123050"],
					["18900","32960","37700","47250","56650","61350","66100","75550","94400","113350","132200"],
					["20200","37140","40300","50500","60550","65600","70700","80750","100950","121150","141300"],
					["21500","41320","42900","53750","64500","69850","75250","85950","107450","128950","150400"]];

class Questionnaire extends Component {

	constructor(props){
		super(props);
		this.state = {
		householdNumber: "1",
		householdArray: annualArray[0],
		selectedIncome: annualArray[0][0],
		selectedZipCode: "78610"
		}

		this.updateHousehold = this.updateHousehold.bind(this);

	}

	updateHousehold(event){

		this.setState({householdNumber: event.target.value,
						householdArray: annualArray[parseInt(event.target.value - 1)],
						selectedIncome: annualArray[parseInt(event.target.value - 1)][0]
					})
	}

	handleSubmit() {

		console.log(this.state.selectedIncome, this.state.selectedZipCode, this.state.householdNumber);
		nameOfTheFunctionThatSendsTheDataToTheAPI(this.state.selectedIncome, this.state.selectedZipCode, this.state.householdNumber);

	}

	render() {

		return (

			<div>

				<label>
			
					Choose your household size:


					<select value={this.state.selectValue} name="householdSize" onChange={this.updateHousehold}>

					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>

					</select>

				</label>
				<AnnualIncome 
					incomes={this.state.householdArray} 
					selectedIncome={this.state.selectedIncome}
					handleIncomeChange={newValue => this.setState({selectedIncome: newValue})}
				/>
				<ZipCode 

					selectedZipCode={this.state.selectedZipCode}
					handleZipCodeChange={newValue => this.setState({selectedZipCode: newValue})}

				/>

				<button onClick={() => this.handleSubmit()} id="questionSubmit">Submit</button>

			</div>

		);
	};
}

export default Questionnaire;