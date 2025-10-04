// app/components/AchievementCard.tsx
"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

type CardProps = {
  title: string;
  description: string;
  link?: string;
  Icon: React.ElementType; // Accept an icon component
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
} as const

export default function AchievementCard({ title, description, link, Icon }: CardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className="relative w-full p-6 bg-white dark:bg-gray-800/50 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
    >
      <motion.div
        whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 10px 30px rgba(59, 130, 246, 0.2)" }}
        className="h-full"
      >
        <div className="flex items-start gap-4">
          <div className="text-blue-500 mt-1">
            <Icon size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
            <p className="mt-1 text-gray-600 dark:text-gray-400">{description}</p>
          </div>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 text-gray-400 hover:text-blue-500 transition-colors"
            aria-label={`Learn more about ${title}`}
          >
            <FiArrowUpRight size={20} />
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}