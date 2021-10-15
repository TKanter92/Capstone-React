import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Route, Switch } from "react-router-dom";
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
            user: null,
            questionnaire: []
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

    logoutUser = (event) => {
        localStorage.removeItem("token");
        console.log("logged out");
        this.setState({
            user: null
        });
    };

    render() {
        const  {user} = this.props;
        return(
            <div>
                <Navbar user={this.props.user} logoutUser={this.logoutUser} />
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
                            if (this.props.user === null){
                                alert("Please log in to complete the style quiz.");
                                return <Redirect to='/login' />;
                            } else {
                                return <StyleQuiz user={user} questionnaire={this.state.questionnaire}/>
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
// {...props} user={user}
export default App;
