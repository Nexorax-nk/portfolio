// app/components/Preloader.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Hello", "Bonjour", "你好", "Namaste","Vanakam"];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    if (index === words.length) {
      // After all words have been shown, show the name
      setShowName(true);
      return;
    };

    const timer = setTimeout(() => {
      setIndex(index + 1);
    }, 1000); // Each word displays for 1 second

    return () => clearTimeout(timer);
  }, [index]);

  const preloaderVariants = {
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  } as const;
  
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
    exit: { opacity: 0, y: -20 },
  } as const;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-black"
      variants={preloaderVariants}
      exit="exit"
    >
      <AnimatePresence mode="wait">
        {!showName ? (
          <motion.span
            key={index}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-200"
          >
            {words[index]}
          </motion.span>
        ) : (
          <motion.div
            key="name"
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <span className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              Naveen Kumar
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}