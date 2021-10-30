import React from 'react';
import { useHistory } from 'react-router';
import './Banner.css';
const Banner = () => {
    const history = useHistory();
    return (
        <div className="banner-container">
            <div className="banner-container-overlay d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="text-center">
                        <h1 className="display-1 text-light fw-bolder d-flex justify-content-center">JOIN THE FUN</h1>
                        <p className="text-light text-center">
                            It's never to early to start planning for the <br /> ween of a lifetime. keep scrolling to see what it's <br /> all about or browse our destination and dates <br /> to get booked now.
                        </p>
                        <button onClick={() => history.push('allEvent')} className="btn btn-primary text-light fw-bold">Browse Now <i className="fas fa-anchor"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;