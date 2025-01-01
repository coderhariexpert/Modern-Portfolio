import React from 'react';
import { motion } from 'framer-motion';
import TimelineItem from './TimelineItem';

const educationData = [
  {
    year: "2022-2026",
    degree: "Bachelor of Engineering",
    school: "Mepco Schlenk Engineering College",
    description: "Specialized in Problem Solving And Fundamental of Software Engineering" 
  },
  {
    year: "2017-2022",
    degree: "High School",
    school: "TMHNU.Mat.Hr.School",
    description: "Completed My High School"
  },
  {
    year: "2008-2016",
    degree: "Primary School",
    school: "AMHNU.Mat.Hr.School",
    description: "Completed My Primary School"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
            Education
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute bottom-[-4px] left-0 h-1 bg-blue-500"
            />
          </h2>
          <p className="text-gray-400">My academic journey and achievements</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/20" />
          {educationData.map((item, index) => (
            <TimelineItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
