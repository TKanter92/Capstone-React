import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

    return(
        <div className="nav-bar">
            <Link to='/'>Home</Link>
            <Link to='/aboutus'>About Us</Link>
            <Link to='/stylequiz'>Style Quiz</Link>
            <Link to='/logout'>Log Out</Link>
        </div>
    );
}

export default NavBar;