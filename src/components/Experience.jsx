import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/js.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import mongo from '../assets/mongo.png'
import github from '../assets/github.png'

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: react,
            title: 'REACT',
            style: 'shadow-blue-600',
        },
        {
            id: 5,
            src: tailwind,
            title: 'TAILWIND',
            style: 'shadow-sky-400',
        },
        {
            id: 6,
            src: node,
            title: 'NodeJs',
            style: 'shadow-green-300',
        },
        {
            id: 7,
            src: mongo,
            title: 'MONGODB',
            style: 'shadow-green-500',
        },
        {
            id: 8,
            src: github,
            title: 'Github',
            style: 'shadow-gray-100',
        },
    ]

    return (
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full text-white">
            <div className="max-w-screen-lg p-4 pt-28 mx-auto flex flex-col justify-center items-center md:items-start lg:items-start">
                <div>
                    <p className="text-4xl font-semibold border-b-4 border-gray-500 inline">Experience</p>
                    <p className="pt-4 text-xl">These are technologies I've worked with.</p>
                </div>
                <div className="w-full flex flex-wrap  text-center my-12 p-4">
                    {
                        techs.map((tech, index) => (
                            <div key={index} className={`shadow-md ${tech.style} md:max-w-[calc(33.333%-8px)] max-w-[calc(50%-8px)] w-1/2 md:w-1/3 mx-1 mt-6 hover:scale-105 duration-200`}>
                                <img src={tech.src} alt="" className="w-20 mx-auto" />
                                <p className="mt-4" >{tech.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience