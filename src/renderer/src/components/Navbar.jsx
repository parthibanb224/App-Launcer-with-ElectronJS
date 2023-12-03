import React from 'react';
import { SlSettings } from 'react-icons/sl';
import { IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom';
import Icon from '../assets/icons8-app-launcher-48.png'

const Navbar = () => {

    return (
        <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                {/* Company icon on the left */}
                <div>
                    <img
                        src={Icon}
                        alt="Company icon"
                        className="w-20 h-16 mb-2 self-start"
                    />
                </div>

                {/* <h1 className="text-3xl font-bold mb-5 pt-4">Application Launcher</h1> */}

                <div className='flex gap-7'>
                    <Link to={'/'}>
                        <button
                            className="text-white hover:text-gray-300 text-3xl"
                        >
                            <IoMdHome />
                        </button>
                    </Link>
                    {/* Settings icon on the right */}
                    <Link to={'/settings'}>
                        <button
                            className="text-white hover:text-gray-300 text-3xl mr-6"
                        >
                            <SlSettings />
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
