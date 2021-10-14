import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Route, Switch } from "react-router-dom";
// import axios from 'axios';
import HomePage from './components/HomePage/HomePage';
import jwtDecode from "jwt-decode";
import { Redirect } from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";
import StyleQuiz from './components/StyleQuiz/StyleQuiz';
import Projects from './components/PastProjects/Projects';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

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

    // getCredentials = async (credentials) => {
    //     try {
    //         let response = await axios.post("http://127.0.0.1:8000/api/auth/login/", credentials);
    //         this.setState({
    //             user: response.data.token
    //         });
    //         localStorage.setItem("token", response.data.access);
    //     }
    //     catch {
    //         console.log("Unsuccessful Login");
    //     }
    // };

    // submitQuestionnaire = async (questionnaire) => {
    //     await axios.post('http://127.0.0.1:8000/api/questionnaire/', questionnaire)
    //     this.getQuestionnaire();
    // }

    // getQuestionnaire = async () => {
    //     let response = await axios.get('http://127.0.0.1:8000/api/questionnaire/');
    //     this.setState({
    //         questionnaire: response.data
    //     });
    // }

    logoutUser = (event) => {
        localStorage.removeItem("token");
        console.log("logged out");
        console.log(localStorage);
        this.setState({
            user: null
        });
    };

    render() {
        const  user = this.state.user;
        return(
            <div>
                <Navbar user={user} logoutUser={this.logoutUser} />
                <div>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path='/register' component={Register} />
                        <Route path='/projects' component={Projects} />
                        <Route path='/login' component={Login} getCredentials={this.getCredentials}/>
                        <Route path='/logout' component={this.logoutUser} />
                        <Route path='/designers' component={AboutUs} />
                        <Route path='/stylequiz' exact
                        render={props => {
                            if (!this.props.user){
                                return <Redirect to='/login' />;
                            } else {
                                return <StyleQuiz {...props} user={user} />
                            }
                        }}
                        />
                        <Redirect to="/not-found" />
                    </Switch>
                <Footer />
                </div>
            </div>
        );
    }
}

export default App;
