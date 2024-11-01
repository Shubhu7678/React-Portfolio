import React from 'react'
import HeroImage from '../assets/hero.jpg';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col gap-4 items-center justify-center h-full md:flex-row lg:flex-row md:justify-between">
                <div className="flex flex-col gap-3 justify-center mt-16">
                    <h1 className="text-4xl md:text-7xl font-bold text-white">I'm a FullStack Developer.</h1>
                    <p className="text-gray-400 max-w-md">I have 1 year of experience building Softwares from end to end.
                        Currently I love to work on web application using technologies like React, NodeJS, ExpressJS, MongoDB.
                    </p>
                    <div>
                        <Link to="portfolio" smooth duration={500} className="w-fit group px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-row items-center gap-1 rounded-md cursor-pointer">
                            <span>
                                Portfolio
                            </span>
                            <FaArrowRight className="group-hover:rotate-90 duration-300" />
                        </Link>
                    </div>
                </div>
                <div>
                    <img
                        className="rounded-2xl w-2/3 md:mx-auto md:w-[500px] lg:w-[500px]"
                        src={HeroImage} alt="Here is my image" />
                </div>

            </div>
        </div>
    )
}

export default Home