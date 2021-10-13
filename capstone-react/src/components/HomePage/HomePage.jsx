import React, { Component } from 'react';
import Cards from './Cards';
import './HomePage.css';
import interior from '../../photos/interior.jpg';

class HomePage extends Component {
  
    render() { 
        return (
            <React.Fragment>
                <figure className="position-relative">
                    <img src={interior} alt="hero" width="100%" className="hero" />
                    <figcaption className="hover-text">
                        We Turn Visions <br />
                        Into Reality
                    </figcaption>
                </figure>
                <div className="mod-title">
                    <h1>Services</h1>
                </div>
                <div className="content">
                    <Cards />
                </div>
            </React.Fragment>
        );
    }
}
 
export default HomePage;
