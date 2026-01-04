"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./magnetic";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

    return (
      <div className="relative">
        <Magnetic>
          <span 
            className="relative group inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Background Glow */}
            <motion.div
              animate={{
                scale: isHovered ? 1.2 : 1,
                opacity: isHovered ? 0.8 : 0.4,
              }}
              className={`absolute inset-0 rounded-full blur-2xl transition-colors duration-700 ${
                theme === "light" 
                  ? "bg-yellow-200/50" 
                  : "bg-blue-500/30"
              }`}
            />

            <motion.div
              animate={{
                opacity: isHovered ? [0.4, 0.2, 0] : 0,
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
              style={{ scale: 1.4 }}
              className={`absolute inset-0 rounded-full border-2 ${
                theme === "light" ? "border-zinc-800" : "border-zinc-200"
              }`}
            />

            <AnimatePresence>
              {(isHovered || true) && (
                <>
                  {[0, 120, 240].map((angle, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: isHovered ? 1 : 0.3, 
                        scale: isHovered ? 1.2 : 1,
                        rotate: angle + 360,
                      }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{
                        rotate: { duration: isHovered ? 2 : 5, repeat: Infinity, ease: "linear" },
                        opacity: { duration: 0.5 },
                        scale: { duration: 0.5 }
                      }}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: isHovered ? "6px" : "4px",
                        height: isHovered ? "6px" : "4px",
                        marginLeft: "-2px",
                        marginTop: "-2px",
                        borderRadius: "50%",
                        backgroundColor: theme === "light" ? "#27272a" : "#ffffff",
                        transformOrigin: "32px 50%",
                        filter: "blur(1px)",
                        boxShadow: `0 0 10px ${theme === "light" ? "#000" : "#fff"}`,
                      }}
                    />
                  ))}
                </>
              )}
            </AnimatePresence>

            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              whileTap={{ scale: 0.95 }}
              className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border shadow-sm transition-all duration-500 cursor-pointer overflow-hidden ${
                theme === "light" 
                  ? "bg-white border-zinc-200 text-zinc-600 shadow-[0_0_20px_rgba(251,191,36,0.3)]" 
                  : "bg-zinc-950 border-zinc-800 text-zinc-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
              }`}
              aria-label="Toggle theme"
            >
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  opacity: isHovered ? 0.3 : 0.1,
                  background: `conic-gradient(from 0deg, transparent, ${theme === "light" ? "#f59e0b" : "#3b82f6"}, transparent)`,
                }}
                className="absolute inset-0 transition-opacity duration-500"
              />


            <AnimatePresence mode="wait" initial={false}>
              {theme === "light" ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }}
                  className="relative z-20"
                >
                  <Moon className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }}
                  className="relative z-20"
                >
                  <Sun className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </span>
      </Magnetic>
    </div>
  );
}
