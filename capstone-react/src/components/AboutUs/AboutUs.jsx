import React from 'react';
import portrait1 from '../../photos/portrait1.jpeg';
import portrait2 from '../../photos/portrait2.jpeg';

const AboutUs = (props) => {
    return(
        <React.Fragment>
            <div className="row">
                <div className="col-4">
                    <img src={portrait2} alt="portrait" />
                </div>
                <div className="col-4 offset-4">
                    <img src={portrait1} alt="portrait" height="365px" width="365px" />
                </div>
            </div>
        </React.Fragment>
    );
}

export default AboutUs;