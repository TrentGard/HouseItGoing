import React from 'react';
import {
  Card,
  Container,
  Grid,
  Segment
} from 'semantic-ui-react';


export const CardContainer = (props) => (

  <Segment 
    style={{minHeight: 700, padding: '8em 0em' }}
    textAlign='center'
    vertical
  >
    <Container>
      <Card.Group 
        style={{marginTop: '4em', paddingLeft: 90 }}
        horizontal
      >
    	 {props.children}
      </Card.Group>  
    </Container>
  </Segment>  
);        