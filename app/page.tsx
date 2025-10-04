
// app/page.tsx

import Hero from "./components/Hero";
import Projects from "./components/projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";   // 1. Import
import Certifications from "./components/Certifications"; // 2. Import
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Achievements />   
      <Certifications />
      <Contact />
    </>
  );
}
