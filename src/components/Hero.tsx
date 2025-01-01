import React from "react";
import { motion } from "framer-motion";
import IntroText from "./IntroText";
import BackgroundEffects from "./BackgroundEffects";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center justify-between">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12">
          {/* Left Side Text */}
          <IntroText />
          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[300px] w-[300px] rounded-full overflow-hidden border-8 border-white">
              {/* Custom SVG Behind the Profile Image */}
              <svg
                className="absolute inset-0 w-full h-full z-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                fill="none"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="white"
                  strokeWidth="2"
                  fill="transparent"
                />
                <path
                  d="M50 10 Q70 30, 50 50 Q30 30, 50 10"
                  stroke="white"
                  strokeWidth="2"
                  fill="transparent"
                />
              </svg>
              {/* Profile Image */}
              <img
                src="/assets/profile.jpg"
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover shadow-2xl z-10"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 z-20"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <BackgroundEffects />
    </section>
  );
};

export default Hero;
