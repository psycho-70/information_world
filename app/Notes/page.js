'use client'
import React from 'react';


const notesData = [
  {
    title: 'HTML5',
    description: 'Learn the basics of HTML5, the standard markup language for creating web pages.',
    imgSrc: '/html5.png',
    pdfSrc: '/pdf/HTML 5.pdf',
  },
  {
    title: 'CSS',
    description: 'Master CSS to style and layout web pages with precision and creativity.',
    imgSrc: '/css.png',
    pdfSrc: '/pdf/CSS 3.pdf',
  },
  {
    title: 'JavaScript',
    description: 'Understand the fundamentals of JavaScript for interactive web development.',
    imgSrc: '/JavaScript-logo.png',
    pdfSrc: '/pdf/Javascript.pdf',
  },
  {
    title: 'Hosting',
    description: 'Explore various hosting options and learn how to deploy websites.',
    imgSrc: '/host.jpg',
    pdfSrc: '/pdf/host.pdf',
  },
  {
    title: 'Ubuntu',
    description: 'Get familiar with Ubuntu, a popular open-source Linux operating system.',
    imgSrc: '/ubuntu-logo.webp',
    pdfSrc: '/path/to/ubuntu.pdf',
  },
  {
    title: 'Java',
    description: 'Dive into Java programming, a versatile language used for many applications.',
    imgSrc: '/java.webp',
    pdfSrc: '/path/to/java.pdf',
  },
  {
    title: 'React',
    description: 'Learn React, a powerful JavaScript library for building user interfaces.',
    imgSrc: '/reactlogo.jfif',
    pdfSrc: '/path/to/react.pdf',
  },
  {
    title: 'Next.js',
    description: 'Discover Next.js, a React framework for building fast and SEO-friendly apps.',
    imgSrc: '/nextjs.png',
    pdfSrc: '/pdf/nextjs.pdf',
  },
  {
    title: 'Node.js',
    description: 'Understand Node.js for server-side JavaScript and building scalable applications.',
    imgSrc: '/nodejs.png',
    pdfSrc: '/pdf/nodejs.pdf',
  },
  {
    title: 'Express.js',
    description: 'Learn Express.js, a minimal and flexible Node.js web application framework.',
    imgSrc: '/expressjs.webp',
    pdfSrc: '/pdf/expressjs.pdf',
  },
  {
    title: 'MongoDB',
    description: 'Get started with MongoDB, a NoSQL database for modern web applications.',
    imgSrc: '/mongodb.png',
    pdfSrc: '/pdf/mongodb.pdf',
  },
];

const NotesPage = () => {
  const handleDownload = (pdfSrc) => {
    const anchor = document.createElement('a');
    anchor.href = pdfSrc;
    anchor.download = pdfSrc.split('/').pop(); // Sets the filename for download
    anchor.target = '_blank';
    anchor.click();
  };

  const handleRead = (pdfSrc) => {
    window.open(pdfSrc, '_blank');
  };

  return (
    <>
      <h1 className="text-2xl p-4 font-bold text-center">Download Handwritten Notes</h1>
      <div className="bg-slate-800 text-white flex flex-wrap justify-center items-center">
        <div className="h-[1px] w-full bg-white"></div>
        {notesData.map((note, index) => (
          <div
            className="card border md:w-1/5 border-gray-200 rounded-lg m-4"
            key={index}
          >
            <div className="flex items-center h-36 justify-center">
              <img className="w-40 object-fill h-32" src={note.imgSrc} alt={`${note.title} logo`} />
            </div>
            <div className="p-3">
              <h5 className="mb-2 text-2xl h-8 text-center font-bold tracking-tight">{note.title}</h5>
              <p className="mb-3 h-[70px] text-center font-normal">{note.description}</p>
              <div className="flex space-x-2">
                <button
                  className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-1 text-center'
                  onClick={() => handleDownload(note.pdfSrc)}
                >
                  Download PDF
                </button>
                <button
                  className='text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-1 text-center'
                  onClick={() => handleRead(note.pdfSrc)}
                >
                  Read PDF
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-[1px] w-full bg-white"></div>

    </>
  );
};

export default NotesPage;
