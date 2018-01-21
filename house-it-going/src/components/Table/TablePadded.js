import React from 'react';
import './Table.css';
import { Table } from 'semantic-ui-react';

export const TablePadded = props => (
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Unit Type</Table.HeaderCell>
            <Table.HeaderCell>End Year</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Zip Code</Table.HeaderCell>
            <Table.HeaderCell singleLine>Save Listing</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        {props.children}
        </Table.Body>
      </Table>
);