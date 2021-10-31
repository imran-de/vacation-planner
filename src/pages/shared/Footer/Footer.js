import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            {/* <!-- component --> */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css" />

            <footer className="text-dark p-lg-5" style={{ backgroundColor: '#F3F6F5' }}>
                <div className="container row">
                    {/* <!-- Col-1 --> */}
                    <div className="col-md-3">
                        {/* <!-- Col Title --> */}
                        <h2 className="text-center text-lg-start mt-5 mt-lg-0">
                            Get In Touch
                        </h2>

                        <div className="pt-4">
                            <p>House: 06, Road: 08, Sylhet</p>
                            <p>Phone: +8801926-294263</p>
                            <p>Email: stimran4405@gmail.com</p>
                        </div>

                    </div>

                    {/* <!-- Col-2 --> */}
                    <div className="col-md-3">
                        {/* <!-- Col Title --> */}
                        <h2 className="text-center text-lg-start mt-5 mt-lg-0">
                            Quick Links
                        </h2>

                        <div className="pt-4">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/destinations">Events</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact-us">Contact</Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* <!-- Col-3 --> */}
                    <div className="col-md-3">
                        {/* <!-- Col Title --> */}
                        <h2 className="text-center text-lg-start mt-5 mt-lg-0">
                            Upcoming Event
                        </h2>

                        <div className="">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border-bottom border-light"><a href="#eventLink">Event no 1</a></li>
                                <li className="list-group-item border-bottom border-light"><a href="#eventLink">Event no 2</a></li>
                                <li className="list-group-item border-bottom border-light"><a href="#eventLink">Event no 3</a></li>
                                <li className="list-group-item border-bottom border-light"><a href="#eventLink">Event no 4</a></li>
                                <li className="list-group-item border-bottom border-light"><a href="#eventLink">Event no 5</a></li>
                            </ul>
                        </div>

                    </div>

                    {/* <!-- Col-3 --> */}
                    <div className="col-md-3">
                        {/* <!-- Col Title --> */}
                        <h2 className="text-center text-lg-start mt-5 mt-lg-0">
                            Download Apps
                        </h2>
                        <div className="pt-4 text-center">
                            <img className="w-100" src="https://instabridge.com/wp-content/themes/ib17/assets/img/badges/google-play-badge-en.svg" alt="" /><br /><br />
                            <img src="https://instabridge.com/wp-content/themes/ib17/assets/img/badges/app-store-badge-en.svg" className="w-100" alt="" />
                        </div>

                    </div>
                </div>

                {/* <!-- Copyright Bar --> */}
                <div className="pt-2">
                    <div className="text-center text-lg-left">
                        <div className="mt-2">
                            ©Vacation Planner Copyright 1996-2021. All Rights Reserved. Developed by <span className="text-info">S Imran Ahmed ST</span>
                        </div>

                        {/* <!-- Required Un icons (if you want) --> */}
                        <div className="mt-3 text-center">
                            <a href="#home" className="w-6 mx-1">
                                <i className="uil uil-facebook-f"></i>
                            </a>
                            <a href="#home" className="w-6 mx-1">
                                <i className="uil uil-twitter-alt"></i>
                            </a>
                            <a href="#home" className="w-6 mx-1">
                                <i className="uil uil-youtube"></i>
                            </a>
                            <a href="#home" className="w-6 mx-1">
                                <i className="uil uil-linkedin"></i>
                            </a>
                            <a href="#home" className="w-6 mx-1">
                                <i className="uil uil-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;