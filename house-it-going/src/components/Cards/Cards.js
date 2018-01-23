import React from 'react'
import { Card } from 'semantic-ui-react'

const Cards = props => (

  <Card.Group>
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
  </Card.Group>
)

export default Cards;