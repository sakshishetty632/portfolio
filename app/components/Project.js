"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi"

export const Project = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            title: "LearnTrack",
            img: "/Project/projectMockups/LearnTrack.jpg",
            desc: "LearnTrack is a student report management app built with Angular and Spring Boot, providing seamless tracking and management of academic performance.",
            liveLink: "http://localhost:4200/report/new",
            githubLink: "https://github.dev/sakshishetty632/form-report-client",
        },
        {
            title: "MAAS",
            img: "/Project/projectMockups/Maas.jpg",
            desc: "MaaS is a lightweight, scalable solution for real-time system monitoring, tracking CPU, memory, disk usage, and service health with a centralized dashboard and alerting.",
            liveLink: "",
            githubLink: "https://github.com/sakshishetty632/monitoring-as-a-service",
        },
        {
            title: "QR Code Generator",
            img: "/Project/projectMockups/QRCodeGenerator.jpg",
            desc: "The QR Code Generator is a Flask and Python-based tool that converts URLs into scannable QR codes, displayed as SVG images.",
            liveLink: "https://qr-code-generator-7w2j.onrender.com",
            githubLink: "https://github.com/sakshishetty632/qr-generator",
        },
        {
            title: "YouTube Downloader",
            img: "/Project/projectMockups/YoutubeDownloader.jpg",
            desc: "The YouTube Video Downloader is a Flask-based app using yt-dlp to download YouTube videos in various formats with ease.",
            liveLink: "",
            githubLink: "https://github.com/sakshishetty632/youtube-downloader",
        },
        {
            title: "Instagram Clone",
            img: "/Project/projectMockups/igclone.jpg",
            desc: "The Instagram Clone is a web app built with HTML and CSS, replicating the core design and layout of the Instagram platform.",
            liveLink: "https://sakshi-shetty-instagram-clone.vercel.app/",
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

            const distance = Math.min(Math.sqrt(dx * dx + dy * dy), 70);
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

            <div className="bg-[url('/Project/project-background.jpg')] bg-center w-screen h-screen absolute z-0 top-10 bg-cover bg-no-repeat opacity-5"></div>

             {/* Image with overlapping Top eye Image */}
            {/* <div className="absolute top-22 left-1/2 transform -translate-x-1/2 z-10 hidden md:block"> 
                <img
                    id="anchor"
                    src='/Project/ProjectSakshiShetty1.png'
                    alt="Top Character"
                    className="w-[300px] h-[300px] object-contain"
                />

                <div className="eyes">
                    <img src="/Project/eye.png" className="eye absolute top-[79.5px] left-[136px] h-[10.7px] w-[10.7px]" />
                    <img src="/Project/eye.png" className="eye absolute top-[78px] left-[183px] h-[11.2px] w-[11.2px]" />
                </div>
            </div> */}
            <div className="absolute top-22 left-1/2 transform -translate-x-1/2 hidden md:block">


                <div className="eyes">
                    <img src="/Project/eye.png" className="eye absolute top-[79px] left-[136px] h-[11.5px] w-[11.5px] -z-10 " />
                    <img src="/Project/eye.png" className="eye absolute top-[77.7px] left-[183px] h-[12.2px] w-[12.2px] -z-10" />
                </div>

                <img
                    id="anchor"
                    src='/Project/ProjectSakshiShetty.png'
                    alt="Top Character"
                    className="w-[300px] h-[300px] object-contain z-50 "
                />
            </div>
            <img
                src="/Project/ProjectSakshiShetty-smallscreen.png"
                alt="Character"
                className="block md:hidden w-[300px] h-[300px] object-contain top-22 absolute"
            />
            {/* Carousel */}
            <div className="container sm:px-20 pt-[357px] pb-20 mx-auto relative -z-10">
                <div className="relative bg-teal-700/10 rounded-xl px-6 py-8">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 opacity-80 sm:pl-10"
                    >
                        <FaChevronLeft className="text-2xl text-teal-700 hover:text-teal-900" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 opacity-80 sm:pr-10"
                    >
                        <FaChevronRight className="text-2xl text-teal-700 hover:text-teal-900" />
                    </button>

                    {/* Cards */}
                    <div className="flex justify-center gap-8 transition-transform duration-300 ease-in-out overflow-x-hidden">
                        {cards
                            .slice(currentIndex, currentIndex + 3)
                            .concat(cards.slice(0, Math.max(0, 3 - (cards.length - currentIndex))))
                            .map((card, index) => (
                                <div
                                    key={index}
                                    className="w-full sm:w-[18.5rem] px-2 flex-shrink-0"
                                >
                                    <div className="relative rounded-lg overflow-hidden bg-white">
                                        <div className="m-2 relative group">
                                            <img className="h-[200px] w-full object-cover rounded-lg object-center" src={card.img} alt={card.title} />

                                            <div className="absolute top-0 scale-x-0 group-hover:scale-100 transition-transform origin-left duration-150 ease-linear bg-teal-900/70 w-full h-full rounded-lg flex items-center gap-4 justify-center">
                                                <Link href={card.githubLink} target="_blank" className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all">
                                                    <BiLinkExternal size={20} />
                                                </Link>
                                                <Link href={card.githubLink} target="_blank" className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all">
                                                    <FaGithub size={20} />
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="px-3.5 pb-3">
                                            <h1 className="title-font text-lg font-medium text-slate-900 mb-1">{card.title}</h1>
                                            <p className="leading-relaxed mb-1 line-clamp-2 text-slate-400">{card.desc}</p>
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
