import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  degree: string;
  school: string;
  description: string;
  index: number;
}

const TimelineItem = ({ year, degree, school, description, index }: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`flex items-center justify-between w-full mb-8 ${
        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
        <div className="p-6 bg-gray-900 rounded-lg shadow-xl">
          <span className="text-blue-500 font-semibold">{year}</span>
          <h3 className="text-xl font-bold text-white mt-2">{degree}</h3>
          <p className="text-white mt-1">{school}</p>
          <p className="text-gray-400 mt-2">{description}</p>
        </div>
      </div>
      <div className="w-2/12 flex justify-center">
        <div className="w-4 h-4 bg-blue-500 rounded-full" />
      </div>
      <div className="w-5/12" />
    </motion.div>
  );
};

export default TimelineItem;