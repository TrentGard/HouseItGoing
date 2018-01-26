import React from 'react';
import { Table } from 'semantic-ui-react';
import AddBtn from "../../components/AddBtn";


export const TableItem = (props) => (
  <Table.Row>
      <Table.Cell>

      </Table.Cell>
      <Table.Cell>
        {props.CouncilDistrict}
      </Table.Cell>
      <Table.Cell>
      	{props.address}
      </Table.Cell>
      <Table.Cell>
      	{props.zip}
      </Table.Cell>
      <Table.Cell>
        {props.propertyId}
      </Table.Cell>
      <Table.Cell>
        <AddBtn onClick={props.handleFormSubmit}/>
      </Table.Cell>
  </Table.Row>
);