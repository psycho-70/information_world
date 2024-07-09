"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";
import { useSession, signOut } from "next-auth/react";
import { IoMdClose } from "react-icons/io";
// import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();
  // const pathname = usePathname()
  return (
    <>
      <nav className="flex  justify-between w-full z-10 items-center p-3 bg-slate-800  text-white ">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.1, translateX: "20px" }}
            whileTap={{ scale: 0.9 }}
            className="font-bold  items-center uppercase text-lg cursor-pointer"
          >
            <span className="flex items-center w-1/6 md:text-xl text-sm gap-2">
              <img src="/code1.gif" width={30} height={25} alt="the logo gif " />
              Information <span className="text-red-500">world</span></span>

          </motion.div>
        </Link >

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden  text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div
          className={`${isMenuOpen ? "block bg-slate-800 fixed top-0 text-center" : "hidden"
            } md:flex flex-col md:flex-row md:items-center   md:bg-transparent absolute md:static top-10 right-0  md:w-auto`}
        >
          {/* Close Button */}
          {isMenuOpen && (
            <button
              className="md:hidden text-white focus:outline-none self-end p-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <IoMdClose />

            </button>
          )}
          <ul className="flex flex-col md:flex-row justify-center  items-center  gap-5  text-[17px] m-2">
            <motion.li
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <Link href="/">
                <span className="block">Home</span>
              </Link >
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <Link href="/contact">
                <span className="block">Contact</span>
              </Link >
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <Link href="/Notes">
                <span className="block">Notes</span>
              </Link >
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <Link href="/blog">
                <span className="block">Blog</span>
              </Link >
            </motion.li>
            {session ? (
              <motion.li
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer flex items-center"
              >
                <img
                  src={session?.user?.image ? session.user.image : "/avatar-man.gif"}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="capitalize font-bold">{session.user.name}</span>
                <button
                  onClick={() => signOut()}
                  className="ml-2 p-1 bg-red-500 rounded text-white"
                >
                  Sign out
                </button>
              </motion.li>
            ) : (
              <motion.li
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer mr-3"
              >
                <Link href="/Login">
                  <span className="block">Sign up</span>
                </Link >
              </motion.li>
            )}
          </ul>
        </div>
      </nav>
      <div className="h-[1px] w-full bg-white"></div>
    </>
  );
};

export default Navbar;
