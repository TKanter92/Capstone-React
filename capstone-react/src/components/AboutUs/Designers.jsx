import React, { Component } from 'react';
import Card from './CardUI';
import portrait1 from '../../photos/portrait1.jpeg';
import portrait2 from '../../photos/portrait2.jpeg';
import './AboutUs.css';

class Designers extends Component {
    render() {
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-6">
                        <Card imgsrc={portrait2} title="Elizabeth Bokelman" text="Owner, Interior Designer" />
                    </div>
                    <div className="col-md-6">
                        <Card imgsrc={portrait1} title="Erin Kanter" text="Interior Design Assistant, Social Media Manager" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Designers;