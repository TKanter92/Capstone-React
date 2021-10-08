import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import { Router, Route, Switch } from 'react-router';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={AboutUs} />
                <Route path='/stylequiz' components={StyleQuiz} />
                <Route path='/login' components={Login} />
                <Route path='/profile' components={profile} />
            </Switch>
        </div>
    );
}
