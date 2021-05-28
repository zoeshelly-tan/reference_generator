import React, { useRef } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { ADD_REFERENCE, LOADING } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import { ReactDom } from 'react';
import { render } from 'node-sass';

function BookInput() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const yearRef = useRef();
  const titleRef = useRef();
  const editionRef = useRef();
  const cityPublishedRef = useRef();
  const publisherRef = useRef();
  const pageRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.savePost({
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      year: yearRef.current.value,
      title: titleRef.current.value,
      edition: editionRef.current.value,
      cityPublished: cityPublishedRef.current.value,
      publisher: publisherRef.current.value,
      page: pageRef.current.value,
    })
      .then(result => {
        dispatch({
          type: ADD_REFERENCE,
          post: result.data
        });
      })
      .catch(err => console.log(err));
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      yearRef.current.value = "";
      titleRef.current.value = "";
      editionRef.current.value = "";
      cityPublishedRef.current.value = "";
      publisherRef.current.value = "";
      pageRef.current.value = "";
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' required ref={firstNameRef} />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' required ref={lastNameRef} />
      </Form.Field>
      <Form.Field>
        <label>Year of Published</label>
        <input placeholder='Year' required ref={yearRef} />
      </Form.Field>
      <Form.Field>
        <label>Title</label>
        <input placeholder='Title' required ref={titleRef} />
      </Form.Field>
      <Form.Field>
        <label>Edition</label>
        <input placeholder='Edition' required ref={editionRef} />
      </Form.Field>
      <Form.Field>
        <label>City published</label>
        <input placeholder='City published'required ref={cityPublishedRef} />
      </Form.Field>
      <Form.Field>
        <label>Publisher</label>
        <input placeholder='Publisher' required ref={publisherRef} />
      </Form.Field>
      <Form.Field>
        <label>Pages used</label>
        <input placeholder='Pages used' required ref={pageRef} />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit' disabled={state.loading}>Submit</Button>
    </Form>
  )
}
export default BookInput;