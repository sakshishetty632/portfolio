import React from 'react'
import localFont from 'next/font/local'

const myFont = localFont({ src: '/TAN-BUSTER.otf' })

export const Hero = () => {
    return (
        <section  id="hero" className="text-gray-600 body-font">
            <div className="container  flex px-5 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-20 md:pr-16 flex flex-col md:items-center md:text-left mb-16 ml-30 md:mb-0 items-center text-center">
                    <h3 className="sm:text-5xl text-xl mb-10 font-medium text-teal-900">Hi, I'm</h3>
                    <h1 className={`sm:text-9xl text-3xl mb-2 font-medium text-teal-900 ${myFont.className}`}>
                        Sakshi
                    </h1>
                    <h1 className={`sm:text-9xl text-3xl mb-2 font-medium text-teal-900 ${myFont.className}`}>
                        Shetty
                    </h1>
                </div>
                <div className="lg:w-[30rem]  md:w-1/2 w-5/6">
                    {/* <img className="object-cover rounded mt-22 h-[35rem] w-[27rem] pr-28" alt="hero" src="/Sakshi.png" /> */}
                    <video
                        className="object-cover rounded mt-33 h-[35rem] w-[27rem] "
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/SakshiShetty.mp4" type="video/mp4" />

                    </video>
                </div>
            </div>
        </section>
    )
}

