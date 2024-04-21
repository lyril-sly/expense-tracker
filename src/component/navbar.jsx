import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../asset/logo (2).png'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <a href="/" className="text-white font-bold text-xl"><img className="h-10" src={logo}/></a>
                    {/* <Link to="/sign-up" className="ml-4 px-2 py-1 rounded bg-gray-700 text-white" >Sign Up</Link> */}
                </div>
                <div className="hidden md:flex">
                    <Link to="/home" className="text-gray-300 hover:text-white px-3 py-2">Home</Link>
                    <Link to="/new" className="text-gray-300 hover:text-white px-3 py-2">New Transaction</Link>
                    <Link to="/profile" className="text-gray-300 hover:text-white px-3 py-2">Profile</Link>
                    <Link to="/all" className="text-gray-300 hover:text-white px-3 py-2">Transaction</Link>
                    <Link to="/daily" className="text-gray-300 hover:text-white px-3 py-2">Budget</Link>
                </div>
                <div className="md:hidden">
                    <button className="text-gray-300 hover:text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
