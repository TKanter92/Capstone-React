import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import HomePage from './components/HomePage/HomePage';
import jwtDecode from "jwt-decode";
import { Redirect } from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";
// import StyleQuiz from './components/StyleQuiz/StyleQuiz';

class App extends Component {
    state = {
        user: undefined
    };

    componentDidMount() {
        const jwt = localStorage.getItem("token");
        try {
            const user = jwtDecode(jwt);
            this.setState ({
                user: user
            });
        }
        catch (error) {
            console.log(error);
        }
    };

    getCredentials = async (credentials) => {
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/auth/login/", credentials);
            console.log(response);
            this.setState({
                user: response.data.token
            });
            localStorage.setItem("token", response.data.access);
            console.log("Loginuser: " + this.state.user);
        }
        catch {
            console.log("Unsuccessful Login");
        }
    };

    logoutUser = (event) => {
        localStorage.removeItem("token");
        console.log("logged out");
        console.log(localStorage);
        this.setState({
            user: undefined
        });
    };

    render() {
        return(
            <div>
                <Navbar user={this.state.user} logoutUser={this.logoutUser} />
                <div>
                    <Switch>
                        <Route
                        path="/"
                        exact
                        render={(props) => {
                            if (!this.state.user) {
                                console.log("True: " + this.state.user);
                                return (
                                    <Login {...props} getCredentials={this.getCredentials} />
                                );
                            } else {
                                console.log("false: " + this.state.user);
                                return(
                                    <HomePage />
                                );
                            }
                        }}
                        />
                        <Route path='/register' component={Register} />
                        <Route path='/login' component={Login} />
                        <Route path='/logout' component={Login} />
                        <Route path='/designers' component={AboutUs} />
                        {/* <Route path='/stylequiz' component={StyleQuiz} /> */}
                        <Redirect to="/not-found" />
                    </Switch>
                <Footer />
                </div>
            </div>
        );
    }
}

export default App;
