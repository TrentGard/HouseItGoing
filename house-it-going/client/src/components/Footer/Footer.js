import React from "react";
import "./Footer.css";
import {
  Container,
  Grid,
  Header,
  Image,
  List,
  Segment
} from 'semantic-ui-react';

const Footer = () => (

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={5}>
                  <Header inverted as='h4' content='More Info' />
                  <List link inverted>
                    <List.Item as='a'>Contact City Council</List.Item>
                    <List.Item as='a'>Rules for Renters</List.Item>
                    <List.Item as='a'>Forms & Applications</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={9}>
                  <Header as='h4' inverted>Your local representative can help you with questions such as:</Header>
                  <List link inverted>
                    <List.Item as='a'>Are there plans for more affordable units in my area?</List.Item>
                    <List.Item as='a'>Do I have to be on a waitlist to find an affordable housing unit?</List.Item>
                    <List.Item as='a'>Who do I contact to see if these properties have available apartments?</List.Item>
                  </List>                  
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
);

export default Footer;
