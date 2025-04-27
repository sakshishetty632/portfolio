import React from 'react'
import localFont from 'next/font/local'
import Typewriter from 'typewriter-effect'
import Image from 'next/image'

const myFont = localFont({ src: '/TAN-BUSTER.otf' })

export const Hero = () => {
    return (
        <section id="home" className="text-slate-600 sm:mt-0 mt-30">
            <div className="container flex md:flex-row flex-col items-center">
                {/* Left-Text */}
                <div className="lg:flex-grow  md:w-2/3  md:pr-16 flex flex-col md:items-center md:text-left sm:mb-16 sm:ml-15 md:mb-0 items-center text-center">
                    <div className="flex gap-1 items-start">
                        <Image alt='waving-hand' width={35} height={35} className="transform -translate-y-1" src="/Hero/waving-hand.gif" />
                        <h3 className="sm:text-3xl text-2xl mb-8 font-medium text-slate-900">Hi, I'm</h3>
                    </div>
                    <h1 className={`sm:text-7xl text-3xl mb-2 font-medium text-teal-900 ${myFont.className}`}>
                        Sakshi Shetty
                    </h1>

                    <div className="flex items-baseline sm:w-110 gap-2 mt-3">
                        <h2 className="text-base md:text-2xl text-slate-900 font-medium whitespace-nowrap">
                            I am into
                        </h2>
                        <div className="text-teal-700 text-base md:text-2xl font-semibold min-w-[14rem] sm:min-w-[18rem] h-[2.5rem] flex items-start">
                            <Typewriter
                                options={{
                                    strings: ['Frontend Development', 'Backend Development', 'Full Stack Development'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    deleteSpeed: 30,
                                }}
                            />
                        </div>
                    </div>
                </div>
                {/* Right-Video */}
                <div className="relative lg:w-[32rem] md:w-2/3 w-[22.5rem] ">
                    <video
                        className="object-cover sm:mt-33 h-[26rem] sm:h-[35rem] w-[27rem] -z-50"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/Hero/HeroSakshiShetty.mp4" type="video/mp4" />
                    </video>
                    {/* Right-Backgrounnd */}
                    <div className="absolute hidden sm:grid -top-6 -left-12 lg:top-30 lg:left-16 w-16 h-16 md:w-20 md:h-20 bg-teal-700/10 opacity-20 rounded-full place-items-center hover:shadow-lg transition-shadow z-50">
                        <Image alt='tech-stack' className="h-8 w-8 md:h-10 md:w-10 object-cover" src="https://img.icons8.com/color/144/java-coffee-cup-logo--v1.png" width={100} height={100} />
                    </div>

                    <div className="absolute hidden sm:grid -top-6 -left-12 lg:top-26 lg:left-84 w-16 h-16 md:w-16 md:h-16 bg-teal-700/10 opacity-20 rounded-full place-items-center hover:shadow-lg transition-shadow z-50">
                        <Image alt='tech-stack' className="h-8 w-8 md:h-8 md:w-8 object-cover" src="https://img.icons8.com/color/144/spring-logo.png" width={100} height={100} />
                    </div>

                    <div className="absolute hidden sm:grid -top-6 -left-12 lg:top-130 lg:-left-6 w-16 h-16 md:w-16 md:h-16 bg-teal-50 opacity-100 rounded-full place-items-center hover:scale-110 transition-shadow z-50">
                        <Image alt='tech-stack' className="h-8 w-8 md:h-8 md:w-8 object-cover" src="https://img.icons8.com/color/144/git.png" width={100} height={100} />
                    </div>
                </div>
            </div>
        </section>
    )
}
