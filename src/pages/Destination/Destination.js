
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';


const Destination = () => {
    //catch id from url
    const { id } = useParams();
    // react hook form
    const { register, handleSubmit, reset } = useForm();
    //collect user information
    const { user } = useAuth();
    //loader status
    const [isLoading, setIsLoading] = useState(false)
    const [destinations, setDestinations] = useState([])
    const [destination, setDestination] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        fetch('https://mysterious-island-52828.herokuapp.com/allEvents')
            .then(res => res.json())
            .then(data => {
                setDestinations(data);
                setIsLoading(false);
            })
    }, [])
    //find for single user clicked destination information
    useEffect(() => {
        setIsLoading(true);
        const find = destinations.find(destination => destination._id === id);
        setDestination(find);
        setIsLoading(false);
    }, [id, destinations])

    if (isLoading) {
        return <div className="text-center">
            <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    // for order confirmed
    const onSubmit = data => {
        data.confirmEventNo = destination?._id;
        data.eventName = destination?.eventName;
        data.status = "pending";
        fetch('https://mysterious-island-52828.herokuapp.com/addOrders', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order Confirmed, you can see all in My orders page.')
                    reset();
                }
            })
    };



    return (
        <div className="container-fluid mb-5">

            <div className="row">
                <div className="col-12 text-end pb-2">
                    {/* <HashLink to="#orderConfirm" className="btn btn-warning">Book Now</HashLink > */}
                </div>
                <div className="col-12 text-center mb-3 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${destination?.imgURL})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '500px' }}>
                    <div className="d-flex justify-content-center align-items-center">
                        <h2 className="fs-1 text-light fw-bolder">{destination?.eventName}</h2>
                    </div>
                    {/* <img className="img-fluid" src={destination?.imgURL} alt="" /> */}
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <h2 className="fs-3">{destination?.eventName}</h2>
                    <div className="col-md-6">
                        <h3><button className="btn btn-danger">{destination?.status} For Booking</button></h3>
                        <h5>Location: {destination?.location}</h5>
                        <h2>{destination?.eventName}</h2>
                        <p><b>Date: </b>{destination?.date}</p>
                        <p><b>Price: </b> From ${destination?.price} per person.</p>
                        <HashLink to="#orderConfirm" className="btn btn-warning">Book Now</HashLink>
                    </div>
                    <div className="col-md-6">
                        <h4>Event Details: </h4>
                        <p>{destination?.description}</p>
                    </div>
                </div>
            </div>
            {/* order confirmed form */}
            <div className="container">
                <div id="orderConfirm" className="row justify-content-center my-5">
                    <h2 className="text-success text-center text-decoration-underline pb-4">For Confirm Booking Please Fill the Form</h2>
                    <div className="col-md-8">

                        <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                            <div className=" col-md-3">

                                <input type="text" className="form-control" defaultValue={user?.displayName}  {...register("fullName")} placeholder="Full Name" required />
                            </div>
                            <div className=" col-md-3">

                                <input type="text" className="form-control"  {...register("contactNumber")} placeholder="contact no." required />
                            </div>
                            <div className=" col-md-4">
                                <div className="input-group">
                                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                    <input type="email" className="form-control" value={user?.email}  {...register("email")} placeholder="xyz@gmail.com" required />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <input type="number" className="form-control"  {...register("person")} placeholder="Adult Person" required />
                            </div>
                            <div className="col-md-3">
                                <input type="number" className="form-control"  {...register("chilled")} placeholder="chilled" required />
                            </div>
                            <div className="col-md-4">
                                <input type="text" className="form-control" defaultValue={destination?._id}  {...register("confirmEventNo")} placeholder="Event" required readOnly />
                            </div>
                            <div className="col-10">
                                <textarea type="text" className="form-control"  {...register("message")} placeholder="Message (optional)" />
                            </div>
                            <div className="col-12">
                                <button className="btn btn-warning fw-bold" type="submit">Confirmed Now</button>
                            </div>
                        </form>
                    </div>
                </div>
                {destination?.mapURL && <>
                    <h3 className="text-center my-3 mb-5">Example itinerary for your week</h3>
                    <iframe title={destination?._id} src={destination.mapURL} width="100%" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy"></iframe>
                </>}
            </div>
        </div>
    );
};

export default Destination;