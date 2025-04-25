'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa' // from react-icons

const sections = ['home', 'about', 'skills', 'project', 'contact'];

export const Header = () => {
    const [activeSection, setActiveSection] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="fixed top-1 w-full z-50">
            <div className="mx-2 sm:mx-8 flex justify-between items-center px-4 py-2 bg-teal-700 rounded-full mt-1">
                <Link href="/">
                    <Image src='/Header/Logo.png' alt='Logo' height={100} width={100} className="w-[45px] p-1" />
                </Link>

                {/* Hamburger icon for mobile */}
                <button className="md:hidden text-white" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center text-xl highlightTextIn">
                    {sections.map((section) => (
                        <Link key={section} href={`#${section}`}>
                            <span
                                data-text={section}
                                className={`mr-9 relative cursor-pointer ${activeSection === section ? 'text-white font-semibold' : ''}`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </span>
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Mobile sliding menu */}
            <div
                className={`md:hidden fixed top-[70px] left-0 w-full bg-teal-800 transition-all duration-300 ease-in-out z-40 
                    ${isMobileMenuOpen ? 'max-h-[300px] py-4' : 'max-h-0 overflow-hidden'}`}
            >
                <div className="flex flex-col items-center gap-4">
                    {sections.map((section) => (
                        <Link key={section} href={`#${section}`} onClick={closeMobileMenu}>
                            <span
                                className={`text-white text-lg ${activeSection === section ? 'font-semibold' : ''}`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
};
