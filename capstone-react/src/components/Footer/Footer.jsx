import React from 'react';

const Footer = () => {
    return (
        <React.Fragment>
            <div className="details" float="left">
                <h2 text-align="center">You Can Find Us At: <br />
                This Address <br />
                In this city, state <br />
                phone number
                </h2>
            </div>
            <div className="copyright" align="center">
                <h2 text-align="center">Copyright © 2021</h2>
            </div>
            <div className="socials" align="right">
                <h5 text-align="right">Check us out on our social media pages!</h5>
            </div>
        </React.Fragment>
    )
}

export default Footer;