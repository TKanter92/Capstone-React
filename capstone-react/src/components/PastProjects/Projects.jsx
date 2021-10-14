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
        <React.Fragment>
            <table className="projects-table">
                <tbody>
                    <tr>
                        <td><img src={project1} alt="project" border='3' height='100' width='100'/></td>
                        <td><img src={project2} alt="project" border='3' height='100' width='100'/></td>
                    </tr>
                    <tr>
                        <td><img src={project3} alt="project" border='3' height='100' width='100'/></td>
                        <td><img src={project4} alt="project" border='3' height='100' width='100'/></td>
                    </tr>
                    <tr>
                        <td><img src={project5} alt="project" border='3' height='100' width='100'/></td>
                        <td><img src={project6} alt="project" border='3' height='100' width='100'/></td>
                    </tr>
                    <tr>
                        <td><img src={project7} alt="project" border='3' height='100' width='100'/></td>
                        <td><img src={project8} alt="project" border='3' height='100' width='100'/></td>
                    </tr>
                    <tr>
                        <td><img src={project9} alt="project" border='3' height='100' width='100'/></td>
                        <td><img src={project10} alt="project" border='3' height='100' width='100'/></td>
                    </tr>
                    <tr>
                        <td><img src={project11} alt="project" border='3' height='100' width='100'/></td>
                        <td><img src={project12} alt="project" border='3' height='100' width='100'/></td>
                    </tr>
                    <tr>
                        <td><img src={project13} alt="project" border='3' height='100' width='100'/></td>
                        <td><img src={project14} alt="project" border='3' height='100' width='100'/></td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default Projects;