import React from 'react';
import {
  Card
} from 'semantic-ui-react';

export const StatCard = (props) => (

    <Card>
      <Card.Header>
      {props.name}
      </Card.Header>
      <Card.Content>
      {props.description}
      </Card.Content>
      <Card.Meta>
      {props.value}
      </Card.Meta>
    </Card>  
);