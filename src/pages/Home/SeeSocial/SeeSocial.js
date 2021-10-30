import React from 'react';
import './SeeSocial.css';
import { Link } from 'react-router-dom';

const SeeSocial = () => {
    return (
        <div className='container'>
            {/* slider button */}
            <div className="row pt-3">
                <div className="col-6">
                    <h3 className="mb-3">See our social </h3>
                </div>
                <div className="col-6 text-end">
                    <Link to="#" className="btn btn-primary mb-3 me-2" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <i className="fa fa-arrow-left"></i>
                    </Link>

                    <Link to="#" className="btn btn-primary mb-3" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <i className="fa fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
            {/* slider content */}
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">

                            <div className="col-md-4 mb-3">
                                <a href="https://www.instagram.com/" className="link-dark text-decoration-none">
                                    <div className="card border-0 shadow">
                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                                        <div className="card-body">
                                            <h4 className="card-title">Instagram post caption</h4>
                                            <p className="card-text">Place and other tags</p>

                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 mb-3">
                                <a href="https://www.instagram.com/" className="link-dark text-decoration-none">
                                    <div className="card border-0 shadow">
                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698" />
                                        <div className="card-body">
                                            <h4 className="card-title">Instagram post caption</h4>
                                            <p className="card-text">Place and other tags</p>

                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 mb-3">
                                <a href="https://www.instagram.com/" className="link-dark text-decoration-none">
                                    <div className="card border-0 shadow">
                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a" />
                                        <div className="card-body">
                                            <h4 className="card-title">Instagram post caption</h4>
                                            <p className="card-text">Place and other tags</p>

                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">

                            <div className="col-md-4 mb-3">
                                <a href="https://www.instagram.com/" className="link-dark text-decoration-none">
                                    <div className="card border-0 shadow">
                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4" />
                                        <div className="card-body">
                                            <h4 className="card-title">Instagram post caption</h4>
                                            <p className="card-text">Place and other tags</p>

                                        </div>

                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 mb-3">
                                <a href="https://www.instagram.com/" className="link-dark text-decoration-none">
                                    <div className="card border-0 shadow">
                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840" />
                                        <div className="card-body">
                                            <h4 className="card-title">Instagram post caption</h4>
                                            <p className="card-text">Place and other tags</p>

                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 mb-3">
                                <a href="https://www.instagram.com/" className="link-dark text-decoration-none">
                                    <div className="card border-0 shadow">
                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e" />
                                        <div className="card-body">
                                            <h4 className="card-title">Instagram post caption</h4>
                                            <p className="card-text">Place and other tags</p>

                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">

                            <div className="col-md-4 mb-3">
                                <a href="https://www.instagram.com/" className="link-dark text-decoration-none">
                                    <div className="card border-0 shadow">
                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23" />
                                        <div className="card-body">
                                            <h4 className="card-title">Instagram post caption</h4>
                                            <p className="card-text">Place and other tags</p>

                                        </div>

                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 mb-3">
                                <a href="https://www.instagram.com/" className="link-dark text-decoration-none">
                                    <div className="card border-0 shadow">
                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129" />
                                        <div className="card-body">
                                            <h4 className="card-title">Instagram post caption</h4>
                                            <p className="card-text">Place and other tags</p>

                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 mb-3">
                                <a href="https://www.instagram.com/" className="link-dark text-decoration-none">
                                    <div className="card border-0 shadow">
                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6" />
                                        <div className="card-body">
                                            <h4 className="card-title">Instagram post caption</h4>
                                            <p className="card-text">Place and other tags</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-3">
                <a className="btn btn-instagram" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i> Follow us on Instagram</a>
            </div>
        </div>
    );
};

export default SeeSocial;