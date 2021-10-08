import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

    return(
        <nav>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/about'>
                    <li>About Us</li>
                </Link>
                <Link to='/stylequiz'>
                    <li>Style Quiz</li>
                </Link>
                <Link to='/login'>
                    <li>Log In</li>
                </Link>
            </ul>
        </nav>
    );
}

export default NavBar;