import React, { Component } from 'react';
import Card from './CardUI';
import eDesign from '../../photos/e-design.jpg';
import paintChips from '../../photos/paintchips.jpg';
import styling from '../../photos/styling.jpg';


class Cards extends Component {
    render() {
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={eDesign} title="E-Design" text="This package is for those of you who live out of our range, and or is able to follow a master design plan and do the rest yourself! You provide us with measurements and design preference, and we provide you with a guide to style your home." />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={paintChips} title="Paint/Design Consultation" text="We will travel to your home for a personalized design or paint consultation with measurements and paint options that you can keep. With the information from your style quiz, we guarantee that we will find your perfect color." />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={styling} title="Home Styling/Staging" text="We will work with your budget and use items in your home, as well as items we feel will enhance your space to create a fresh new look. You decide how much you want to spend on new decor, and we will expertly arrange your old and new pieces." />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;