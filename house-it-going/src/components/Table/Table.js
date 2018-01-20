import React from 'react';
import './Table.css';
import { Header, Table, Rating } from 'semantic-ui-react';

<<<<<<< HEAD
const TablePadded = () => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Evidence Rating</Table.HeaderCell>
        <Table.HeaderCell>Effect</Table.HeaderCell>
        <Table.HeaderCell>Efficacy</Table.HeaderCell>
        <Table.HeaderCell>Consensus</Table.HeaderCell>
        <Table.HeaderCell>Comments</Table.HeaderCell>
=======
const TablePadded = (props) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Unit Type</Table.HeaderCell>
        <Table.HeaderCell>End Year</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
        <Table.HeaderCell>Zip Code</Table.HeaderCell>
        <Table.HeaderCell>Save Listing</Table.HeaderCell>
>>>>>>> 09a84225fae63edfcf3ff94ad2b020d47aa60c92
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
<<<<<<< HEAD
          <Header as='h2' textAlign='center'>A</Header>
        </Table.Cell>
        <Table.Cell singleLine>Power Output</Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </Table.Cell>
        <Table.Cell textAlign='right'>
            80% <br />
          <a href='/'>18 studies</a>
        </Table.Cell>
        <Table.Cell>
            Creatine supplementation is the reference compound for increasing muscular creatine levels; there is
            variability in this increase, however, with some nonresponders.
=======
          <Header as='h2' textAlign='center'>Apartment</Header>
        </Table.Cell>
        <Table.Cell singleLine>2020</Table.Cell>
        <Table.Cell>
          1415 Chestnut Ave., Austin, TX
        </Table.Cell>
        <Table.Cell textAlign='right'>
            78702 <br />
          <a href='/'>18 studies</a>
        </Table.Cell>
        <Table.Cell>
            <Rating icon='star' defaultRating={3} maxRating={3} />
>>>>>>> 09a84225fae63edfcf3ff94ad2b020d47aa60c92
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h2' textAlign='center'>A</Header>
        </Table.Cell>
        <Table.Cell singleLine>Weight</Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </Table.Cell>
        <Table.Cell textAlign='right'>
            100% <br />
          <a href='/'>65 studies</a>
        </Table.Cell>
        <Table.Cell>
<<<<<<< HEAD
            Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess
            potency
=======
            Creatine is the reference compound for power improvement.
>>>>>>> 09a84225fae63edfcf3ff94ad2b020d47aa60c92
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TablePadded
