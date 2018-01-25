import React, {Component} from 'react';

class ZipCode extends Component {

	constructor(props) {

		super(props);

	}

	render() {

		return (

			<label>
			
			Choose your zip code:

				<select name="householdSize" value={this.props.value} onChange={this.props.handleInputChange}>

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
	
		);
	};
};

export default ZipCode;