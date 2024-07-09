'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { useState , useRef } from 'react';
const skills = [
    { name: 'HTML5', icon: '/html5.png', description: 'Markup language for structuring web content.', details: 'HTML5 is the latest evolution of the standard that defines HTML. It represents two different concepts: It is a new version of the language HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications.' },
    { name: 'CSS3', icon: '/css.png', description: 'Style sheet language for designing web pages.', details: 'CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.' },
    { name: 'JavaScript', icon: '/javascript-logo.png', description: 'Programming language for dynamic web content.', details: 'JavaScript is a versatile language used to create interactive and dynamic content on web pages. It can be used for everything from simple scripts to complex web applications and server-side programming with Node.js.' },
    { name: 'Node.js', icon: '/nodejs.png', description: 'JavaScript runtime built on Chrome\'s V8 engine.', details: 'Node.js is a runtime environment that allows you to execute JavaScript code on the server side. It is built on Chrome\'s V8 JavaScript engine and is known for its performance and scalability.' },
    { name: 'MongoDB', icon: '/mongodb.png', description: 'NoSQL database for scalable web applications.', details: 'MongoDB is a NoSQL database designed for modern application development. It allows you to store data in flexible, JSON-like documents, making it easy to adapt to changing data requirements.' },
    { name: 'React', icon: '/reactlogo.jfif', description: 'JavaScript library for building user interfaces.', details: 'React is a popular JavaScript library for building user interfaces, particularly single-page applications where data changes over time. It allows developers to create large web applications that can update and render efficiently in response to data changes.' },
    { name: 'Next.js', icon: '/nextjs.png', description: ' For server-side rendering and static sites.', details: 'Next.js is a React framework that enables functionality such as server-side rendering and static site generation. It is designed to be easy to use and supports many features out of the box.' },
    { name: 'Tailwind CSS', icon: '/tailwind css.jfif', description: 'Utility-first CSS framework for rapid UI development.', details: 'Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without any annoying opinionated styles you have to fight to override.' },
  ];

const skill = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);
    const skillsRef = useRef(null);
    const [startIndex, setStartIndex] = useState(0);
  
  
    
    const handleReadMore = (skill) => {
      setSelectedSkill(skill);
    };
  
    const handleClose = () => {
      setSelectedSkill(null);
    };
  
    const scrollLeft = () => {
      if (skillsRef.current && startIndex > 0) {
        setStartIndex(startIndex - 1);
      }
    };
  
    const scrollRight = () => {
      if (skillsRef.current && startIndex < skills.length - 4) {
        setStartIndex(startIndex + 1);
      }
    };
  
  return (
   <>
   
   {/*  the skill silder is start  */}

<div className="">
    <h1 className="text-2xl text-center py-5 font-bold">My Web Development Skills</h1>
    <div className="h-[1px] w-full  bg-white"></div>

  <div className="flex flex-col justify-center items-center mx-auto bg-slate-800  text-center">

    <div className="relative flex justify-center w-full md:w-[80vw]   items-center">
      {startIndex > 0 && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      <div ref={skillsRef} className="flex gap-6 overflow-x-auto px-4 py-5 md:no-scrollbar md:px-10 hide-scrollbar">
        {skills.slice(startIndex, startIndex + 4).map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="w-[65%] md:w-[200px]  card  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="w-full flex justify-center items-center h-44 px-2 py-4 md:py-0">
              <img
                className="rounded-lg w-full object-cover h-32 md:h-40 object-center"
                src={skill.icon}
                alt={skill.name}
              />
            </div>
            <div className="p-4">
          
                <h5 className="mb-2 text-lg font-bold tracking-tight dark:text-white">{skill.name}</h5>
           
              <p className="text-sm mb-2 dark:text-gray-400">{skill.description}</p>
              <button
                onClick={() => handleReadMore(skill)}
                className='text-white  flex justify-center items-center gap-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'         
                >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {startIndex < skills.length - 4 && (
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </div>
  </div>
</div>

<style jsx>{`
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`}</style>


      {selectedSkill && (
        <div className="fixed inset-0 flex justify-center items-center z-20  bg-opacity-70">
          <div className="card dark:bg-gray-800 p-0 md:p-6 rounded-lg shadow-lg h-[70vh] md:h-[98vh] max-w-lg mx-4 md:mx-0">
            <div className="flex justify-end">
              <button
                onClick={handleClose}
                className="cursor-pointer md:block hidden dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-center">
              <h2 className="md:text-2xl text-sm font-bold mb-4 dark:text-white">{selectedSkill.name}</h2>
              <div className="flex justify-center">
                <img
                  className="md:w-1/2 md:h-48 h-24 object-cover mb-4 rounded-lg"
                  src={selectedSkill.icon}
                  alt={selectedSkill.name}
                />
              </div>
              <p className="text-sm md:text-pretty dark:text-gray-300">{selectedSkill.details}</p>
              <button
                onClick={handleClose}
                className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="h-[1px] w-full  bg-white"></div>
   </>
  )
}

export default skill
