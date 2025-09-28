"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-7xl font-extrabold mb-6 text-center max-w-4xl"
      >
        Hi, I'm <span className="text-pink-400">[Your Name]</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="text-xl md:text-2xl text-center max-w-3xl"
      >
        Developer | Designer | Problem Solver — Turning ideas into reality with
        code
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.7 }}
        className="mt-10 flex gap-6"
      >
        <a
          href="#projects"
          className="bg-pink-500 hover:bg-pink-600 transition-colors rounded-md px-6 py-3 font-semibold shadow-lg shadow-pink-700/50"
        >
          View My Projects
        </a>
        <a
          href="#contact"
          className="border-2 border-pink-400 hover:bg-pink-400 hover:text-black transition-colors rounded-md px-6 py-3 font-semibold"
        >
          Contact Me
        </a>
      </motion.div>

      <button
        onClick={toggleDarkMode}
        aria-label="Toggle Dark Mode"
        className="absolute top-6 right-6 bg-white dark:bg-gray-700 p-2 rounded-md shadow-md"
      >
        {darkMode ? "🌞" : "🌙"}
      </button>
    </section>
  );
}
