import React from 'react'
import banner1 from '../assets/banner.jpg'
import banner2 from '../assets/banner2.jpeg'
import banner3 from '../assets/banner3.jpeg'
import banner4 from '../assets/banner4.jpeg'
import banner5 from '../assets/banner5.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: banner1,
        },
        {
            id: 1,
            src: banner2,
        },
        {
            id: 1,
            src: banner3,
        },
        {
            id: 1,
            src: banner4,
        },
        {
            id: 1,
            src: banner5,
        }
    ]

    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
            <div className="max-w-screen-lg p-4 pt-32 mx-auto flex flex-col justify-center items-center md:items-start w-full h-full">
                <div className="py-8">
                    <p className="text-4xl font-semibold border-b-4 border-gray-500 inline">Portfolio</p>
                    <p className="py-6">Check out some of my projects</p>
                </div>
                <div className="flex flex-wrap justify-center md:justify-normal gap-5 pb-3">
                    {
                        portfolios.map((data, index) => (
                            <div key={index} className="shadow-md shadow-gray-600 rounded-lg">
                                <img className="w-72 rounded-md hover:scale-105 duration-300" src={data.src} alt="" />
                                <div className="flex justify-center items-center">
                                    <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">Demo</button>
                                    <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">Code</button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Portfolio