import React, { Component } from 'react'

import './sign-in.component.styles.scss'

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input name="email" type="email" value={this.state.email} onChange={this.handleChange} required></input>
                    <label>Email</label>

                    <input name="email" type="password" value={this.state.email} onChange={this.handleChange} required></input>
                    <label>Password</label>

                    <input type="submit" value="submit form"></input>
                </form>
            </div>
        );
    }
}

export default SignIn;