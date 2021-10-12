import React, { Component } from 'react';
import Cards from './Cards';
import './HomePage.css';

class HomePage extends Component {
  
    render() { 
        return ( 
            <React.Fragment>
                <div className="mod-title">
                    <h1 className="title">Services</h1>
                </div>
                <div>
                    <Cards />
                </div>
            </React.Fragment>
        );
    }
}
 
export default HomePage;
