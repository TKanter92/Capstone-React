import React from 'react';
import './Projects.css';
import project1 from '../../photos/project1.jpg';
import project2 from '../../photos/project2.jpg';
import project3 from '../../photos/project3.jpg';
import project4 from '../../photos/project4.jpg';
import project5 from '../../photos/project5.jpg';
import project6 from '../../photos/project6.jpg';
import project7 from '../../photos/project7.jpg';
import project8 from '../../photos/project8.jpg';
import project9 from '../../photos/project9.jpg';
import project10 from '../../photos/project10.jpg';
import project11 from '../../photos/project11.jpg';
import project12 from '../../photos/project12.jpg';
import project13 from '../../photos/project13.jpg';
import project14 from '../../photos/project14.jpg';

function Projects() {
    return(
        <div className="gallery-container">
            <div className="projects-gallery">
                <img src={project1} alt="project" />
            </div>
            <div className="projects-gallery">
                <img src={project2} alt="project" />
            </div>
            <div className="projects-gallery">
                <img src={project3} alt="project" />
            </div>
            <div className="projects-gallery">
                <img src={project4} alt="project" />
            </div>
            <div className="projects-gallery">
                <img src={project5} alt="project" />
            </div>
            <div className="projects-gallery">
                <img src={project6} alt="project" />
            </div>
            <div className="projects-gallery">      
                <img src={project7} alt="project" />
            </div>
            <div className="projects-gallery">
                <img src={project11} alt="project" />
            </div>
            <div className="projects-gallery">  
                <img src={project9} alt="project" />
            </div>
            <div className="projects-gallery">
                <img src={project10} alt="project" />
            </div>
            <div className="projects-gallery">
                <img src={project8} alt="project" />
            </div>
            <div className="projects-gallery">
                <img src={project12} alt="project" />
            </div>
            <div className="projects-gallery">
                <img src={project14} alt="project" />
            </div>
            <div className="projects-gallery">
                <img src={project13} alt="project" />  
            </div>
        </div>
    )
}

export default Projects;