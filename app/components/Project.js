"use client";

import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt, FaLink } from "react-icons/fa";
export const Project = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            title: "LearnTrack",
            img: "/LearnTrack.jpg",
            desc: "LearnTrack is a student report management app built with Angular and Spring Boot, providing seamless tracking and management of academic performance.",
            liveLink:"http://localhost:4200/report/new",
            githubLink: "https://github.dev/sakshishetty632/form-report-client",
        },
        {
            title: "MAAS",
            img: "/Maas.jpg",
            desc: "MaaS is a lightweight, scalable solution for real-time system monitoring, tracking CPU, memory, disk usage, and service health with a centralized dashboard and alerting.",
            liveLink:"",
            githubLink: "https://github.com/sakshishetty632/monitoring-as-a-service",
        },
        {
            title: "QR Code Generator",
            img: "/QRCodeGenerator.jpg",
            desc: "The QR Code Generator is a Flask and Python-based tool that converts URLs into scannable QR codes, displayed as SVG images.",
            liveLink:"https://qr-code-generator-7w2j.onrender.com",
            githubLink: "https://github.com/sakshishetty632/qr-generator",
        },
        {
            title: "YouTube Downloader",
            img: "/YoutubeDownloader.jpg",
            desc: "The YouTube Video Downloader is a Flask-based app using yt-dlp to download YouTube videos in various formats with ease.",
            liveLink:"",
            githubLink: "https://github.com/sakshishetty632/youtube-downloader",
        },
        {
            title: "Instagram Clone",
            img: "/igclone.jpg",
            desc: "The Instagram Clone is a web app built with HTML and CSS, replicating the core design and layout of the Instagram platform.",
            liveLink:"https://sakshi-shetty-instagram-clone.vercel.app/",
            githubLink: "https://github.com/sakshishetty632/instagram-clone",
        },
    ];

    const prevSlide = () =>
        setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    const nextSlide = () =>
        setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));

    useEffect(() => {
        const handleMouseMove = (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
    
            const anchor = document.getElementById('anchor');
            const rekt = anchor.getBoundingClientRect();
            const anchorX = rekt.left + rekt.width / 2;
            const anchorY = rekt.top + rekt.height / 2;
    
            const dx = mouseX - anchorX;
            const dy = mouseY - anchorY;
    
            const distance = Math.min(Math.sqrt(dx * dx + dy * dy), 50);
            const angle = Math.atan2(dy, dx);
            const offsetX = Math.cos(angle) * (distance / 32);
            const offsetY = Math.sin(angle) * (distance / 32);
    
            const eyes = document.querySelectorAll('.eye');
            eyes.forEach((eye) => {
                eye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            });
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        
    
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [cards.length]);

    return (
        <section id="project" className="text-teal-700 flex flex-col mt-12 items-center justify-center relative">
            {/* <h2 className=" text-3xl sm:text-6xl text-center w-full mb-2">Projects</h2> */}

            {/* Overlapping Top Image */}
            {/* <div className="relative"> */}
            <div className="absolute top-26 left-1/2 transform -translate-x-1/2 z-10">
                <img
                    id="anchor"
                    src='/SakshiShettyProject.png'
                    alt="Top Character"
                    className="w-[280px] h-[280px] object-contain"
                />

                <div className="eyes">
                    <img src="/eye.png" className="eye absolute top-[74.5px] left-[127px] h-[10px] w-[10px]" />
                    <img src="/eye.png" className="eye absolute top-[73.5px] left-[171px] h-[10.3px] w-[10.3px]" />
                </div>
            </div>
            {/* </div> */}

            {/* Carousel */}
            <div className="container px-20 pt-[355px] pb-20 mx-auto relative z-0">
                <div className="relative bg-gray-200 rounded-xl px-6 py-8">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 opacity-80 pl-10"
                    >
                        <FaChevronLeft className="text-2xl text-teal-700 hover:text-teal-900" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 opacity-80 pr-10"
                    >
                        <FaChevronRight className="text-2xl text-teal-700 hover:text-teal-900" />
                    </button>


                    <div className="flex justify-center gap-12 transition-transform duration-300 ease-in-out overflow-x-hidden">
                        {cards
                            .slice(currentIndex, currentIndex + 3)
                            .concat(cards.slice(0, Math.max(0, 3 - (cards.length - currentIndex))))
                            .map((card, index) => (
                                <div
                                    key={index}
                                    className="w-full h-40 sm:w-1/4 sm:h-1/3 px-2 flex-shrink-0"
                                >
                                    <div className="group relative border-1 border-teal-700 border-opacity-20 rounded-lg overflow-hidden bg-white">
                                        <div className="relative">
                                            <img className="h-[120px] w-full object-cover object-center" src={card.img} alt={card.title} />

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-teal-900 bg-opacity-60 flex items-center justify-center gap-4 
    opacity-0 transform -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 
    transition-all duration-500 ease-in-out">

                                                <a
                                                    href={card.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-300 hover:text-white text-2xl"
                                                >
                                                    <FaExternalLinkAlt />
                                                </a>
                                                <a
                                                    href={card.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-300 hover:text-white text-2xl"
                                                >
                                                    <FaGithub />
                                                </a>
                                                {/* <a
                                                    href={card.thirdLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-300 hover:text-white text-2xl"
                                                >
                                                    <FaLink />
                                                </a> */}
                                            </div>

                                        </div>

                                        <div className="p-2">
                                            <h1 className="title-font text-lg font-medium text-teal-900 mb-1">{card.title}</h1>
                                            <p className="leading-relaxed mb-1 line-clamp-2">{card.desc}</p>
                                        </div>
                                    </div>

                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
