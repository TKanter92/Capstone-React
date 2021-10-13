import React, { Component } from 'react';
import axios from 'axios';


class StyleQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: "",
            questionnaire: [],
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.getStyleInfo();
        this.setState({
            style: ""
        });
        
    }


}

export default StyleQuiz;