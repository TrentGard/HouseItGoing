import React, {Component} from 'react';
import { Link } from "react-router-dom";
import API from "../../utils/API";
import {
  Button,
  Grid,
  Header,
  Segment
} from 'semantic-ui-react';
		

class HomePageInfo extends Component {

	render() {
		return (
			<div>	
			    <Segment 
				    style={{ minHeight: 400, padding: '8em 0em' }}
				    vertical
			    >
			      <Grid container stackable verticalAlign='middle'>
			        <Grid.Row>
			          <Grid.Column width={14}>
			            <Header as='h3' style={{ fontSize: '2em' }}>Need Affordable Housing?</Header>
			            <p style={{ fontSize: '1.33em' }}>
			              Search for properties based on the required data
			            </p>
			          </Grid.Column>
			        </Grid.Row>
			        
			        <Grid.Row>
			          <Grid.Column textAlign='center'>
			            <Button size='huge' as={Link} to='/dashboard'>Get Started!</Button>
			          </Grid.Column>
			        </Grid.Row>
			      </Grid>
			    </Segment>
			</div>          
		);
	};
};

export default HomePageInfo;