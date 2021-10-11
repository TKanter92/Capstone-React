import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router';

function NavBar(props) {

    return(
        <React.Fragment>
            <Router>
                <Link to='/home'>Home</Link>
                <Link to='/aboutus'>About Us</Link>
                <Link to='/stylequiz'>Style Quiz</Link>
                <Link to='/logout'>Log Out</Link>
            </Router>
        </React.Fragment>
    );
}

export default NavBar;