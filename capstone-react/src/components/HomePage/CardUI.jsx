import React from 'react';
import './CardStyle.css';

const Card = props => {
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="style" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.text}</p>
                <a href="mailto:elizabeth@bluepaisleydesigns.com" className="btn btn-outline-secondary" target="_blank">I'm Interested</a>
            </div>
        </div>
    );
}

export default Card;