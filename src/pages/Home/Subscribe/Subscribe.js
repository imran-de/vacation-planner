import React from 'react';
import './Subscribe.css';
import { useForm } from "react-hook-form";

const Subscribe = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container">
            <div className="subscribe-container">
                <div className="text-center overlay">
                    <p className="text-light text-uppercase fw-bold">EXCITED AND READY TO GO?</p>
                    <h2 className="fw-bolder text-light">Subscribe to our newsletter</h2>
                    <p className="text-light">We promise not to spam you</p>
                    <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                        <div className=" col-md-3">

                            <input type="text" className="form-control"  {...register("firstName")} placeholder="First Name" required />
                        </div>
                        <div className=" col-md-3">

                            <input type="text" className="form-control"  {...register("lastName")} placeholder="Last Name" required />
                        </div>
                        <div className=" col-md-4">

                            <div className="input-group">
                                <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                <input type="email" className="form-control"  {...register("email")} placeholder="xyz@gmail.com" required />
                            </div>
                        </div>
                        <div className="col-md-1">
                            <button className="btn btn-primary fw-bold" type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;