
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Destination = () => {
    //catch id from url
    const { id } = useParams();
    // react hook form
    const { register, handleSubmit } = useForm();
    //collect user information
    const { user } = useAuth();
    //loader status
    const [isLoading, setIsLoading] = useState(false)
    const [destinations, setDestinations] = useState([])
    const [destination, setDestination] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        fetch('https://nameless-spire-55077.herokuapp.com/services')
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
    const onSubmit = data => console.log(data);



    return (
        <div className="container">
            <h2 className="fs-2 text-center">{destination?.name}</h2>

            <div className="my-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <img className="img-fluid" src={destination?.img} alt="" />
                    </div>
                    <div className="col-12 text-end">
                        <button className="btn btn-warning">Book Now</button>
                    </div>
                    <div className="col-md-6">
                        <h5>Location: {destination?.location}</h5>
                        <h2>{destination?.name}</h2>
                        <p><b>Date: </b>{destination?.date}</p>
                        <p><b>Price: </b> {destination?.price}</p>
                        <button className="btn btn-warning">Confirmed Now</button>
                    </div>
                    <div className="col-md-6">
                        <h4>Event Details: </h4>
                        <p>{destination?.description}</p>
                    </div>
                </div>
            </div>
            {/* order confirmed form */}
            <div className="row justify-content-center my-5">
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
                                <input type="email" className="form-control" defaultValue={user?.email}  {...register("email")} placeholder="xyz@gmail.com" required />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <input type="number" className="form-control"  {...register("person")} placeholder="Adult Person" required />
                        </div>
                        <div className="col-md-3">
                            <input type="number" className="form-control"  {...register("chilled")} placeholder="chilled" required />
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" defaultValue={destination._id}  {...register("confirmEvent")} placeholder="Event" required readOnly />
                        </div>
                        <div className="col-10">
                            <textarea type="text" className="form-control"  {...register("message")} placeholder="Message" required />
                        </div>
                        <div className="col-12">
                            <button className="btn btn-warning fw-bold" type="submit">Confirmed Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Destination;