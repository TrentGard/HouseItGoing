import React from 'react';

export const AnnualIncome = props => {

		return (

			<label>
			
			Choose your annual income:

				<select name="annualIncome" value={props.value} onChange={props.handleInputChange}>

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