"use client";
import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const handleReadMore = (service) => {
        setSelectedService(service);
    };

    const handleClose = () => {
        setSelectedService(null);
    };

    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(" ") + "...";
    };

    const services = [
        {
            title: 'Design',
            description: 'As a designer, I specialize in creating visually appealing and user-friendly designs. Whether you need a brand new website layout, UI/UX improvements, or custom graphics, I can help bring your ideas to life.',
            servicesList: [
                'Website design',
                'User interface (UI) design',
                'User experience (UX) design',
                'Logo and branding design'
            ]
        },
        {
            title: 'Front-End Development',
            description: 'I excel in front-end development, ensuring that your website not only looks great but also functions seamlessly across all devices and browsers. From responsive design to interactive elements, I implement the latest technologies to enhance user experience.',
            servicesList: [
                'HTML5, CSS3, JavaScript',
                'Responsive web design',
                'Front-end frameworks (e.g., Bootstrap, Tailwind CSS)',
                'Cross-browser compatibility'
            ]
        },
        {
            title: 'Back-End Development',
            description: 'As a back-end developer, I specialize in building robust server-side applications and databases. I create scalable solutions that handle complex logic and ensure your website or web application operates efficiently.',
            servicesList: [
                'Server-side programming (e.g., PHP, Python, Node.js)',
                'Database design and management (e.g., MySQL, PostgreSQL, MongoDB)',
                'API integration and development',
                'Content management systems (CMS) customization'
            ]
        },
        {
            title: 'SEO (Search Engine Optimization)',
            description: 'I offer SEO services to help your website rank higher in search engine results, driving organic traffic and increasing visibility. From keyword research to on-page optimization and SEO audits, I optimize your site for maximum performance.',
            servicesList: [
                'Keyword analysis and strategy',
                'On-page SEO (meta tags, content optimization)',
                'Off-page SEO (backlink building, local SEO)',
                'SEO audits and reporting'
            ]
        },
        {
            title: 'Database Expertise',
            description: 'As a database expert, I design and manage databases to store, organize, and retrieve your data efficiently. Whether you need a relational database for structured data or a NoSQL database for flexibility, I provide tailored solutions to meet your needs.',
            servicesList: [
                'Database design and architecture',
                'Database optimization and tuning',
                'Data migration and integration',
                'Data security and backup solutions'
            ]
        }
    ];

    return (
        <>
            {/* Services page */}
            <div className="">
                <Head>
                    <title>My Services</title>
                    <meta name="description" content="Services offered by Designer and Developer" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <h1 className="text-2xl font-bold p-4 text-center">Services</h1>
                <div className="h-[1px] w-full bg-white"></div>

                <main className="flex justify-center items-center  gap-5 bg-slate-800 flex-wrap w-full  p-4 ">
                    {/* Mapping through each service */}
                    {services.map((service, index) => (
                        <motion.div key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + 0.2 }}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(255, 255, 255, 0.8)",
                                color: "#333",
                                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                                transition: { duration: 0.3 }
                            }}

                            className="shadow-md bg-slate-950 w-full md:w-[25%] md:h-[300px] h-auto rounded-lg p-6 mb-6">
                            <h2 className="text-xl w-full h-16 text-center  font-bold mb-4">{service.title}</h2>
                            <p className="mb-6 h-28  text-center  ">
                                {truncateText(service.description, 20)}
                            </p>
                            <div className="flex justify-center items-center ">
                                <button
                                    onClick={() => handleReadMore(service)}
                                    className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'         
                                    >
                                    Read More
                                </button>

                            </div>
                        </motion.div>
                    ))}
                </main>

                {/* Modal for selected service */}
                {selectedService && (
                    <div className="fixed inset-0 flex justify-center items-center z-20 bg-gray-800 bg-opacity-70">
                        <div className="card  p-6 rounded-lg shadow-lg w-full max-w-lg mx-4">
                            <div className="flex justify-end">
                                <button
                                    onClick={handleClose}
                                    className="text-gray-400 hover:text-gray-600"
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
                            <h2 className="text-2xl font-bold mb-4">{selectedService.title}</h2>
                            <p className="mb-4">{selectedService.description}</p>
                            <ul className="list-disc list-inside mb-4">
                                {selectedService.servicesList.map((item, index) => (
                                    <li key={index} className="mb-2">{item}</li>
                                ))}
                            </ul>
                            <button
                                onClick={handleClose}
                                className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'         
                                >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div className="h-[1px] w-full bg-white"></div>
        </>
    );
};

export default Services;
