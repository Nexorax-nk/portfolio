"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  repoUrl?: string;
  category: string; // For filtering
}

const allProjects: Project[] = [
  {
    id: 1,
    title: "Personal Blog Platform",
    description:
      "Full-stack blog platform with Markdown support, comments, and SEO.",
    tech: ["Next.js", "TailwindCSS", "Node.js", "MongoDB"],
    demoUrl: "https://yourblogdemo.com",
    repoUrl: "https://github.com/yourusername/blog",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Machine Learning Model Trainer",
    description: "Python tool to train and deploy ML models quickly.",
    tech: ["Python", "TensorFlow", "Docker"],
    repoUrl: "https://github.com/yourusername/ml-trainer",
    category: "ml",
  },
  {
    id: 3,
    title: "E-commerce Frontend",
    description:
      "High-performance responsive e-commerce UI with cart & checkout.",
    tech: ["React", "Redux", "TailwindCSS"],
    demoUrl: "https://yourshopdemo.com",
    repoUrl: "https://github.com/yourusername/shop-frontend",
    category: "frontend",
  },
  {
    id: 4,
    title: "Open Source CLI Tool",
    description: "Command-line tool to automate dev tasks in JS projects.",
    tech: ["Node.js", "Commander.js"],
    repoUrl: "https://github.com/yourusername/cli-tool",
    category: "tools",
  },
  // Add or edit projects here!
];

const categories = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "fullstack", label: "Fullstack" },
  { key: "ml", label: "Machine Learning" },
  { key: "tools", label: "Tools" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="min-h-screen container mx-auto px-6 py-16"
    >
      <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
        
        <span className="bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300 bg-clip-text text-transparent animate-gradient-x">
          My {" "} Projects
        </span>
      </h2>

      <div className="flex justify-center mb-12 gap-4 flex-wrap">
        {categories.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-4 py-2 rounded-full font-semibold transition-colors ${
              filter === key
                ? "bg-sky to-blue-200 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
            } hover:bg-sky to-blue-200 hover:text-white`}
          >
            {label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map(({ id, title, description, tech, demoUrl, repoUrl }) => (
            <motion.article
              key={id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 min-h-[60px]">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="bg-sky to-blue-300 text-sky-800 dark:text-blue-100 px-2 py-1 rounded-full text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto flex gap-4">
                {demoUrl && (
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline font-semibold"
                  >
                    Live Demo
                  </a>
                )}
                {repoUrl && (
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline font-semibold"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
