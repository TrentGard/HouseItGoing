import React from 'react';
import { Table } from 'semantic-ui-react';
// import AddBtn from "../../components/AddBtn";


export const TableItem = (props) => (
  <Table.Row>
      <Table.Cell>
      {props.unitType}
      </Table.Cell>
      <Table.Cell>
        {props.endYear}
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