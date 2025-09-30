"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Here you can add your preferred form submit logic or email service integration

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="min-h-screen container mx-auto px-6 py-16 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
    >
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        Contact Me
      </h2>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto flex flex-col gap-6"
          noValidate
        >
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-600 font-semibold text-center"
            >
              {error}
            </motion.div>
          )}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-800 dark:text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-800 dark:text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-800 dark:text-white"
            required
          />
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded transition-colors"
          >
            Send Message
          </button>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-lg mx-auto p-8 bg-green-100 text-green-800 rounded shadow-lg text-center font-semibold text-xl"
        >
          Thank you for your message! I&apos;ll get back to you soon.
        </motion.div>
      )}
    </section>
  );
}
