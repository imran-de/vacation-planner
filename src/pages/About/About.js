import React from 'react';
import Subscribe from '../Home/Subscribe/Subscribe';

const About = () => {
    return (
        <div className="container-fluid">
            <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: "#F3F6F5", height: "300px" }}>
                <h2 className="text-dark fw-bold">About Us</h2>
            </div>
            <div className="container py-5">
                <h2 className="text-info text-center">OUR COMPANY</h2>
                <h1 className="text-center">Where we came from</h1>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <p className="text-center">
                            Back in 1996 we were just a bunch of uni friends who wanted to go sailing and explore far and wide. Today, we’re still that same bunch of friends, only now there are 70,000 of us. And our loving family just keeps getting bigger. We have forged a community from adventurous spirits, vast open waters, and a host of musicians, collaborators, sailors and revellers.
                        </p>
                    </div>
                </div>
            </div>
            {/* add subscription component */}
            <Subscribe />
        </div>
    );
};

export default About;