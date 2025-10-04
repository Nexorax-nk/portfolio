// app/components/ClientLayout.tsx
"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./Preloader";
import Header from "./Header";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Total preloader duration: 4 words * 1s each + 1.5s for the name reveal
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5500); // 5.5 seconds total

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Header />
          <main>{children}</main>
        </>
      )}
    </>
  );
}