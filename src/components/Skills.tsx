import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaReact, FaNodeJs 
} from 'react-icons/fa';
import { 
  SiMysql, SiOracle, SiMongodb, SiCplusplus, SiC, SiTypescript, SiNextdotjs, SiPostman, SiGooglecloud 
} from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

// Skills data
const skills = [
  { icon: <FaHtml5 className="w-8 h-8 text-orange-500" />, name: 'HTML' },
  { icon: <FaCss3Alt className="w-8 h-8 text-blue-500" />, name: 'CSS' },
  { icon: <FaJs className="w-8 h-8 text-yellow-500" />, name: 'JavaScript' },
  { icon: <FaPython className="w-8 h-8 text-blue-400" />, name: 'Python' },
  { icon: <FaJava className="w-8 h-8 text-red-600" />, name: 'Java' },
  { icon: <SiCplusplus className="w-8 h-8 text-blue-600" />, name: 'C++' },
  { icon: <SiC className="w-8 h-8 text-gray-500" />, name: 'C' },
  { icon: <SiTypescript className="w-8 h-8 text-blue-700" />, name: 'TypeScript' },
  { icon: <SiMysql className="w-8 h-8 text-blue-600" />, name: 'MySQL' },
  { icon: <SiOracle className="w-8 h-8 text-red-600" />, name: 'Oracle' },
  { icon: <SiMongodb className="w-8 h-8 text-green-500" />, name: 'MongoDB' },
  { icon: <TbBrain className="w-8 h-8 text-yellow-500" />, name: 'Problem Solving' },
  { icon: <FaReact className="w-8 h-8 text-blue-400" />, name: 'React' },
  { icon: <SiNextdotjs className="w-8 h-8 text-black dark:text-white" />, name: 'Next.js' },
  { icon: <SiPostman className="w-8 h-8 text-orange-400" />, name: 'Postman API' },
  { icon: <FaNodeJs className="w-8 h-8 text-green-500" />, name: 'Node.js' },
  { icon: <SiExpress className="w-8 h-8 text-gray-500" />, name: 'Express' },
  { icon: <RiTailwindCssFill className="w-8 h-8 text-gray-500" />, name: 'Tailwindcss' },
  { icon: <SiGooglecloud className="w-8 h-8 text-blue-500" />, name: 'Google Cloud' },  // Added Google Cloud icon
];

const Skills = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (el) {
      const totalWidth = Array.from(el.children).reduce(
        (acc, child) => acc + (child as HTMLElement).offsetWidth + 16, // 16px gap
        0
      );
  
      gsap.fromTo(
        el,
        { x: "100%" }, // Start off-screen to the right
        {
          x: `-${totalWidth}px`, // Move to the left until the last skill exits
          duration: 16, // Adjust duration as needed
          repeat: -1, // Loop indefinitely
          ease: "linear", // Smooth continuous movement
        }
      );
    }
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white text-center mb-16 relative"
        >
          <span className="relative inline-block">
            Skills
            <motion.svg
              initial={{ strokeDasharray: 250, strokeDashoffset: 250 }}
              whileInView={{ strokeDashoffset: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute left-0 -bottom-2 w-full h-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 120 10"
              fill="none"
            >
              <path
                d="M10 5 L110 5"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </motion.svg>
          </span>
        </motion.h2>
        {/* Marquee */}
        <div className="relative w-full overflow-hidden">
          <div 
            ref={marqueeRef} 
            className="flex space-x-4"
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 p-6 bg-gray-900 rounded-xl hover:bg-gray-700 transition-colors"
              >
                <div>{skill.icon}</div>
                <span className="text-white font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
