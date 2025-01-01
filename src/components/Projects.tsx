import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Omnifood Website",
    description:
      "The Omnifood frontend project helped learn HTML, CSS, and basic JavaScript to create a responsive, interactive food delivery webpage.",
    image: "/assets/omnifood.png",
    tags: ["HTML", "CSS", "Javascript"],
    liveDemoUrl: "https://coderhariexpert.github.io/OmniFood-Project/",
    sourceCodeUrl: "https://github.com/coderhariexpert/OmniFood-Project",
  },
  {
    title: "Gradient BackGround Calculator",
    description:
      "The Gradient Background Calculator project helped learn HTML, CSS, and basic JavaScript With Gradient Background",
    image: "/assets/calc.png",
    tags: ["HTML", "CSS", "Javascript"],
    liveDemoUrl: "https://coderhariexpert.github.io/Gradient-Calc/",
    sourceCodeUrl: "https://github.com/coderhariexpert/Gradient-Calc",
  },
  {
    title: "Basic Crud Web App",
    description: "Helps To Learn MERN Stack And Dark-Light Theme Toggle",
    image: "/assets/crud.png",
    tags: ["React", "Mongodb", "Tailwind"],
    liveDemoUrl: "https://basic-crud-immy.onrender.com",
    sourceCodeUrl: "https://github.com/coderhariexpert/CRUDAPP",
  },
  {
    title: "Random Password Generator",
    description:
      "Helps To Learn About Javascript And CSS With Clipboard Button",
    image: "/assets/rdp.png",
    tags: ["HTML", "CSS", "Javascript"],
    liveDemoUrl: "https://coderhariexpert.github.io/Random-Password-Generator/",
    sourceCodeUrl:
      "https://github.com/coderhariexpert/Random-Password-Generator",
  },
  {
    title: "Todo App",
    description: "Helps To Learn About Javascript With LocalStorage API",
    image: "/assets/todo.png",
    tags: ["HTML", "CSS", "Javascript", "Localstorage API"],
    liveDemoUrl: "https://todo-app-lemon-eight.vercel.app/",
    sourceCodeUrl: "https://github.com/coderhariexpert/Todo-App",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          {/* Underline with fixed width */}
          <motion.div
            className="h-1 bg-blue-500 mt-2 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: "160px" }} // Set the fixed width here
            transition={{ duration: 1 }}
            style={{ maxWidth: "100%" }} // Ensures it doesn't stretch beyond 160px
          />
          <p className="text-gray-400">Some of my recent work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
