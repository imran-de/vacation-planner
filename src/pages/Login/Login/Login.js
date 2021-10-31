import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// from react form hook
import { useForm } from "react-hook-form";

const Login = () => {
    const history = useHistory();
    const { signInWithGoogle, signInWithFacebook, signInWithGit, msg, logInWithEmailAndPassword } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    //catch private route redirect page url
    const redirect_uri = location.state?.from || '/destinations';
    // handle email password login
    const onSubmit = data => {
        logInWithEmailAndPassword(data.email, data.pass, history, redirect_uri);
    };


    return (
        <div>
            {/* Login with email and password */}

            <div className="py-5 d-flex justify-content-center align-items-center text-center">
                <div className="p-4 rounded-3 col-lg-4" style={{ backgroundColor: '#F3F6F5' }}>
                    <h1 className="text-center text-secondary fw-bold px-4">
                        LOGIN
                    </h1>
                    <hr style={{ height: '1px' }} />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="px-0 py-4">
                            <h2 className='text-danger'>{msg}</h2>
                            <div className="form-floating mb-3">
                                <input
                                    id="floatingInput1"
                                    className="form-control"
                                    placeholder="Email address"
                                    type="email"
                                    defaultValue="" {...register("email", { required: true })}
                                />
                                <label htmlFor="floatingPassword">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    id="floatingInput2"
                                    className="form-control"
                                    placeholder="Password"
                                    type="password"
                                    defaultValue="" {...register("pass", { required: true })}
                                />
                                <label htmlFor="floatingPassword">Password</label>
                                <p className="text-xs italic text-red-500">{errors.pass && "Password is must"}</p>
                            </div>
                            <div className="d-flex justify-content-around">
                                <button
                                    className="btn btn-primary d-inline m-2"
                                    type="submit"
                                >
                                    <i className="fas fa-sign-in-alt"></i> Login
                                </button>
                                <Link to='/registration' className="btn btn-outline-primary m-2">
                                    <i className="fab fa-staylinked"></i> Sign-up
                                </Link>
                            </div>
                            <div className="my-2 flex flex-row justify-center">
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
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;