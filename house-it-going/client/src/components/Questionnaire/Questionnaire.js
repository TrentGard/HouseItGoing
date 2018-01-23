import React, {Component} from 'react';
import HouseholdSize from './QuestionnaireChildren/HouseholdSize';
import AnnualIncome from './QuestionnaireChildren/AnnualIncome';
import ZipCode from './QuestionnaireChildren/ZipCode';

const householdNumer = [1,2,3,4,5,6,7,8];

class Questionnaire extends Component {

	// createSelectItems() {
	//     let items = [];         
	//     for (let i = 0; i <= this.props.maxValue; i++) {             
	//         items.push(<option key={i} value={i}>{i}</option>);   
	//           //here I will be creating my options dynamically based on
	//           //what props are currently passed to the parent component
	//     }
 //    return items;
 // 	}  

	// onDropdownSelected(e) {
	//     console.log("THE VAL", e.target.value);
	//     //here you will see the current selected value of the select input
	// }

	render() {

		return (

			<div>

				<HouseholdSize />
				<AnnualIncome />
				<ZipCode />

			</div>

		);
	};
}

export default Questionnaire;