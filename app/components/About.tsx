"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// Define your skills here
const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", 
  "Node.js", "Python", "Tailwind CSS", "Figma"
];

// Animation variants for the container to orchestrate animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// Animation variants for individual items sliding up
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
} as const;

// Animation for the skill tags on hover
const skillTagHover = {
  scale: 1.1,
  boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.5)",
  transition: { type: "spring", stiffness: 300 }
} as const;


export default function About() {
  return (
    <section 
      id="about" 
      className="w-full max-w-4xl mx-auto py-24 px-6 text-center"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-black mb-6"
        >
          About {" "}
          <span className="bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300 bg-clip-text text-transparent animate-gradient-x">
            Me
          </span>
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-600 dark:text-gray-400 mb-12"
        >
          I'm a passionate full-stack developer with a love for building beautiful,
          functional, and user-centric web applications. My journey in tech started
          with a curiosity for how things work, and it has evolved into a career
          where I get to solve complex problems and bring ideas to life with code.
          I thrive in collaborative environments and am always eager to learn new technologies.
        </motion.p>
        
        <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">My Skillset</h3>
            <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill) => (
                    <motion.div
                        key={skill}
                        whileHover={skillTagHover}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium px-4 py-2 rounded-md shadow-sm cursor-default"
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </motion.div>

        <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Find Me On</h3>
            <div className="flex justify-center gap-6">
                <motion.a href="https://github.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, y: -5 }} aria-label="GitHub">
                    <FaGithub className="text-4xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors" />
                </motion.a>
                <motion.a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, y: -5 }} aria-label="LinkedIn">
                    <FaLinkedin className="text-4xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors" />
                </motion.a>
                <motion.a href="https://twitter.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, y: -5 }} aria-label="Twitter">
                    <FaTwitter className="text-4xl text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors" />
                </motion.a>
            </div>
        </motion.div>
      </motion.div>
    </section>
  );
}