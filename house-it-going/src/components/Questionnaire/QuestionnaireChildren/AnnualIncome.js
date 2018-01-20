import React, {Component} from 'react';

class AnnualIncome extends Component {

	constructor(props) {

		super(props);

	}

	render() {

		return (

			<label>
			
			Choose your annual income:


				<select name="annualIncome" value={this.props.value} onChange={this.props.handleInputChange}>

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
	
		);
	};
};

export default AnnualIncome;