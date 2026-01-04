"use client";

import React from "react";
import { motion } from "framer-motion";
import Magnetic from "./magnetic";

interface MagneticTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const wordReveal = {
  initial: { y: 10, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.2, 0.65, 0.3, 0.9],
      delay: i * 0.015,
    },
  }),
};

function getTextFromChildren(children: React.ReactNode): string {
  return React.Children.toArray(children)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") {
        return child.toString();
      }
      if (React.isValidElement(child) && child.props.children) {
        return getTextFromChildren(child.props.children);
      }
      return "";
    })
    .join("");
}

export function MagneticText({ children, className = "", delay = 0 }: MagneticTextProps) {
  const [isMounted, setIsMounted] = React.useState(false);
  const content = getTextFromChildren(children);
  const words = content.split(" ").filter(word => word.length > 0);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span className={`inline-flex flex-wrap gap-x-[0.25em] overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            variants={wordReveal}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={i + (delay * 10)}
            className="inline-block"
          >
            <Magnetic>
              <span className="inline-block cursor-default">{word}</span>
            </Magnetic>
          </motion.span>
        </span>
      ))}
    </span>
  );
}
