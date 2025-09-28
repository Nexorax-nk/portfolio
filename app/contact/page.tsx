"use client";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main style={{padding: '2rem'}}>
        <h2>Contact Me</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', maxWidth: '400px', gap: '1rem'}}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows={5} required />
            <button type="submit">Send</button>
          </form>
        ) : (
          <p>Thank you for your message! I will get back to you soon.</p>
        )}
        
        <p>Or reach out via <a href="mailto:your-email@example.com">Email</a> | <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a> | <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a></p>
      </main>
    </>
  );
}
