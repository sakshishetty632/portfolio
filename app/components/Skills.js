import Image from 'next/image'
import React, { useState } from 'react'

const skills = [
    { name: 'Java', icon: 'https://img.icons8.com/color/144/java-coffee-cup-logo--v1.png', category: 'Backend' },
    { name: 'C', icon: 'https://img.icons8.com/color/144/c-programming.png', category: 'Backend' },
    { name: 'C++', icon: 'https://img.icons8.com/color/144/c-plus-plus-logo.png', category: 'Backend' },
    { name: 'Python', icon: 'https://img.icons8.com/color/144/python--v1.png', category: 'Backend' },
    { name: 'Springboot', icon: 'https://img.icons8.com/color/144/spring-logo.png', category: 'Backend' },
    { name: 'MySQL', icon: 'https://img.icons8.com/fluency/144/mysql-logo.png', category: 'Backend' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/144/mongodb.png', category: 'Backend' },

    { name: 'HTML', icon: 'https://img.icons8.com/color/144/html-5--v1.png', category: 'Frontend' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/144/css3.png', category: 'Frontend' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/144/javascript--v1.png', category: 'Frontend' },
    { name: 'Angular', icon: 'https://img.icons8.com/color/144/angularjs.png', category: 'Frontend' },
    { name: 'TailwindCSS', icon: 'https://img.icons8.com/fluency/144/tailwind_css.png', category: 'Frontend' },
    { name: 'Bootstrap', icon: 'https://img.icons8.com/color/144/bootstrap.png', category: 'Frontend' },


    { name: 'Git', icon: 'https://img.icons8.com/color/144/git.png', category: 'Others' },
    { name: 'Github', icon: 'https://img.icons8.com/glyph-neue/144/github.png', category: 'Others' },
    { name: 'Googling', icon: 'https://img.icons8.com/color/144/google-logo.png', category: 'Others' },
    { name: 'ChatGPT', icon: 'https://img.icons8.com/ios-filled/100/26e07f/chatgpt.png', category: 'Others' },
    { name: 'Postman', icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/144/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png', category: 'Others' },
    { name: 'Vercel', icon: 'https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png', category: 'Others' },
    { name: 'Render', icon: 'https://img.icons8.com/fluency/144/cloud.png', category: 'Others' }
];



export const Skills = () => {

    const categories = Array.from(new Set(skills.map((s) => s.category)))
    const [category, setCategory] = useState(categories[0])

    return (
        <div id='skills' className="min-h-screen mt-12 md:mt-0 mx-4 md:mx-0 xl:my-20 2xl:my-0 pt-8 pb-28 bg-teal-700/7 text-teal-700">
            <h2 className="text-3xl sm:text-6xl  text-center mt-18">Skills</h2>

            <div className="md:w-1/2 overflow-x-auto scroll-hide lg:w-1/3 mx-auto mt-8 bg-white dark:bg-grey-800 p-2 flex justify-between items-center gap-3 rounded-md">
                {categories.map((c, i) => (
                    <span key={i} onClick={() => setCategory(c)} className={`p-1.5 md:p-2 text-sm md:text-base w-full text-center cursor-pointer rounded-md ${category.toLowerCase() === c.toLowerCase() ? "bg-teal-900 text-white" : "bg-white dark:bg-grey-800 hover:bg-teal-700/10 hover:dark:bg-grey-900"} transition-all capitalize`}>{c}</span>
                ))}
            </div>
            
            {/* Skills */}
            <div className="lg:w-3/4 2xl:w-3/5 my-8 mx-auto md:px-12 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-8">
                {skills.filter((s) => s.category.toLowerCase() === category.toLowerCase()).map((skill, index) => (
                    <div key={index} className="flex flex-col justify-center items-center gap-2">
                        <div title={skill.name}
                            className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-white flex items-center justify-center transform transition-all hover:scale-105">
                            <Image
                                alt={skill.name}
                                width={100}
                                height={100}
                                className="h-12 w-12 md:h-14 md:w-14 object-contain"
                                src={skill.icon}
                            />
                        </div>
                        <p className="text-sm md:text-base">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

