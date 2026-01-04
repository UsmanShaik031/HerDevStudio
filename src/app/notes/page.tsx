"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { ThemeToggle } from "@/components/theme-toggle";
import { Background } from "@/components/background";
import { Bookmark, ArrowRight } from "lucide-react";
import { MagneticText } from "@/components/magnetic-text";

const notes = [
  {
    id: 1,
    content: "Reliability isn’t about preventing failure.\nIt’s about designing systems that fail predictably and recover fast.",
    tags: ["Systems", "Reliability"],
    date: "May 15, 2026"
  },
  {
    id: 2,
    content: "Monitoring without context is noise.\nGood observability tells you why something broke, not just that it broke.",
    tags: ["Observability", "Engineering"],
    date: "May 12, 2025"
  },
  {
    id: 3,
    content: "Frontend performance is a backend problem wearing a UI mask.\nSlow systems always surface at the interface first.",
    tags: ["Performance", "Web"],
    date: "May 8, 2025"
  },
  {
    id: 4,
    content: "Shipping early isn’t about speed.\nIt’s about exposing assumptions before they harden into architecture.",
    tags: ["Development", "Philosophy"],
    date: "May 5, 2024"
  },
  {
    id: 5,
    content: "Automation doesn’t remove responsibility.\nIt moves it earlier in the system.",
    tags: ["DevOps", "Automation"],
    date: "May 1, 2024"
  },
  {
    id: 6,
    content: "APIs are contracts, not functions.\nBreaking them breaks trust faster than bugs do.",
    tags: ["Backend", "Systems"],
    date: "April 28, 2024"
  },
  {
    id: 7,
    content: "Clean UI reduces cognitive load.\nIn high-stress scenarios, clarity is a safety feature.",
    tags: ["UX", "Systems Thinking"],
    date: "April 25, 2024"
  },
  {
    id: 8,
    content: "Good dashboards don’t show everything.\nThey show the one thing you need right now.",
    tags: ["Monitoring", "Design"],
    date: "April 20, 2024"
  }
];

export default function NotesPage() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <Header />

      <div className="mx-auto max-w-4xl px-6 pt-32 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-2">
            <Bookmark className="h-5 w-5 text-primary" />
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Quick Thoughts</span>
          </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <MagneticText>Notes</MagneticText>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              <MagneticText>Short insights, observations, and mental models. Ideas too small for articles, too valuable to forget.</MagneticText>
            </p>
          </motion.div>

          <div className="space-y-6">
            {notes.map((note, i) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group cursor-pointer rounded-2xl border border-border/50 bg-card/30 p-6 transition-all hover:border-primary/20 hover:bg-card/60"
              >
                <p className="mb-4 text-lg leading-relaxed">
                  <MagneticText>&ldquo;{note.content}&rdquo;</MagneticText>
                </p>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {note.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{note.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

      
      </div>
    </main>
  );
}
