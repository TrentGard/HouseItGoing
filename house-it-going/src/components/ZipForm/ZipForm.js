import React from "react";
import { Button, Form } from 'semantic-ui-react'

const ZipForm = () => (
  <Form>
    <Form.Field>
      <input placeholder='Enter a ZIP code' />
    </Form.Field>
    <Button type='submit'>Search</Button>
  </Form>
)

export default ZipForm;