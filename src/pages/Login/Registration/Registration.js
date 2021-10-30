import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// from react form hook
import { useForm } from "react-hook-form";

const Registration = () => {

    const history = useHistory();
    const { signInWithGoogle, signInWithFacebook, signInWithGit, makeUserWithEmailAndPassword, msg } = useAuth();

    const location = useLocation();
    //catch private route redirect page url
    const redirect_uri = location.state?.from || '/';

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        makeUserWithEmailAndPassword(data.email, data.pass1, data.fullName, history, redirect_uri)
    };
    return (
        <div className="font-mono">
            {/* <!-- registration form --> */}
            <div className="">
                <div className="flex justify-center px-6 my-12">
                    {/* <!-- Row --> */}
                    <div className="row w-100">
                        {/* <!-- Col --> */}
                        <div
                            className="col-lg-4"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80')", backgroundSize: 'cover' }}
                        ></div>
                        {/* <!-- Col --> */}
                        <div className="col-lg-8 pt-4">
                            <h3 className="text-center text-secondary fw-bold px-4">Create an Account!</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="px-5 p-5 mb-4 bg-white rounded-3">
                                <h2 className='text-danger'>{msg}</h2>

                                <div className="mb-3">
                                    <label className="form-label" htmlFor="name">
                                        Full Name
                                    </label>
                                    <input
                                        className="form-control w-75"
                                        id="name"
                                        type="text"
                                        defaultValue="Name" {...register("fullName")}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="form-control w-75"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        defaultValue="" {...register("email", { required: true })}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        className="form-control w-75"
                                        id="password"
                                        type="password"
                                        placeholder="******************"
                                        defaultValue="" {...register("pass1", { required: true })}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="password">
                                        Confirm password
                                    </label>
                                    <input
                                        className="form-control w-75"
                                        id="c_password"
                                        type="password"
                                        placeholder="******************"
                                        defaultValue="" {...register("pass2", { required: true })}
                                    />
                                </div>

                                <p className="text-xs italic text-red-500">{errors.pass1 === errors.pass2 ? "Password must be same those two field" : ''}</p>
                                <div className="mb-6 text-center">
                                    <button
                                        className="btn btn-outline-primary"
                                        type="submit"
                                    >
                                        <i className="fab fa-staylinked"></i>  Register Account
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                                <div className="text-center">
                                    <Link
                                        className="btn btn-outline-primary"
                                        to="/login"
                                    >
                                        Already have an account? Login!
                                    </Link>
                                </div>

                                <div className="my-2 d-flex flex-row justify-content-center">
                                    <hr style={{ height: '1px' }} />
                                    <h3>OR</h3>
                                </div>
                                <div className="d-flex justify-content-center gap-2">
                                    <button onClick={() => signInWithGoogle(history, redirect_uri)} className="d-block btn btn-outline-danger">
                                        <i className="fab fa-google pe-3"></i>
                                        Sign-in with Google
                                    </button>
                                    <button onClick={() => signInWithFacebook(history, redirect_uri)} className="d-block btn btn-outline-primary">
                                        <i className="fab fa-facebook-square pe-3"></i>
                                        Sign-in with Facebook
                                    </button>
                                    <button onClick={() => signInWithGit(history, redirect_uri)} className="d-block btn btn-outline-dark">
                                        <i className="fab fa-github pe-3"></i>
                                        Sign-in with Github
                                    </button>
                                </div>
                                <div className="d-flex flex-row justify-content-end">
                                    <a href="#forget">Forgot password</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;