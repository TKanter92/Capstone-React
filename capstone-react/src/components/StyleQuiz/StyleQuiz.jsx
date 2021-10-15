import React, { Component } from 'react';
import axios from 'axios';
import './StyleQuiz.css';


class StyleQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patterns: '',
            textures: '',
            colors: '', 
            molding: '',
            wallpaper: '',
            windowTreatments: '',
            rugs: '',
            carpeting: '',
            budget: '',
            questionnaire: props.questionnaire,
            user: props.user
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const questionnaireInfo = {
            patterns: this.state.patterns,
            textures: this.state.textures,
            colors: this.state.colors, 
            molding: this.state.molding,
            wallpaper: this.state.wallpaper,
            windowTreatments: this.state.windowTreatments,
            rugs: this.state.rugs,
            carpeting: this.state.carpeting,
            budget: this.state.budget
        };
        this.getQuestionnaireInfo(questionnaireInfo);
    }

    getQuestionnaireInfo = async (questionnaireInfo) => {
        try{
            let response = await axios.post('http://127.0.0.1:8000/api/questionnaire/', questionnaireInfo);
            this.setState({
                questionnaire: response.data
            });
            window.location='/';
            console.log("Questionnaire submitted successfully");
        }
        catch{
            console.log("Questionnaire could not be submit");
        }
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit} className="stylequiz-form">
                <div className="md-3">
                    <p>Pattern or no pattern? Type "True" for pattern, "False" for no pattern.</p>
                    <input onChange={this.handleChange} type="text" className="form-control" name="patterns" required />
                </div>
                <br />
                <div className="md-3">
                    <p>Texture or no texture? Type "True" for pattern, "False" for no texture.</p>
                    <input onChange={this.handleChange} type="text" className="form-control" name="textures" required />
                </div>
                <br />
                <div className="md-3">
                    <p>Do you prefer neutral colors, or bright, vibrant colors?</p>
                    <input onChange={this.handleChange} type="text" className="form-control" name="colors" required />
                </div>
                <br />
                <div className="md-3">
                    <p>What color molding do you prefer? (e.g. White, Natural, Stained)</p>
                    <input onChange={this.handleChange} type="text" className="form-control" name="molding" required />
                </div>
                <br />
                <div className="md-3">
                    <p>Do you like wallpaper? Type "True" for yes, "False" for no.</p>
                    <input onChange={this.handleChange} type="text" className="form-control" name="wallpaper" required />
                </div>
                <br />
                <div className="md-3">
                    <p>What type of window treatment do you prefer? (e.g. Curtains, Open, Blinds)</p>
                    <input onChange={this.handleChange} type="text" className="form-control" name="windowTreatments" required />
                </div>
                <br />
                <div className="md-3">
                    <p>Do you like having rugs in your space? Type "True" for yes, "False" for no.</p>
                    <input onChange={this.handleChange} type="text" className="form-control" name="rugs" required />
                </div>
                <br />
                <div className="md-3">
                    <p>Do you prefer carpeting over other material? Type "True" for yes, "False" for no.</p>
                    <input onChange={this.handleChange} type="text" className="form-control" name="carpeting" required />
                </div>
                <br />
                <div className="md-3">
                    <p>Please enter your budget.</p>
                    <input onChange={this.handleChange} type="number" className="form-control" name="budget" required />
                </div>
                <br />
                <div className="submit-btn">
                    <button type="submit" className="btn btn-light">
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}

export default StyleQuiz;