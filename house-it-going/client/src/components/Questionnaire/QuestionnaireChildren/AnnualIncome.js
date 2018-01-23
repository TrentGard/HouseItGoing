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

	render() {

		return (

			<label>
			
			Choose your annual income:


				<select name="annualIncome">

				{this.renderOptions()}


				</select>

			</label>
	
		);
	};
};

export default AnnualIncome;