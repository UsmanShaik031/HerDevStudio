"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

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

    return (
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-[2rem] border border-black/10 dark:border-white/40 bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-2xl transition-colors duration-300">
        <div className="mx-auto flex h-16 items-center justify-between px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
              <Link href="/" className="text-2xl font-black tracking-[0.2em] uppercase">
                Shaik
              </Link>
          </motion.div>

          <div className="flex items-center gap-4">
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
                        className={`relative px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                          isActive
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 -z-10 rounded-full bg-muted"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="mx-2 h-4 w-[1px] bg-border" />

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="ml-2"
              >
                    <Link
                      href="/contact"
                      className="rounded-full bg-foreground px-5 py-2.5 text-sm font-bold text-white dark:text-black transition-all hover:scale-105"
                    >
                      Let&apos;s Build
                    </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>
        </div>
      </nav>
    );
}
