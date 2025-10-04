// app/components/Achievements.tsx
"use client";

import { motion } from "framer-motion";
import AchievementCard from "./AchievementCard";
import { FaHackerrank, FaCode } from 'react-icons/fa'; // Example icons

const achievements = [
  {
    title: "WWT Hackathon Finalist",
    description: "Shortlisted to Round 2, competing against top talent in a nationwide event.",
    link: "#", // Add link to proof if you have one
    Icon: FaHackerrank,
  },
  {
    title: "500+ DSA Problems Solved",
    description: "Demonstrated strong problem-solving skills on platforms like LeetCode and GeeksforGeeks.",
    link: "#", // Add link to your LeetCode/GFG profile
    Icon: FaCode,
  },
  // Add more achievements here
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function Achievements() {
  return (
    <section id="achievements" className="w-full max-w-5xl mx-auto py-24 px-6">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
        My {" "}
        <span className="bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300 bg-clip-text text-transparent animate-gradient-x">
          Achievements
        </span>
      </h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {achievements.map((item) => (
          <AchievementCard
            key={item.title}
            title={item.title}
            description={item.description}
            link={item.link}
            Icon={item.Icon}
          />
        ))}
      </motion.div>
    </section>
  );
}