"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { ThemeToggle } from "@/components/theme-toggle";
import { Background } from "@/components/background";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { MagneticText } from "@/components/magnetic-text";

const experiments = [
  {
    title: "Emergency UI Flow",
    description: "Testing how emergency screens should behave when a user is under stress.",
    tags: ["UI", "Systems"],
    status: "Live",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Voice Interaction Demo",
    description: "Basic voice commands and responses in the browser.",
    tags: ["JavaScript", "Voice", "AI"],
    status: "Live",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "3D Room Prototype",
    description: "A simple interactive 3D room built with Three.js.",
    tags: ["Three.js", "3D"],
    status: "Beta",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Neural Response Simulation",
    description: "Visualizing how inputs affect simplified neural behavior.",
    tags: ["Simulation", "Logic"],
    status: "Concept",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Motion & Micro-Interactions",
    description: "Small motion experiments for buttons, cards, and transitions.",
    tags: ["UI", "Framer Motion"],
    status: "Live",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800"
  }
];

const statusColors: Record<string, string> = {
  Live: "bg-green-500/10 text-green-600 dark:text-green-400",
  WIP: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  Beta: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Concept: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
};

export default function LabsPage() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <Header />
      {/* <ThemeToggle /> */}

      <div className="mx-auto max-w-6xl px-6 pt-32 pb-15">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Experimental</span>
          </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <MagneticText>Labs</MagneticText>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              <MagneticText>Small experiments and explorations. Things I test before they become real projects.</MagneticText>
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experiments.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer rounded-2xl border border-border/50 bg-card/30 p-4 transition-all hover:border-primary/20 hover:bg-card/60"
              >
                <div className="relative mb-4 aspect-video overflow-hidden rounded-xl">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className={`absolute top-3 right-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${statusColors[exp.status]}`}>
                    {exp.status}
                  </div>
                </div>

                <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-primary">
                  <MagneticText>{exp.title}</MagneticText>
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  <MagneticText>{exp.description}</MagneticText>
                </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-2.5 py-1 text-[10px] font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

                
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
