import React from 'react'
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa'

export const About = () => {
    return (
        <section id="about" className="text-teal-700 flex flex-col mt-12 items-center justify-center">
            {/* Heading */}
            <h1 className="text-3xl sm:text-6xl  text-center mt-28">About Me</h1>

            <div className="mx-auto  flex flex-col md:flex-row items-center justify-center " >
                {/* Left: Video */}
                <div className="lg:w-[30rem] h-[30rem] w-full flex justify-center md:justify-start md:mb-0 pl-25">
                    <video
                        className="object-contain mt-12 h-[20rem] w-[20rem] mb-4 rounded-full border-1 border-teal-900"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/AboutSakshiShetty.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Right: Text + Icons */}
                <div className="md:w-2/3 w-full px-4 ">
                    {/* <p className="text-lg text-justify leading-relaxed mb-8">
                        Hi, I’m <strong>Sakshi Shetty</strong>. I enjoy building thoughtful software and understanding how things work whether it’s backend logic, frontend flow, or systems under the hood. I work mostly with Java, Spring Boot, Angular, C, C++, and Python, and I’m slowly finding my space in the world of open source, learning through every contribution. With an OCA Java Certification and a curiosity that rarely sits still, I’m just here to keep learning, building, and sipping coffee in between.
                    </p> */}
                    <p className="text-lg mb-5 text-teal-900">
                        Hi, I’m <strong>Sakshi Shetty</strong>. My journey in tech started back in 11th grade when I took up Computer Science — not entirely by choice at the time, but it didn’t take long for me to get <strong>genuinely drawn into it</strong>. What began with curiosity turned into a real interest in <strong>how things work</strong> and <strong>how to build things that do</strong>.            
                        I’m just here to <strong>keep learning, building, and sipping coffee in between</strong>.
                    </p>

                    {/* Social Icons */}
                    <div className="flex justify-start space-x-6 mb-13">
                        <a href="https://www.linkedin.com/in/shetty-sakshi" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-3xl hover:text-teal-900 transition duration-300" />
                        </a>
                        <a href="https://github.com/sakshishetty632" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-3xl hover:text-teal-900 transition duration-300" />
                        </a>
                        <a href="/SakshiShettyResume.pdf" target="_blank" rel="noopener noreferrer">
                            <FaFileAlt className="text-3xl hover:text-teal-900 transition duration-300" />
                        </a>

                    </div>
                </div>
            </div>
        </section>
    )
}

