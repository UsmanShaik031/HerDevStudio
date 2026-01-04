"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/articles" },
  { label: "Labs", href: "/labs" },
  { label: "Projects", href: "/projects" },
  { label: "Notes", href: "/notes" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-[2rem] border border-black/10 dark:border-white/40 bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-2xl">
        <div className="flex h-16 items-center justify-between px-6 md:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-black tracking-[0.2em] uppercase"
          >SYSTEMS

          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
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
                    />
                  )}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="ml-3 rounded-full bg-foreground px-5 py-2.5 text-sm font-bold text-white dark:text-black"
            >
              Let&apos;s Build
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Menu Button (Mobile + Tablet) */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>
{/* Header Status / GIF */}
<motion.div
  initial={{ opacity: 0, y: -6 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  className="fixed top-[5.5rem] left-1/2 -translate-x-1/2 z-40
             flex items-center justify-center
             pointer-events-none"
>
  <div
    className="flex items-center gap-2 rounded-full
               bg-none "
  >
    <img
      src="/me.gif"   // 👈 replace with your GIF path
      alt="status"
      className="h-25 w-24 object-contain"
    />
  
  </div>
</motion.div>

      {/* Mobile / Tablet Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[5.5rem] left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md rounded-2xl border border-border bg-background shadow-xl lg:hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${
                    pathname === item.href
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-foreground px-4 py-3 text-center text-sm font-bold text-white dark:text-black"
              >
                Let&apos;s Build
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
