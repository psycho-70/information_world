'use client'
import { motion } from "framer-motion";
import Section from "@/components/Section";
import { useState, useRef } from "react";
import Services from "@/components/services";
import TeamMemberCard from "@/components/myteam";
import Skill from "@/components/skill";
import Comments from "@/components/comments";
export default function Home() {

  const About = [
    "1. Highly skilled and dedicated Web Developer with comprehensive experience in both front-end and back-end development. Proficient in crafting dynamic and responsive web applications.",
    "2. My expertise spans from designing visually appealing interfaces to developing robust back-end architectures, ensuring a cohesive and high-performing product.",
    "3. Collaborating effectively with cross-functional teams, translating client requirements into technical specifications, and delivering high-quality results on time.",
    "4. My ability to adapt to new technologies quickly and my commitment to continuous learning keep me at the forefront of industry trends.",
    "5. I am seeking an opportunity to bring my blend of front-end and back-end development skills to a forward-thinking organization. My goal is to contribute to innovative web projects, driving user engagement and operational efficiency through well-designed web applications.",
    
  ];



  
  return (
    <>
      <Section />
        <h1
        className="text-2xl text-center py-5 font-bold"
        >
          About Me
        </h1>
        <div className="h-[1px] w-full  bg-white"></div>

      <motion.div
        className=" bg-slate-800 mx-auto px-3 py-5"
       
      >

        <ul className="flex flex-wrap  gap-3  justify-center items-center md:w-[90vw]">
      {About.map((item, index) => (
        <motion.li
          key={index}
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
          className="p-3 md:w-[25vw] h-[200] m-2 md:h-[250px] bg-slate-950 text-center flex flex-wrap space-x-5  rounded-md"
        >
          {item}
        </motion.li>
      ))}
    </ul>
      </motion.div>
      <div className="h-[1px] w-full  bg-white"></div>

{/* skills page */}
<Skill />
{/* services page  */}
<Services />

{/* my team page */}
<TeamMemberCard />

{/* comments section */}
<Comments />
    </>
  );
}
