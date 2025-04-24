import React from 'react'
import Image from 'next/image'
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="text-gray-600">
      <div className="container px-10 py-8 flex items-center justify-between sm:flex-row flex-col">
        <Image src='/Footer.jpg' alt='Logo' height={100} width={100} className='w-[45] ml-5 p-1 rounded-full'></Image>
        <p className="text-sm mt-2 ml-2 md:mt-0">Made with
          <span className="animate-pulse"> ❤️ </span>
          by
          <span className="text-teal-700"> Sakshi Shetty</span></p>
        <span className="flex sm:ml-auto sm:mt-0 mt-4 gap-4 justify-center sm:justify-start">
          <a href="https://www.linkedin.com/in/shetty-sakshi" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-teal-900 transition duration-300" />
          </a>
          <a href="https://github.com/sakshishetty632" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-teal-900 transition duration-300" />
          </a>
        </span>
      </div>
    </footer>
  )
}
