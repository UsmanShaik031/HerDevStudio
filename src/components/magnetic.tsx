"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [state, setState] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0, rotateZ: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Position offset
    const x = middleX * 0.35;
    const y = middleY * 0.35;
    
    // Rotation based on cursor position
    const rotateY = (middleX / (width / 2)) * 20;
    const rotateX = -(middleY / (height / 2)) * 20;
    const rotateZ = (middleX / (width / 2)) * 5;

    setState({ x, y, rotateX, rotateY, rotateZ });
  };

  const reset = () => {
    setState({ x: 0, y: 0, rotateX: 0, rotateY: 0, rotateZ: 0 });
  };

  const { x, y, rotateX, rotateY, rotateZ } = state;

  return (
    <motion.span
      style={{ 
        position: "relative", 
        display: "inline-block",
        perspective: "1000px" 
      }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x, y, rotateX, rotateY, rotateZ }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.span>
  );
}
