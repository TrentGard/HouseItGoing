import React, {Component} from 'react';

class AnnualIncome extends Component {

	constructor(props) {

		super(props);

	}

	renderOptions(){

			var arrayOfOptions = this.props.incomes.map((incomeData) => {
					return(
						<option key={incomeData} value={incomeData}>{incomeData}</option>
						)
			})

			return arrayOfOptions;
	}

	handleIncomeChange (event) {

		console.log(event.target.value);

		this.props.handleIncomeChange(event.target.value);

	}

	render() {

		return (

			<label>
			
			Choose your annual income:


				<select
					value={this.props.selectedIncome || this.props.incomes[0]} 
					name="annualIncome"
					onChange={(event) => this.handleIncomeChange(event)}
					>

				{this.renderOptions()}


				</select>

			</label>
	
		);
	};
};

export default AnnualIncome;