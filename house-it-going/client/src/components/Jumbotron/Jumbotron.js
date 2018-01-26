import React, {Component} from "react";
import "./Jumbotron.css";
import {
  Button,
  Container,
  Header,
  Icon,
  Segment
} from 'semantic-ui-react';

class Jumbotron extends Component {	
	render() {
		return (
			<div>
				<Segment
					inverted
					textAlign='center'
					style={{ minHeight: 700, background: 'url(./img/apt.jpg) center', backgroundSize: 'cover' }}
					vertical
				>
		            <Container text>
		              <Header
		                as='h1'
		                content='House It Going'
		                inverted
		                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
		              />
		              <Header
		                as='h2'
		                content='Start your search for affordable housing in Austin!'
		                inverted
		                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
		              />
		              <Button primary size='huge'>
		                Get Started
		                <Icon name='right arrow' />
		              </Button>
		            </Container>
		        </Segment>    		
			</div>    
		)
    }    
}        

export default Jumbotron;