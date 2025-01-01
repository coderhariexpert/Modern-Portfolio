import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { SiGo, SiGooglecloud } from "react-icons/si";
import { RiJavaLine } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { PiTreeStructureFill } from "react-icons/pi";
import { FaDatabase } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { SiJirasoftware } from "react-icons/si";

const certifications = [
  { title: 'AWS Cloud Practitioner', date: 'Jan 2025', description: 'Learnt About Fundamentals of Cloud Computing', icon: <FaAws /> },
  { title: 'Programming using Java', date: 'Dec 2024', description: 'Learnt About Basic Java Programming', icon: <RiJavaLine /> },
  { title: 'Software Engineering Concepts', date: 'Dec 2024', description: 'Learned about software development concepts.', icon: <SiJirasoftware /> },
  { title: 'Data Structures and Algorithms using Java', date: 'Dec 2024', description: 'Learned about data structures and algorithms.', icon: <PiTreeStructureFill /> },
  { title: 'Database Management System Part - 1', date: 'Dec 2024', description: 'Learnt About Relational Databases', icon: <FaDatabase /> },
  { title: 'Database Management System Part - 2', date: 'Dec 2024', description: 'Learnt About Non-Relational Databases', icon: <DiMongodb /> },
  { title: 'Introduction to NoSQL databases', date: 'Dec 2024', description: 'Learnt About NoSQL Databases Mongodb', icon: <DiMongodb /> },
  { title: 'Google Cloud Fundamentals', date: 'Nov 2024', description: 'Learnt About Fundamentals of Cloud Computing', icon: <SiGooglecloud /> },
  { title: 'Social Network Analysis', date: 'Jan 2024', description: 'Learnt About Social Network Analysis', icon: <IoShareSocialSharp /> },
];

const Certification = () => {
  const timelineRef = useRef(null);
  const underlineRef = useRef(null);
  const headingRef = useRef(null);
  const [underlineWidth, setUnderlineWidth] = useState(0);

  useEffect(() => {
    // Adjust the underline width based on the heading's text length
    if (headingRef.current) {
      const width = 250;
      setUnderlineWidth(width); // Set the width of the underline to match the heading's width
    }

    const ctx = gsap.context(() => {
      // Animation for certification items
      gsap.fromTo(
        '.timeline-item',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.3, duration: 1, ease: 'power2.out' }
      );

      // Underline animation based on dynamic width
      gsap.fromTo(
        underlineRef.current,
        { width: '0%' },
        { width: `${underlineWidth}px`, duration: 1, ease: 'power2.out' }
      );
    }, timelineRef);

    return () => ctx.revert();
  }, [underlineWidth]); // Depend on underlineWidth to recalculate on window resize or when the text changes

  return (
    <div id="certification" ref={timelineRef} className="py-16 bg-gray-900 text-gray-300">
      <h2 ref={headingRef}  className="text-4xl font-bold text-center text-white mb-4 relative">
        Certifications
        {/* Underline with dynamic width */}
        <span
          ref={underlineRef}
          className="block h-1 bg-blue-500 mt-2 mx-auto"
          style={{ width: 'fit-content' }}
        ></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="timeline-item flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Circle with Icon */}
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mb-4 text-white text-lg">
              {cert.icon}
            </div>
            {/* Content */}
            <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
            <p className="text-gray-400 text-sm">{cert.date}</p>
            <p className="text-gray-300 mt-2">{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
