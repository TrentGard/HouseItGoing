import React from 'react';
import './Table.css';
import {
  Segment,
  Table
} from 'semantic-ui-react';

export const TablePadded = (props) => (
  <div> 
    <Segment 
      style={{ minHeight: 400, padding: '8em 0em' }}
      vertical
    >
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Unit Type</Table.HeaderCell>
            <Table.HeaderCell>Affordabililty Expiration Year</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Zip Code</Table.HeaderCell>
            <Table.HeaderCell>Council District</Table.HeaderCell>
            <Table.HeaderCell singleLine>Save Listing</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        {props.children}
        </Table.Body>
      </Table>
    </Segment>
  </div>    
);