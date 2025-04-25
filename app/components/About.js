import React from 'react'
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa'

export const About = () => {
    return (
        <section id="about" className="text-teal-700 flex flex-col mt-12 items-center justify-center">
            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl font-semibold text-center mt-12 sm:mt-28">About Me</h1>

            <div className="mx-auto flex flex-col md:flex-row items-center justify-center">
                {/* Left: Video */}
                <div className="lg:w-[30rem] lg:h-[30rem] w-full flex justify-center md:justify-start md:mb-0 mb-8 sm:pl-25">
                    <video
                        className="object-contain mt-12 sm:h-[20rem] sm:w-[20rem] h-[15rem] w-[15rem] mb-4 rounded-full border-1 border-teal-900"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/About/AboutSakshiShetty.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Right: Text + Icons */}
                <div className="md:w-2/3 w-full px-4 ">
                    <p className="text-base sm:text-lg mb-5 text-slate-900">
                        Hi, I’m <strong>Sakshi Shetty</strong>. My journey in tech started back in 11th grade when I took up Computer Science — not entirely by choice at the time, but it didn’t take long for me to get genuinely drawn into it. What began with curiosity turned into a <strong>real interest in how things work and how to build things that do</strong>.
                        <strong> I’m just here to keep learning, building, and sipping coffee in between</strong>.
                    </p>

                    {/* Social Icons */}
                    <div className="flex justify-start space-x-6 mb-13">
                        <a href="https://www.linkedin.com/in/shetty-sakshi" className="bg-slate-100 hover:bg-slate-200 transform transition-all p-2 rounded" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-3xl hover:text-teal-900 transition duration-300" />
                        </a>
                        <a href="https://github.com/sakshishetty632" className="bg-slate-100 hover:bg-slate-200 transform transition-all p-2 rounded" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-3xl hover:text-teal-900 transition duration-300" />
                        </a>
                        <a href="https://drive.google.com/file/d/1keYM66GMtw7gRAWXQXmQ8FPnkKEaomKO/view?usp=drive_link" className="bg-slate-100 hover:bg-slate-200 transform transition-all p-2 rounded" target="_blank" rel="noopener noreferrer">
                            <FaFileAlt className="text-3xl hover:text-teal-900 transition duration-300" />
                        </a>

                    </div>
                </div>
            </div>
        </section>
    )
}

