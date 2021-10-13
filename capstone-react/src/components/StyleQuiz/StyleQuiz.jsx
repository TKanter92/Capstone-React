import React, { Component } from 'react';
import axios from 'axios';


class StyleQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patterns: false,
            textures: false,
            colors: '', 
            molding: '',
            wallpaper: false,
            windowTreatments: '',
            rugs: false,
            carpeting: false,
            budget: 0
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        this.props.submitQuestionnaire(this.state)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="md-3">
                    <p>Pattern or no pattern? Type "True" for pattern, "False" for no pattern.</p>
                    <label for="patterns" className="form-label">Patterns</label>
                    <input onChange={this.handleChange} type="text" className="form-control" name="patterns" />
                </div>
                <div className="md-3">
                    <p>Texture or no texture? Type "True" for pattern, "False" for no texture.</p>
                    <label for="textures" className="form-label">Textures</label>
                    <input onChange={this.handleChange} type="text" className="form-control" name="textures" />
                </div>
                <div className="md-3">
                    <p>Do you prefer neutral colors, or bright, vibrant colors?</p>
                    <label for="colors" className="form-label">Colors</label>
                    <input onChange={this.handleChange} type="text" className="form-control" name="colors" />
                </div>
                <div className="md-3">
                    <p>What color molding do you prefer? (e.g. White, Natural, Stained)</p>
                    <label for="molding" className="form-label">Molding</label>
                    <input onChange={this.handleChange} type="text" className="form-control" name="molding" />
                </div>
                <div className="md-3">
                    <p>Do you like wallpaper? Type "True" for yes, "False" for no.</p>
                    <label for="wallpaper" className="form-label">Wallpaper</label>
                    <input onChange={this.handleChange} type="text" className="form-control" name="wallpaper" />
                </div>
                <div className="md-3">
                    <p>What type of window treatment do you prefer? (e.g. Curtains, Open, Blinds)</p>
                    <label for="window_treatments" className="form-label">Window Treatments</label>
                    <input onChange={this.handleChange} type="text" className="form-control" name="windowTreatments" />
                </div>
                <div className="md-3">
                    <p>Do you like having rugs in your space? Type "True" for yes, "False" for no.</p>
                    <label for="rugs" className="form-label">Rugs</label>
                    <input onChange={this.handleChange} type="text" className="form-control" name="rugs" />
                </div>
                <div className="md-3">
                    <p>Do you prefer carpeting over other material? Type "True" for yes, "False" for no.</p>
                    <label for="carpeting" className="form-label">Carpeting</label>
                    <input onChange={this.handleChange} type="text" className="form-control" name="carpeting" />
                </div>
                <div className="md-3">
                    <p>Please enter your budget.</p>
                    <label for="budget" className="form-label">Budget</label>
                    <input onChange={this.handleChange} type="number" className="form-control" name="budget" />
                </div>
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default StyleQuiz;