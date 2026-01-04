"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/articles" },
  { label: "Labs", href: "/labs" },
  { label: "Projects", href: "/projects" },
  { label: "Notes", href: "/notes" },
  { label: "About", href: "/about" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-5xl">
      <nav className="relative rounded-[2rem] border border-black/10 dark:border-white/20 bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-2xl transition-all duration-300">
        <div className="mx-auto flex h-16 items-center justify-between px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link href="/" className="text-xl sm:text-2xl font-black tracking-[0.2em] uppercase text-black dark:text-white">
              Shaik
            </Link>
          </motion.div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2 text-sm font-bold transition-colors cursor-pointer ${
                        isActive
                          ? "text-black dark:text-white"
                          : "text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 -z-10 rounded-full bg-neutral-100 dark:bg-neutral-800"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="mx-2 h-4 w-[1px] bg-neutral-200 dark:bg-neutral-800" />

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="ml-2"
              >
                <Link
                  href="/contact"
                  className="rounded-full bg-black dark:bg-white px-5 py-2.5 text-sm font-bold text-white dark:text-black transition-all hover:scale-105"
                >
                  Let&apos;s Build
                </Link>
              </motion.div>
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black md:hidden"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden md:hidden border-t border-neutral-100 dark:border-neutral-800"
            >
              <div className="flex flex-col gap-2 p-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 text-lg font-bold transition-colors ${
                        pathname === item.href
                          ? "text-black dark:text-white"
                          : "text-neutral-500"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full rounded-2xl bg-black dark:bg-white py-4 text-center text-lg font-bold text-white dark:text-black"
                  >
                    Let&apos;s Build
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
