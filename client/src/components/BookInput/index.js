import React, { useRef, useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react';
// import { ADD_REFERENCE, LOADING } from "../../utils/action";
// import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
// import { ReactDom } from 'react';
// import { render } from 'node-sass';
import axios from 'axios';


class BookInput extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        year: '',
        title: '',
        edition: '',
        city: '',
        publisher: '',
        page: ''
    }

    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        })
    }

    submit = (e) => {
        e.preventDefault();

        const payload = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            year: this.state.year,
            title: this.state.title,
            edition: this.state.edition,
            city: this.state.city,
            publisher: this.state.publisher,
            page: this.state.page
        };

        axios({
            url:'http://localhost:3001/books/save',
            method:'POST',
            data:payload
        })
        .then(()=>{
            console.log('Data has been sent to the server')
        })
        .catch(()=>{
            console.log("err")
        })
    }

    render() {
        console.log('state:', this.state);
        return (
            <Form onSubmit={this.submit}>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>Year of Published</label>
                    <input placeholder='Year' name="year" value={this.state.year} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>Title</label>
                    <input placeholder='Title' type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>Edition</label>
                    <input placeholder='Edition' type="text" name="edition" value={this.state.edition} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>City published</label>
                    <input placeholder='City published' type="text" name="city" value={this.state.city} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>Publisher</label>
                    <input placeholder='Publisher' type="text" name="publisher" value={this.state.publisher} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>Pages used</label>
                    <input placeholder='Pages used' type="text" name="page" value={this.state.page} onChange={this.handleChange} />
                </Form.Field>

                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}
export default BookInput;