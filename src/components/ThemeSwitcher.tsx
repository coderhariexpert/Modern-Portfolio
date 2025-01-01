import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeSwitcherProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeSwitcher = ({ isDark, toggleTheme }: ThemeSwitcherProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-800 dark:bg-white"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-gray-900" />
      ) : (
        <Moon className="w-6 h-6 text-white" />
      )}
    </motion.button>
  );
};

export default ThemeSwitcher;