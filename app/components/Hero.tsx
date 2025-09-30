"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi"; // Using react-icons for better icons

export default function Hero() {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // State to track mouse position for the spotlight effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Effect to set initial dark mode based on system preference
  useEffect(() => {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);
  
  // Effect to track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const isDark = !prev;
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return isDark;
    });
  };

  // Framer Motion variants for staggered animations
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-white dark:bg-black transition-colors duration-500"
    >
      {/* Interactive Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.h1
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-black text-gray-800 dark:text-gray-200 max-w-4xl"
        >
          {"Hi, I'm ".split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char}
            </motion.span>
          ))}
          <span className="inline-block">
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300 bg-clip-text text-transparent animate-gradient-x">
              {"Naveen Kumar".split("").map((char, index) => (
                <motion.span key={index} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl"
        >
          Developer | Designer | Problem Solver — Turning ideas into reality with
          code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-5"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgb(34 197 94)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white font-semibold px-8 py-3 rounded-md shadow-lg"
          >
            View My Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-gray-700 dark:border-gray-300 text-gray-800 dark:text-gray-200 font-semibold px-8 py-3 rounded-md"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>

      {/* Animated Dark Mode Toggle Button */}
      <div className="absolute top-6 right-6">
        <motion.button
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9, rotate: -15 }}
          className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full shadow-md"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={darkMode ? "moon" : "sun"}
              initial={{ y: -20, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 20, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              {darkMode ? (
                <FiSun className="text-yellow-400" />
              ) : (
                <FiMoon className="text-gray-700" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>
    </section>
  );
}