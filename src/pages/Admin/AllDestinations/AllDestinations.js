import React, { useEffect, useState } from 'react';

const AllDestinations = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [destinations, setDestinations] = useState([])
    useEffect(() => {
        setIsLoading(true);
        fetch('https://mysterious-island-52828.herokuapp.com/allEvents')
            .then(res => res.json())
            .then(data => {
                setDestinations(data);
                setIsLoading(false);
            })
    }, [])

    //preloader 
    if (isLoading) {
        return <div className="text-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#F3F6F5', height: "300px" }}>
                <h2 className="fw-bold">Manage All Events/ Destinations</h2>
            </div>

            <div className="container my-5">
                <div className="row">
                    {/* apply map for per destinations or event */}
                    {destinations.map(destination => <div className="col-12 py-3" key={Math.random()}>

                        <div className="row border">
                            <div className="col-md-2">
                                <img src={destination?.imgURL} className="img-fluid" style={{ height: '100%', width: "100%" }} alt="" />
                            </div>
                            <div className="col-sm-8 col-md-8">
                                <h2>{destination?.eventName}</h2>
                                <p><small>{destination?.date}</small></p>
                                <p>{destination?.description}</p>
                            </div>
                            <div className="col-sm-4 col-md-2">
                                <p><b>From ${destination?.price} pp</b></p>
                                <p><button className="btn btn-info">{destination?.status}</button></p>
                            </div>
                        </div>
                    </div>

                    )}

                </div>
            </div>
        </div>
    );
};

export default AllDestinations;