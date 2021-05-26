import React from "react";
import Container from "../components/Container";
import Login from "../components/LoginForm";

class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email:"",
            password:"",
            loginErrors:""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    handleSubmit(e){
        const {email, password,}

        axios
        .post(

        )
    }
    render() {
        return (

            <div className="services-wrapper style-two">
                <Container>
                    <Login/>
                    <BookInput/>
                </Container>
            </div>
        )
    }
}

export default Login;