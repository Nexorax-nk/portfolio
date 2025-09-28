import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav style={{display:'flex', gap:'20px', padding:'1rem', borderBottom:'1px solid #ccc'}}>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/skills">Skills</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
