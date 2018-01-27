import React, {Component} from 'react';
// import './Questionnaire.css'
// import HouseholdSize from './QuestionnaireChildren/HouseholdSize';
// import AnnualIncome from './QuestionnaireChildren/AnnualIncome';
// import ZipCode from './QuestionnaireChildren/ZipCode';
import API from "../../utils/API";
import {
  Button,
  Grid,
  Header,
  Segment
} from 'semantic-ui-react';

const annualIncomeAmount = [
	["11400","17100","22750","28500","34200","37000","39900","45600","57000","68400","79750"],
	["13000","19550","26000","32600","39050","42300","45600","52100","65100","78150","91150"],
	["14650","22000","29250","36650","43950","47600","51300","58600","73250","87950","102550"], 
	["16300","24600","32500","40700","48850","52900","57000","65100","81400","97700","113950"],
	["17600","28780","35100","44000","52750","57150","61550","70350","87900","105500","123050"],
	["18900","32960","37700","47250","56650","61350","66100","75550","94400","113350","132200"],
	["20200","37140","40300","50500","60550","65600","70700","80750","100950","121150","141300"],
	["21500","41320","42900","53750","64500","69850","75250","85950","107450","128950","150400"]
];

let mfiNumber = "";	

let userInput = {
	mfiNumber: "",
	zipCode: ""
}			

class Questionnaire extends Component {

		state = {
			annualIncome: "",
			householdNumber: "1",
			zipCode: "78610",
			householdArray: annualIncomeAmount[0],	
		}
	
	componentDidMount () {
		console.log(this);
		console.log(this.state);
	}	

	//Handle user choice for Household Size
	updateHousehold = (event) => {
		console.log(event.target.value);
		// console.log(this)

		const {name, value} = event.target;
		this.setState ({
			[name]: value,
			householdArray: annualIncomeAmount[parseInt(event.target.value - 1)]
		})
	}	

	//Handle user choice for Annual Income
	handleIncomeChange = (event) => {
		console.log(event.target.value);
		// console.log(this)

		this.setState ({
			// [name]: value,
			annualIncome: event.target.value
		})
		console.log(this.state)
	}

	//Handle user choice for Zip Code
	handleZipCodeChange = (event) => {
		console.log(event.target.value);
		// console.log(this)

		this.setState ({
			// [name]: value,
			zipCode: event.target.value
		})
		console.log(this.state)
	}

	//Calculations to find user Mfi
	findMfi = () => {
		const mfiArray = this.state.householdArray;
		console.log(mfiArray);
		
		const indexOfMfiArray = mfiArray.indexOf(this.state.annualIncome)
		console.log(indexOfMfiArray);

		if ( indexOfMfiArray === 0 ) {
			userInput.mfiNumber = "20"
		} else if ( indexOfMfiArray === 1 ) {
			userInput.mfiNumber = "30"
		} else if ( indexOfMfiArray === 2 ) {
			userInput.mfiNumber = "40"
		} else if ( indexOfMfiArray === 3 ) {
			userInput.mfiNumber = "50"
		} else if ( indexOfMfiArray === 4 ) {
			userInput.mfiNumber = "60"
		} else if ( indexOfMfiArray === 5 ) {
			userInput.mfiNumber = "70"
		} else if ( indexOfMfiArray === 6 ) {
			userInput.mfiNumber = "80"
		} else if ( indexOfMfiArray === 7 ) {
			userInput.mfiNumber = "90"
		} else {
			console.log("Sorry, you do not qualify for affordable housing with the City of Austin")
		}	
	}

	//Handle submit button for Form
	handleSubmit = (event) => {
		event.preventDefault();
		// console.log(this.state);
		// console.log(mfiNumber);
		
		userInput.zipCode = this.state.zipCode;
		this.findMfi();

		this.someFn();
	}

	//Send data to parent
	someFn = () => {

		this.props.callBackFromParent(userInput)
	}
 	

	render() {
		return (
			<div>	
			    <Segment 
				    style={{ minHeight: 400, padding: '8em 0em' }}
				    vertical
			    >
			      <Grid container stackable verticalAlign='middle'>
			        <Grid.Row>
			          <Grid.Column width={8}>
			            <Header as='h3' style={{ fontSize: '2em' }}>Need Affordable Housing?</Header>
			            <p style={{ fontSize: '1.33em' }}>
			              Search for properties based on the required data
			            </p>
			          </Grid.Column>
			          <Grid.Column floated='right' width={6}>
						<form className='questionnaire-form'>
							<label>
								Choose your household size:
								<select name="householdNumber" value={this.state.householdNumber} onChange={this.updateHousehold}>
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

							<label>
								Choose your annual income:
								<select
									name="annualIncome"
									// value={this.state.annualIncome}
									onChange={this.handleIncomeChange}
								>
									{this.state.householdArray.map(income => {
										return (
											<option value={income}>{income}</option>
										)	
					            	})};								
								</select>
							</label>							

							<label>
								Choose your zip code:
								<select name="zipCode" value={this.state.zipCode} onChange={this.handleZipCodeChange}>

									<option value="78610">78610</option>
									<option value="78613">78613</option>
									<option value="78617">78617</option>
									<option value="78641">78641</option>
									<option value="78652">78652</option>
									<option value="78653">78653</option>
									<option value="78660">78660</option>
									<option value="78664">78664</option>
									<option value="78681">78681</option>
									<option value="78701">78701</option>
									<option value="78702">78702</option>
									<option value="78703">78703</option>
									<option value="78704">78704</option>
									<option value="78705">78705</option>
									<option value="78712">78712</option>
									<option value="78717">78717</option>
									<option value="78719">78719</option>
									<option value="78721">78721</option>
									<option value="78722">78722</option>
									<option value="78723">78723</option>
									<option value="78724">78724</option>
									<option value="78725">78725</option>
									<option value="78726">78726</option>
									<option value="78727">78727</option>
									<option value="78728">78728</option>
									<option value="78729">78729</option>
									<option value="78730">78730</option>
									<option value="78731">78731</option>
									<option value="78732">78732</option>
									<option value="78733">78733</option>
									<option value="78734">78734</option>
									<option value="78735">78735</option>
									<option value="78736">78736</option>
									<option value="78737">78737</option>
									<option value="78738">78738</option>
									<option value="78739">78739</option>
									<option value="78741">78741</option>
									<option value="78742">78742</option>
									<option value="78744">78744</option>
									<option value="78745">78745</option>
									<option value="78746">78746</option>
									<option value="78747">78747</option>
									<option value="78748">78748</option>
									<option value="78749">78749</option>
									<option value="78750">78750</option>
									<option value="78751">78751</option>
									<option value="78752">78752</option>
									<option value="78753">78753</option>
									<option value="78754">78754</option>
									<option value="78756">78756</option>
									<option value="78757">78757</option>
									<option value="78758">78758</option>
									<option value="78759">78759</option>
								</select>
							</label>

						</form>  
			          </Grid.Column>
			        </Grid.Row>
			        
			        <Grid.Row>
			          <Grid.Column textAlign='center'>
			            <Button size='huge' onClick={this.handleSubmit}>Check Out Your Listings</Button>
			          </Grid.Column>
			        </Grid.Row>
			      </Grid>
			    </Segment>
			</div>          
		);
	};
};

export default Questionnaire;