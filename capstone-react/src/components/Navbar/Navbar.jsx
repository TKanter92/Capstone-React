import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {

    return(
        <React.Fragment>
            <Link to='/'>Home</Link>
            <Link to='/aboutus'>About Us</Link>
            <Link to='/stylequiz'>Style Quiz</Link>
            <Link to='/logout'>Log Out</Link>
        </React.Fragment>
    );
}

export default NavBar;