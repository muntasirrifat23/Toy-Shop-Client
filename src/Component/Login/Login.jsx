import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">
                            <h1 className="text-5xl font-bold text-cyan-800">Login now!</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                                <label className="label">


                                    <div>
                                        <Link to="/register" className='text-indigo-800'>Don't Have Account? Please Register</Link>
                                    </div>
                                </label>
                            </div>
                            {/* Button */}
                            <div className="form-control mt-6">
                                <div className='g-btn'>
                                <button className="btn btn-circle mb-2"> G </button>
                                </div>

                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Login;