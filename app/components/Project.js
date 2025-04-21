"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt, FaLink } from "react-icons/fa";
export const Project = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            title: "Project 1",
            img: "https://dummyimage.com/320x200",
            desc: "Photo booth fam kinfolk cold-pressed sriracha...",
        },
        {
            title: "Project 2",
            img: "https://dummyimage.com/320x200",
            desc: "Photo booth fam kinfolk cold-pressed sriracha...",
        },
        {
            title: "Project 3",
            img: "https://dummyimage.com/320x200",
            desc: "Photo booth fam kinfolk cold-pressed sriracha...",
        },
        {
            title: "Project 4",
            img: "https://dummyimage.com/320x200",
            desc: "Photo booth fam kinfolk cold-pressed sriracha...",
        },
    ];

    const prevSlide = () =>
        setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    const nextSlide = () =>
        setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));

    return (
        <section id="project" className="text-teal-700 flex flex-col mt-12 items-center justify-center relative">
            <h2 className=" text-3xl sm:text-6xl  text-center w-full mt-18 mb-2">Projects</h2>

            {/* Overlapping Top Image */}
            <div className="absolute top-38 left-1/2 transform -translate-x-1/2 z-10">
                <img
                    src='/SakshiShettyProject.png'
                    alt="Top Character"
                    className="w-50 h-50 object-contain"
                />
            </div>

            {/* Carousel */}
            <div className="container px-20 pt-47 pb-20 mx-auto relative z-0">
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
                                    className="w-full sm:w-1/4 sm:h-1/3 px-2 flex-shrink-0"
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
                                                <a
                                                    href={card.thirdLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-300 hover:text-white text-2xl"
                                                >
                                                    <FaLink />
                                                </a>
                                            </div>

                                        </div>

                                        <div className="p-2">
                                            <h1 className="title-font text-lg font-medium text-teal-900 mb-1">{card.title}</h1>
                                            <p className="leading-relaxed mb-1">{card.desc}</p>
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
