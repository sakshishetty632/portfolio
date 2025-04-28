'use client';
import React from 'react'
import { Header } from './Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills';
import { Footer } from './Footer';

export const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>

    )
}
