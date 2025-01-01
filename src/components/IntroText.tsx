import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { scroller } from "react-scroll"; // Import scroller for programmatic scrolling

gsap.registerPlugin(TextPlugin);

const roles = [
  "Full Stack Developer",
  "Problem Solver",
  "Student",
  "Freelancer",
  "Ethical Hacker",
  "Pentester",
  "CyberSecurity Enthusiast",
];

const IntroText = () => {
  const roleRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Animate roles
    const el = roleRef.current;
    if (el) {
      let index = 0;
      const updateText = () => {
        gsap.to(el, {
          duration: 1.5,
          text: {
            value: roles[index],
          },
          ease: "power2.inOut",
          onComplete: () => {
            index = (index + 1) % roles.length;
            setTimeout(updateText, 1000); // Delay before showing the next role
          },
        });
      };
      updateText();
    }

    // Animate name
    const nameEl = nameRef.current;
    if (nameEl) {
      gsap.fromTo(
        nameEl,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
      );
    }

    // Animate the button using GSAP
    const buttonEl = buttonRef.current;
    if (buttonEl) {
      gsap.fromTo(
        buttonEl,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out", delay: 0.5 }
      );
    }
  }, []);

  const handleScrollToProjects = () => {
    scroller.scrollTo("projects", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 ref={nameRef} className="text-blue-500 font-medium mb-2">
          Hi, I'm Hari Vigneshwaran
        </h2>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
          <span
            ref={roleRef}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Full Stack Developer
          </span>
        </h1>
        <p className="text-xl text-gray-300 leading-10">
          <span className="ml-20">I'm</span> currently a student actively exploring opportunities as a Software
          Development Engineer (SDE). With a strong foundation in web
          development and problem-solving, I specialize in creating scalable,
          user-friendly applications while continuously honing my skills in data
          structures and algorithms. Let's build something amazing together!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <button
          ref={buttonRef}
          onClick={handleScrollToProjects} // Trigger scroll on click
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all px-8 py-4 rounded-full flex items-center space-x-2 group"
        >
          <span>View Projects</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
};

export default IntroText;
