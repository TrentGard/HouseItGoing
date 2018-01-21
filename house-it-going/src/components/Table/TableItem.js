import React from 'react';
import { Table } from 'semantic-ui-react';


export const TableItem = (props) => (
  <Table.Row>
      <Table.Cell>
      	{props.key}
      </Table.Cell>
      <Table.Cell>
      	{props.address}
      </Table.Cell>
      <Table.Cell>
      	{props.zip}
      </Table.Cell>
      <Table.Cell>
      	{props.councilDistrict}
      </Table.Cell>
      <Table.Cell>
        {props.children}
      </Table.Cell>
  </Table.Row>
);
  

