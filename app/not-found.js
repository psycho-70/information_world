// pages/404.js
"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center ">
      <motion.h1
        className="text-6xl font-bold text-red-500"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.p
        className="mt-4 text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Link href="/">
        <button type="button" class="text-white bg-gradient-to-br
         from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 
         focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 
         font-medium rounded-lg text-sm px-5 py-2.5 text-center  me-2 mb-2">Go back to Home</button>

          
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
