import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const BookInput = () => (
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Year of Published</label>
      <input placeholder='Year' />
    </Form.Field>
    <Form.Field>
      <label>Title</label>
      <input placeholder='Title' />
    </Form.Field>
    <Form.Field>
      <label>Edition</label>
      <input placeholder='Edition' />
    </Form.Field>
    <Form.Field>
      <label>City published</label>
      <input placeholder='City published' />
    </Form.Field>
    <Form.Field>
      <label>Publisher</label>
      <input placeholder='Publisher' />
    </Form.Field>
    <Form.Field>
      <label>Pages used</label>
      <input placeholder='Pages used' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default BookInput;