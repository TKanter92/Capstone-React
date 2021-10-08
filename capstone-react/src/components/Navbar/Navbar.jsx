import React, { Component } from 'react';
import { render } from 'react-dom';


class Navbar extends Component {
    constructor(props) {
        this.state={}
    };


    render() {
        return(
            <React.Fragment>
                <div className="d-flex container justify-content-end align-items-center">
                    <link to={Home} />
                    <link to={About_Us} />
                    <link to={Style_Quiz} />
                </div>
            </React.Fragment>
        )
    }

}

export default Navbar;