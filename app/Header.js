import React from 'react'
import Image from 'next/image'

export const Header = () => {
    return (
        <header className="sticky top-1 z-50 body-font">
            <div className="mx-2 flex flex-wrap px-4 py-1 flex-col md:flex-row items-center bg-teal-700 rounded-full mt-1">
                <a><Image src='/Logo.png' alt='Logo' height={0} width={70} className='w-[120] ml-5'></Image></a>
                <nav className="md:ml-auto flex flex-wrap items-center  justify-center highlightTextIn text-xl">
                    <a href="#hero" data-text="Home" className="mr-9  relative cursor-pointer">Home</a>
                    <a href="#about" data-text="About" className="mr-9  relative cursor-pointer">About</a>
                    <a href="#skills" data-text="Skills" className="mr-9  relative cursor-pointer">Skills</a>
                    <a href="#project" data-text="Projects" className="mr-9  relative cursor-pointer">Projects</a>
                    <a href="#feedback" data-text="Contact Me" className="mr-9  relative cursor-pointer">Contact Me</a>
                </nav>

            </div>
        </header>
    )
}
