import React, {Component} from 'react';
import { Link } from "react-router-dom";
import API from "../../utils/API";
import {
  Button,
  Container,
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
                    <Container text>
                        <Header 
                            as='h2' 
                            content="Need Affordable Housing?" 
                            style={{ fontSize: '2em', textAlign: 'center' }} />
                        <Header
                            as='h3'
                            content='Search for properties based on the required data'
                            style={{ fontSize: '1.7em', fontWeight: 'normal', textAlign: 'center' }}
                          />    
                        <Button style={{ marginLeft: 250,textAlign: 'center' }} size='huge' as={Link} to='/dashboard'>Get Started!</Button>
                        
                    </Container>
                </Segment>
            </div>          
        );
    };

};

export default HomePageInfo;