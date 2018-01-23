import React from 'react'
import { Card } from 'semantic-ui-react'

const items = [
  {
    header: 'Unit Availibility',
    description: 'Percentage of units that are currently available.',
    meta: '{props.availibility}%',
  },
  {
    header: 'Project Report - May',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
  {
    header: 'Project Report - June',
    description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%',
  },
]

const Cards = props => (
  <Card.Group items={items} />
)

export default Cards;