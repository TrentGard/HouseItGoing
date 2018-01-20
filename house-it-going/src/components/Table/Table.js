import React from 'react';
import './Table.css';
import { Header, Table, Rating } from 'semantic-ui-react';

const TablePadded = (props) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Unit Type</Table.HeaderCell>
        <Table.HeaderCell>End Year</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
        <Table.HeaderCell>Zip Code</Table.HeaderCell>
        <Table.HeaderCell>Save Listing</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>

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
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TablePadded
