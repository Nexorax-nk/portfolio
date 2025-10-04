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

    // Here you would add your form submission logic (e.g., to Formspree, Resend, etc.)
    console.log("Form submitted:", formData);

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="w-full max-w-3xl mx-auto py-24 px-6"
    >
      <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
        Get In{" "}
        <span className="bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300 bg-clip-text text-transparent animate-gradient-x">
          Touch
        </span>
      </h2>

      {!submitted ? (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto flex flex-col gap-6"
          noValidate
        >
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 font-semibold text-center p-3 bg-red-100 dark:bg-red-900/50 rounded-md"
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
            className="p-3 rounded-md bg-white dark:bg-gray-300 border border-gray-300 dark:border-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            suppressHydrationWarning
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-md bg-white dark:bg-gray-300 border border-gray-300 dark:border-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            suppressHydrationWarning
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded-md bg-white dark:bg-gray-300 border border-gray-300 dark:border-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            suppressHydrationWarning
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors shadow-lg"
            suppressHydrationWarning
          >
            Send Message
          </motion.button>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto p-8 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-lg shadow-lg text-center font-semibold text-xl"
        >
          Thank you for your message! I'll get back to you soon.
        </motion.div>
      )}
    </section>
  );
}