import React from 'react';
import { Link } from 'react-router-dom';
import { FaGrunt } from 'react-icons/fa';


const Nav = () => {
    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 rounded-box w-52">
                        <li>
                            <Link className='mr-4 font-semibold' to='/'>Home </Link>
                            <Link className='mr-4 font-semibold' to='/all'> All Toys</Link>
                            <Link className='mr-4 font-semibold' to='/add'>Add Toys</Link>
                            <Link className='mr-4 font-semibold' to='/login'>Login</Link>
                            <Link className='mr-4 font-semibold' to='/register'>Registration</Link>
                            <Link className='mr-4 font-semibold' to='/blog'>Blogs</Link>
                        </li>
                    </ul>
                </div>

                <div className="navbar-start font-bold text-xl text-teal-600">
                    <FaGrunt />Toy Shop
                </div>


                <div className='navbar-center'>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <div className='navbar-center'>
                                    <Link className='mr-4 font-semibold' to='/'>Home </Link>
                                    <Link className='mr-4 font-semibold' to='/all'> All Toys</Link>
                                    <Link className='mr-4 font-semibold' to='/add'>Add Toys</Link>
                                    <Link className='mr-4 font-semibold' to='/login'>Login</Link>
                                    <Link className='mr-4 font-semibold' to='/register'>Registration</Link>
                                    <Link className='mr-4 font-semibold' to='/blog'>Blogs</Link>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;