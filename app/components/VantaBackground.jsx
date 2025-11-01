'use client';

import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

export default function VantaBackground({ children }) {
  const vantaRef = useRef(null);
  const [vanta, setVanta] = useState(null);

  useEffect(() => {
    if (!vanta && vantaRef.current) {
      const effect = NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xff9900,
        backgroundColor: 0x111111
      });
      setVanta(effect);
    }

    return () => {
      if (vanta) vanta.destroy();
    };
  }, [vanta]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <div
        ref={vantaRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          color: "#fff",
        }}
      >
        {children} {/* your website content goes here */}
      </div>
    </div>
  );
}
