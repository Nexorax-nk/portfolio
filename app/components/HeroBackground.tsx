"use client";

import React, { useRef } from "react";

export default function HeroBackground() {
  // We'll animate these with mouse position
  const bgRef = useRef<HTMLDivElement>(null);

  // Listen for mouse move and update CSS vars
  function handleMouseMove(e: React.MouseEvent) {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    // Get values between 0-1
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    // Set as CSS vars for dynamic gradient
    if (bgRef.current) {
      bgRef.current.style.setProperty("--x", x.toString());
      bgRef.current.style.setProperty("--y", y.toString());
    }
  }

  return (
    <div
      ref={bgRef}
      className="absolute inset-0 z-0 overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{
        // CSS vars are initially centered
        "--x": "0.5",
        "--y": "0.5",
      } as React.CSSProperties}
    >
      {/* Dramatic color/blur overlays */}
      <div
        className="w-full h-full"
        style={{
          position: "absolute",
          inset: 0,
          // Multiple layered radial gradients, coords driven by CSS vars
          background: `
            radial-gradient(
              800px circle at calc(var(--x, 0.5) * 100%) calc(var(--y, 0.5) * 100%),
              rgba(255,64,64,0.75) 0%, transparent 79%
            ),
            radial-gradient(
              400px circle at calc((1 - var(--x, 0.5)) * 100%) calc(var(--y, 0.5) * 100%),
              rgba(255,94,180,0.4) 0%, transparent 73%
            ),
            repeating-linear-gradient(
              120deg, rgba(255,80,80,0.08) 0 24px, transparent 24px 48px
            ),
            linear-gradient(
              135deg, #161921 0%, #10111a 100%
            )
          `,
          filter: "blur(0.5px) saturate(1.3)",
          transition: "background 0.18s cubic-bezier(.73,.05,.41,.95)",
          zIndex: 0,
          pointerEvents: "none"
        }}
      />
    </div>
  );
}
