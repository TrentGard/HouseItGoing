import React from 'React';

export class Questionnaire extends React.Component {
	state = {
		// look into what to intialize state too
	}

	handleInputChange = () => {
		// this.setState()
	}

	render() {
		return (
			<form>
				<input 
					onChange={this.handleInputChange}
				/>
				<input 
					onChange={this.handleInputChange}
				/>
				<input 
					onChange={this.handleInputChange}
				/>
				<button></button>
			</form>
		)
	}
}