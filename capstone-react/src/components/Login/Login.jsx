import React, { Component } from 'react';
import Register from '../Register/Register';
import './Login.css';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            jwt: null,
            user: null,
            register: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const credentials = {
            username: this.state.username,
            password: this.state.password,
        };
        this.getCredentials(credentials);
    }

    getCredentials = async (credentials) => {
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/auth/login/", credentials);
            this.setState({
                user: response.data.token
            });
            localStorage.setItem("token", response.data.access);
            console.log("successful login");
        }
        
        catch {
            console.log("Unsuccessful Login");
        }
    };

    navToRegister = (event) => {
        if(this.state.register === false)
        {this.state.register = true}
        else{this.state.register = false}
        this.setState(
            {register: this.state.register}
        );
    }

    render() {
        return (
            <div>
            {this.state.register ?
            <Register register = {this.state.register} navToRegister={this.navToRegister} />
            :
            <div className="d-flex container justify-content-center align-items-center">
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <div className="row mb-3">
                        <label>Username:</label>
                        <div className="col-sm-10">
                            <input type="text" name="username" placeholder="Username..." onChange={this.handleChange} value={this.state.username} required /><br />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label>Password:</label>
                        <div className="col-sm-10">
                            <input type="password" name="password" placeholder="Password..." onChange={this.handleChange} value={this.state.password} required /><br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-10 col-auto">
                            <button type="submit" className="btn">Login</button>
                            <button className="btn" onClick={this.navToRegister}>Register</button>
                        </div>
                    </div>
                </form>
            </div>
                } </div>   );
    }
}

export default Login;