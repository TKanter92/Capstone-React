import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            isLoggedIn: false,
        };
    }

    buttonClickLogin = (event) => {
        if (this.state.user != null) {
            this.setState({
                isLoggedIn: true,
            });
        } else {
            this.setState({
                isLoggedIn: false,
            })
        }
    }

    logoutUser = (event) => {
        localStorage.removeItem("token");
        console.log("logged out");
        console.log(localStorage);
        this.setState({
            user: undefined,
            isLoggedIn: false
        });
    }

    render() {
        if (this.state.isLoggedIn === false) {
            return(
                <div className="login-button">
                    <Link to='/login'>
                        <button className="login" onClick={this.buttonClickLogin}>
                            Login/Register
                        </button>
                    </Link>
                </div>
            );
        } else {
            return(
                <div className="logout-button">
                    <Link to='/'>
                        <button className="logout" onClick={this.logoutUser}>
                            Logout
                        </button>
                    </Link>
                </div>
            );
        };
    }
}

export default Button;