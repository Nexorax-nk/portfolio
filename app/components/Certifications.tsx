// app/components/Certifications.tsx
"use client";

import { motion } from "framer-motion";
import AchievementCard from "./AchievementCard";
import { FaAws, FaGoogle } from 'react-icons/fa'; // Example icons

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    description: "Validated foundational, high-level understanding of AWS Cloud, services, and terminology.",
    link: "#", // Add verification link
    Icon: FaAws,
  },
  {
    title: "Google IT Support Professional",
    description: "Developed skills in troubleshooting, customer service, networking, and security.",
    link: "#", // Add verification link
    Icon: FaGoogle,
  },
  // Add more certifications here
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="w-full max-w-5xl mx-auto py-24 px-6">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
        
        <span className="bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300 bg-clip-text text-transparent animate-gradient-x">
          Licenses & Certifications
        </span>
      </h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {certifications.map((item) => (
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