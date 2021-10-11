import React from 'react';

const HomePage = (props) => {
    return(
        <React.Fragment>
            <div className="image">
                <img src="" alt="image" />
            </div>
            <div className="services">
                <h1 align="left" padding="20px">Services</h1>
            </div>
            <div className="service-descriptions">
                <div className="">
                    <img src="" alt="service" />
                    <p>This is information about the above image</p>
                </div>
                <div className="">
                    <img src="" alt="service" />
                    <p>This is information about the above image</p>
                </div>
                <div className="">
                    <img src="" alt="service" />
                    <p>This is information about the above image</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomePage;