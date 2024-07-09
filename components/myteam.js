import { useState, useRef } from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'M.Asim',
    position: 'Visual Designer',
    image: '/team/aftab.jpg',
    expertise: 'Expert in Adobe Photoshop, Illustrator, and UI/UX design principles.',
  },
  {
    name: 'Alyan Khattak',
    position: 'Software Engineer',
    image: '/Image/profile (2).jpg',
    expertise: 'Proficient in JavaScript, React, Node.js, and cloud computing.',
  },
  {
    name: 'Nasir Khan',
    position: 'Project Manager',
    image: '/Image/profile (3).jpg',
    expertise: 'Skilled in project management, Agile methodologies, and team leadership.',
  },
  {
    name: 'Salman Khan',
    position: 'Database Administrator',
    image: '/Image/profile (4).jpg',
    expertise: 'Experienced in SQL, NoSQL databases, and database performance optimization.',
  },
  {
    name: 'Aftab khan',
    position: 'UX Designer',
    image: '/Image/profile (5).jpg',
    expertise: 'Specialized in user research, wireframing, prototyping, and usability testing.',
  },
];

const TeamMemberCard = () => {
  const containerRef = useRef(null);
  const [visibleExpertiseIndex, setVisibleExpertiseIndex] = useState(null);

  const toggleExpertise = (index) => {
    setVisibleExpertiseIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <>
    <h1 className='text-2xl p-4 font-bold text-center'>Our Team</h1>
    <div className="h-[1px] w-full mt-3 bg-white"></div>
    <div className="relative flex items-center justify-center  bg-slate-800 w-full">
      <button
        onClick={scrollLeft}
        className="absolute md:left-12 left-0 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800 z-10"
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
      <div
        ref={containerRef}
        className="flex overflow-x-auto no-scrollbar   items-center w-full space-x-4 px-4"
        style={{ width: '80%' }}
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex card flex-col flex-shrink-0 w-64 m-4  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex flex-col items-center pb-10">
              <Image
                className="w-24 h-24 object-cover mb-3 rounded-full shadow-lg"
                src={member.image}
                alt={`${member.name} image`}
                width={96}
                height={96}
              />
              <h5 className="mb-1 text-xl font-medium  text-white dark:text-white">
                {member.name}
              </h5>
              <span className="text-sm text-white dark:text-gray-400">
                {member.position}
              </span>
              <div className="flex mt-4 space-x-2">
                <a
                  href={`mailto:furqanktk52@gmail.com`}
className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'         
       >
                  Message
                </a>
                <button
                  onClick={() => toggleExpertise(index)}
                  className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'         
                  >
                  Read More
                </button>
              </div>
              {visibleExpertiseIndex === index && (
                <div className="mt-4 p-4 text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
                  {member.expertise}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="absolute md:right-12 right-0 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800 z-10"
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
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
    <div className="h-[1px] w-full bg-white"></div>
    </>
  );
};

export default TeamMemberCard;
