"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { ThemeToggle } from "@/components/theme-toggle";
import { Background } from "@/components/background";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { MagneticText } from "@/components/magnetic-text";

const principles = [
  {
    title: "Clarity over cleverness",
    description: "Simple solutions that are easy to understand scale better than complex ones."
  },
  {
    title: "Ship and iterate",
    description: "Real usage reveals more than perfect planning."
  },
  {
    title: "Design is problem-solving",
    description: "Every visual and technical choice should serve a purpose."
  },
  {
    title: "Code is communication",
    description: "I write code for humans first, machines second."
  }
];

const timeline = [
  { year: "2026", event: "Focused on building robust, scalable software systems with stronger emphasis on system design, reliability, and long-term maintainability." },
  { year: "2025", event: "Building and refining production-grade web applications and systems, with a strong focus on scalability, observability, and real-world performance." },
  { year: "2024", event: "Building and supporting production-grade systems and web platforms." },
  { year: "2023", event: "Developed full-stack features for real-time, event-driven applications." },
  { year: "2022", event: "Worked deeply with backend services, databases, and APIs." },
  { year: "2021", event: "Strengthened fundamentals in web development and cloud technologies." }
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <Header />
      <ThemeToggle />

      <div className="mx-auto max-w-4xl px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="mb-8 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              Bengaluru, India
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              Building software systems and web experiences
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <MagneticText>Building software systems and web experiences</MagneticText>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-20 space-y-6 text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            <MagneticText>I build web applications and systems using modern technologies, with a strong focus on clarity, reliability, and real-world behavior.</MagneticText>
          </p>
          <p>
            <MagneticText>I work across frontend and backend, and I don&apos;t treat them as separate worlds — they are parts of the same system, seen from different angles. The best software emerges when someone understands both how interfaces feel and how systems behave under load and failure.</MagneticText>
          </p>
          <p>
            <MagneticText>My approach is systems-first. I focus on strong foundations — clean architecture, scalable components, reliable APIs, and observability — so products can grow without becoming fragile. Good systems don&apos;t restrict creativity; they enable it by removing uncertainty and hidden complexity.</MagneticText>
          </p>
          <p>
            <MagneticText>Currently, I’m working with technologies like React, Node.js, NestJS, AWS, Terraform, Docker, Kubernetes, and modern monitoring tools. I’m especially interested in how automation, cloud infrastructure, and observability improve software quality over time.</MagneticText>
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
            <h2 className="mb-8 text-2xl font-bold">
              <MagneticText>Principles</MagneticText>
            </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {principles.map((principle, i) => (
              <div
                key={principle.title}
                className="rounded-2xl border border-border/50 bg-card/30 p-6"
              >
                <h3 className="mb-2 font-bold">
                  <MagneticText>{principle.title}</MagneticText>
                </h3>
                <p className="text-sm text-muted-foreground">
                  <MagneticText>{principle.description}</MagneticText>
                </p>
              </div>
            ))}
          </div>
        </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="mb-8 text-2xl font-bold">
              <MagneticText>Timeline</MagneticText>
            </h2>
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-6">
                  <span className="w-16 shrink-0 font-mono text-sm text-primary">{item.year}</span>
                  <span className="text-muted-foreground">
                    <MagneticText>{item.event}</MagneticText>
                  </span>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="mb-8 text-2xl font-bold">
              <MagneticText>Currently</MagneticText>
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border/50 bg-card/30 p-5">
                <h3 className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  <MagneticText>Reading</MagneticText>
                </h3>
                <p className="font-medium">
                  <MagneticText>Designing Data-Intensive Applications — Martin Kleppmann</MagneticText>
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-card/30 p-5">
                <h3 className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  <MagneticText>Building</MagneticText>
                </h3>
                <p className="font-medium">
                  <MagneticText>Scalable web applications and reliable system foundations</MagneticText>
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-card/30 p-5">
                <h3 className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  <MagneticText>Learning</MagneticText>
                </h3>
                <p className="font-medium">
                  <MagneticText>Cloud infrastructure, observability, and performance-focused engineering</MagneticText>
                </p>
              </div>
            </div>
          </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground transition-all hover:scale-105"
            >
            Let&apos;s work together
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
