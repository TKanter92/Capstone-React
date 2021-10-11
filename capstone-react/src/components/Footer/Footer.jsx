import React from 'react';
import instagram from '../../photos/instagram.jpeg';
import facebook from '../../photos/facebook.jpeg';

const Footer = () => {
    return (
        <React.Fragment>
            <div>
                <h2 align="left">You Can Find Us At: <br />
                6439 W North Avenue <br />
                Wauwatosa, Wisconsin 53213 <br />
                (608) 347-8862
                </h2>
                <h2 align="center">Copyright © 2021</h2>
                <h5 align="right">Check us out on our social media pages!</h5>
                <a href="https://www.instagram.com/bluepaisleydesigns/" target="_blank" rel="noreferrer">
                <img src={instagram} alt="instagram icon" height="60px" width="60px" align="right" />
                </a>
                <a href="https://www.facebook.com/bluepaisleydesignsinteriordesign" target="_blank" rel="noreferrer">
                <img src={facebook} alt="facebook icon" height="60px" width="85px" align="right" />
                </a>
            </div>
        </React.Fragment>
    )
}

export default Footer;