"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X, ArrowRight } from "lucide-react";
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-5xl rounded-[2rem] border border-black/10 dark:border-white/20 bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-2xl transition-all duration-300">
        <div className="mx-auto flex h-16 items-center justify-between px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="z-[101]"
          >
            <Link href="/" className="text-xl sm:text-2xl font-black tracking-[0.2em] uppercase text-black dark:text-white">
              Shaik
            </Link>
          </motion.div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Desktop Nav */}
            <div className="hidden items-center gap-1 lg:flex">
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
                          : "text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 -z-10 rounded-full bg-black/5 dark:bg-white/10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="mx-2 h-4 w-[1px] bg-black/10 dark:bg-white/10" />

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="ml-2"
              >
                <Link
                  href="/contact"
                  className="rounded-full bg-black px-5 py-2.5 text-sm font-bold text-white dark:bg-white dark:text-black transition-all hover:scale-105 active:scale-95"
                >
                  Let&apos;s Build
                </Link>
              </motion.div>
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 dark:bg-white/10 lg:hidden text-black dark:text-white"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] flex flex-col bg-white dark:bg-black pt-32 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`text-4xl font-black tracking-tight ${
                      pathname === item.href ? "text-black dark:text-white" : "text-zinc-400 dark:text-zinc-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 text-4xl font-black tracking-tight text-black dark:text-white"
                >
                  Contact <ArrowRight size={32} />
                </Link>
              </motion.div>
            </div>

            <div className="mt-auto pb-12">
              <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-4">Socials</p>
              <div className="flex gap-6">
                <a href="#" className="text-xl font-bold text-black dark:text-white">TW</a>
                <a href="#" className="text-xl font-bold text-black dark:text-white">IG</a>
                <a href="#" className="text-xl font-bold text-black dark:text-white">LI</a>
                <a href="#" className="text-xl font-bold text-black dark:text-white">GH</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
