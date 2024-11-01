import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';

const links = [
    {
        id: 1,
        child: (
            <>
                <span>LinkedIn</span>
                <FaLinkedin className="text-2xl" />
            </>
        ),
        href: 'https://www.linkedin.com/',
        style: 'rounded-tr-md'
    },
    {
        id: 2,
        child: (
            <>
                <span>Github</span>
                <FaGithub className="text-2xl" />
            </>
        ),
        href: 'https://github.com/',
        style: ''
    },
    {
        id: 3,
        child: (
            <>
                <span>Mail</span>
                <HiOutlineMail className="text-2xl" />
            </>
        ),
        href: 'mailto:foo@gmail.com',
    },
    {
        id: 4,
        child: (
            <>
                <span>Resume</span>
                <BsFillPersonLinesFill className="text-2xl" />
            </>
        ),
        href: '/Shubham_Aswal.pdf',
        style: 'rounded-br-md',
        download: true,
    },
]

const SocialLinks = () => {
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {
                    links.map((link, index) => (
                        <li key={index}
                            className={`text-white ml-[-100px] bg-gray-500 hover:rounded-md duration-300 hover:ml-[-10px] flex flex-row justify-between w-40 h-14 px-4 py-2 items-center ${link.style}`}>
                            <a
                                className="flex flex-row justify-between items-center w-full"
                                download={link.download}
                                target="_blank"
                                rel="noreferrer"
                                href={link.href}
                            >
                                {link.child}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SocialLinks