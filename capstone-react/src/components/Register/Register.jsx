import React, { Component } from 'react';
import axios from 'axios';
import './Register.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            first_name: "",
            last_name: "",
            user: props.user,
            register: props.register
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.getRegistrationInfo();
        this.props.navToRegister();
    }

    getRegistrationInfo = async () => {
        const registrationInfo = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            first_name: this.state.firstName,
            last_name: this.state.lastName
        };

        try{
            let response = await axios.post("http://127.0.0.1:8000/api/auth/register/", registrationInfo);
            console.log(response);
        }
        catch{
            console.log("Unsuccessful Registration");
        }
    }

    render() {
        return(
            <div className="d-flex container justify-content-center align-items-center">
                <form className="form-group" onSubmit={(event) => this.handleSubmit(event)}>
                    <div className = "row mb-3">
                    <label>First Name:</label>
                        <div className="col-sm-10">
                        <input type="text" name="firstName" placeholder="Enter First Name..." onChange={this.handleChange} value={this.state.firstName}/><br/>
                        </div>
                    </div>
                    <div className = "row mb-3">
                    <label>Last Name:</label>
                        <div className="col-sm-10">
                        <input type="text" name="lastName" placeholder="Enter Last Name..." onChange={this.handleChange} value={this.state.lastName}/><br/>
                        </div>
                    </div>
                    <div className = "row mb-3">
                    <label>Email:</label>
                        <div className="col-sm-10">
                        <input type="text" name="email" placeholder="Email..." onChange={this.handleChange} value={this.state.email}/><br/>
                        </div>
                    </div>
                    <div className = "row mb-3">
                    <label>Username:</label>
                        <div className="col-sm-10">
                        <input type="text" name="username" placeholder="Enter Username..." onChange={this.handleChange} value={this.state.username}/><br/>
                        </div>
                    </div>
                    <div className = "row mb-3">
                    <label>Password:</label>
                        <div className="col-sm-10">
                        <input type="text" name="password" placeholder="Enter Password..." onChange={this.handleChange} value={this.state.password}/>
                        </div>
                    </div>
                    <div className="row">
                            <div className="col-sm-10 col-auto">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;