"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React", level: 92 },
  { name: "Next.js", level: 88 },
  { name: "TailwindCSS", level: 80 },
  { name: "GraphQL", level: 70 },
  { name: "Node.js", level: 75 },
  { name: "Python", level: 65 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen container mx-auto px-6 py-16"
    >
      <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
        
        <span className="bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300 bg-clip-text text-transparent animate-gradient-x">
          Skills & Tech Stacks
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map(({ name, level }) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * Math.random() }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center"
          >
            <div className="font-semibold mb-2">{name}</div>
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${level}%` }}
                transition={{ duration: 1 }}
                className="h-4 rounded-full bg-sky-300"
              />
            </div>
            <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              {level}%
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

