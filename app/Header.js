'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const sections = ['home', 'about', 'skills', 'project', 'contact'];

export const Header = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100; // offset for fixed header
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // for initial highlight
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-1 w-full z-50">
            <div className="mx-6 flex flex-wrap px-4 py-1 flex-col md:flex-row items-center bg-teal-700 rounded-full mt-1">
                <Link href="/">
                    <Image src='/LogoNew.png' alt='Logo' height={100} width={100} className="w-[45px] ml-5 p-1" />
                </Link>

                <nav className="md:ml-auto flex flex-wrap items-center justify-center text-xl highlightTextIn">
                    {sections.map((section) => (
                        <Link key={section} href={`#${section}`}>
                            <span
                                data-text={section}
                                className={`mr-9 relative cursor-pointer ${
                                    activeSection === section ? 'text-white font-semibold' : ''
                                }`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </span>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};


<a href="#project" data-text="Projects" className="mr-9  relative cursor-pointer">Projects</a>