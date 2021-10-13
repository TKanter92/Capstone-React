import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';
import { navItems } from './NavItems';
import './Button.css';


function NavBar() {
    return(
        <React.Fragment>
            <nav className="navbar">
                <h1 className="navbar-brand">Blue Paisley Designs</h1>
                <ul className="nav-items">
                    {navItems.map((item) =>  {
                        return(
                            <li key={item.id} className={item.cName}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                        );
                    })}
                </ul>
                <Button />
            </nav>
        </React.Fragment>    
    );
}

export default NavBar;