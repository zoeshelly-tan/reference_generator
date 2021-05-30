import React, { useRef, useState } from 'react'
import { Button,  Form } from 'semantic-ui-react';
import axios from 'axios';


class BookInput extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        year: '',
        title: '',
        edition: '',
        cityPublished: '',
        publisher: '',
        page: '',
        books:[]
    }

    

    componentDidMount = () => {
        this.getBook();
      };
    
    
      getBook = () => {
        axios.get('/api/books/')
          .then((response) => {
            const data = response.data;
            this.setState({ posts: data });
            console.log('Data has been received!!');
          })
          .catch(() => {
            alert('Error retrieving data!!!');
          });
      }

   
    

    handleChange = ({target}) => {
        const {name,value} = target;
        this.setState({
            [name]: value
        })
    };

    resetUserInputs = () => {
        this.setState({
            firstName: '',
            lastName: '',
            year: '',
            title: '',
            edition: '',
            cityPublished: '',
            publisher: '',
            page: ''
        });
      };

    submit = (e) => {
        e.preventDefault();

        const payload = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            year: this.state.year,
            title: this.state.title,
            edition: this.state.edition,
            cityPublished: this.state.cityPublished,
            publisher: this.state.publisher,
            page: this.state.page
        };

        axios({
            
            url:'/api/books/save',
            method:'POST',
            data:payload
        })
        .then(()=>{
            alert('Data has been sent to the server')
            this.resetUserInputs();
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
                    <input placeholder='City published' type="text" name="cityPublished" value={this.state.cityPublished} onChange={this.handleChange} />
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