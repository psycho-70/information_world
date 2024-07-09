import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5'; // You can use any close icon, here I use react-icons for demonstration


const Section = () => {
    const fullText = ["Furqan Khattak", "Web Developer", "Front End Developer"];
    const items = ['html', 'css', 'javascript', 'node.js', 'tailwindcss', 'express.js', 'next.js', 'react'];
    
    const [displayedText, setDisplayedText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [isRemovingText, setIsRemovingText] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    const [displayedItem, setDisplayedItem] = useState('');
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const [isRemovingItem, setIsRemovingItem] = useState(false);

    const [curser, setCurser] = useState('|');

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/Furqanullahcv.pdf';  // Ensure the PDF is in the public folder
        link.download = 'Furqanullahcv.pdf';
        link.click();
    };

    useEffect(() => {
        let textInterval;
        if (isRemovingText) {
            textInterval = setInterval(() => {
                setDisplayedText((prev) => {
                    if (prev.length > 0) {
                        return prev.slice(0, -1);
                    } else {
                        setIsRemovingText(false);
                        setTextIndex((prevIndex) => (prevIndex + 1) % fullText.length);
                        return '';
                    }
                });
            }, 100);
        } else {
            textInterval = setInterval(() => {
                setDisplayedText((prev) => {
                    if (prev.length < fullText[textIndex].length) {
                        return fullText[textIndex].slice(0, prev.length + 1);
                    } else {
                        setTimeout(() => setIsRemovingText(true), 1000);
                        clearInterval(textInterval);
                    }
                    return prev;
                });
            }, 100);
        }
        return () => clearInterval(textInterval);
    }, [textIndex, isRemovingText]);

    useEffect(() => {
        let itemInterval;
        if (isRemovingItem) {
            itemInterval = setInterval(() => {
                setDisplayedItem((prev) => {
                    if (prev.length > 0) {
                        return prev.slice(0, -1);
                    } else {
                        setIsRemovingItem(false);
                        setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
                        return '';
                    }
                });
            }, 100);
        } else {
            itemInterval = setInterval(() => {
                setDisplayedItem((prev) => {
                    if (prev.length < items[currentItemIndex].length) {
                        return items[currentItemIndex].slice(0, prev.length + 1);
                    } else {
                        setTimeout(() => setIsRemovingItem(true), 1000);
                        clearInterval(itemInterval);
                    }
                    return prev;
                });
            }, 150);
        }
        return () => clearInterval(itemInterval);
    }, [currentItemIndex, isRemovingItem]);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="h-[1px] w-full mt-16 bg-white"></div>
            <section className='md:flex w-full justify-evenly items-center p-5 mx-auto min-h-96 bg-slate-800'>
                <div className='text-center md:w-[50%] p-1 flex flex-col gap-5'>
                    <h1 className='md:text-3xl text-2xl text-start font-bold'>
                        I am {displayedText && displayedText.split(' ').map((word, idx) => (
                            <span key={idx}>
                                <span className='text-red-500 font-bold'> {word} </span>
                            </span>
                        ))}
                    </h1>
                    <h2 className='text-start font-bold text-xl'>
                    Expertise {' '}
                        <span className='text-red-500 font-bold'>
                            {displayedItem}
                            {curser}
                        </span>
                    </h2>
                    <p className='text-start whitespace-break-spaces leading-relaxed'>
                    Hello! I'm Furqan, a passionate and dedicated website developer with a Bachelor's degree in Software Engineering. With a strong foundation in software engineering principles and hands-on experience in web development, I specialize in creating dynamic and responsive websites that deliver exceptional user experiences.
                    </p>
                    <div className='flex gap-4'>
                        <button
                            type="button"
                            className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
                            onClick={handleDownloadCV}
                        >
                            Download CV
                        </button>
                        <Link href="/blog">
                            <button
                                type="button"
                                className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
                            >
                                Explore Blogs
                            </button>
                        </Link>
                    </div>
                </div>

                <div>
            <motion.div
                className="relative overflow-hidden mt-5 md:mt-0"
                whileHover={{ translateX: 10 }}
                transition={{ duration: 0.2 }}
                onClick={handleOpen}
            >
                <img
                    className=""
                    src="/profilepic-in-cv.jpg"
                    width={250}
                    height={250}
                    alt="Profile"
                />
            </motion.div>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative">
                        <motion.img
                            className=""
                            src="/profilepic-in-cv.jpg"
                            width={400}
                            height={400}
                            alt="Profile"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <button
                            onClick={handleClose}
                            className="absolute top-0 right-0 m-2 p-2  rounded-full"
                        >
                            <IoClose size={24} />
                        </button>
                    </div>
                </div>
            )}
        </div>
            </section>
            <div className="h-[1px] w-full bg-white"></div>
        </>
    );
}

export default Section;
