import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            linkName: 'home',
            src: 'home'
        },
        {
            id: 2,
            linkName: 'About',
            src: 'about'
        },
        {
            id: 3,
            linkName: 'Portfolio',
            src: 'portfolio'
        },
        {
            id: 4,
            linkName: 'Experience',
            src: 'experience',
        },
        {
            id: 5,
            linkName: 'Contact',
            src: 'contact',
        }
    ]
    return (
        <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed">
            <div>
                <h1 className="text-5xl font-signature ml-2">Shubham</h1>
            </div>
            <ul className="hidden md:flex lg:flex ">
                {
                    links.map((link, index) => (

                        <li
                            key={index}
                            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
                        >
                            <Link to={link.src} smooth duration={500}>{link.linkName}</Link>
                        </li>
                    ))
                }
            </ul>
            <div
                onClick={() => setNav(!nav)}
                className="pr-4 z-10 cursor-pointer md:hidden lg:hidden">
                {
                    nav ? (<FaTimes className="text-xl text-gray-400" />) :
                        (<FaBars className="text-xl text-gray-400" />)
                }
            </div>
            {
                nav && (<ul
                    className="md:hidden lg:hidden flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full bg-gradient-to-b from-black to-gray-800"
                >
                    {
                        links.map((link, index) => (
                            <li
                                key={index}
                                className="px-4 py-6 text-3xl cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
                            >
                               <Link onClick={() => setNav(!nav)} to={link.src} smooth duration={500}>{link.linkName}</Link>
                            </li>
                        ))
                    }
                </ul>)
            }
        </div>
    )
}

export default Navbar