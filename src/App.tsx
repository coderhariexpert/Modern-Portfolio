import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeSwitcher from './components/ThemeSwitcher';
import { useTheme } from './hooks/useTheme';
import Certification from './components/certification';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
        <Hero />
        <Skills />
        <Education />
        <Projects />
        <Certification />
        <Contact />
      </div>
    </div>
  );
}

export default App;