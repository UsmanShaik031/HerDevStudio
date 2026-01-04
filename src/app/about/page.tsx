"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Background } from "@/components/background";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { MagneticText } from "@/components/magnetic-text";

const principles = [
  {
    title: "Reliability over features",
    description: "A system that fails under load is worse than a feature that ships late."
  },
  {
    title: "Observability before assumptions",
    description: "Metrics, logs, and traces reveal truth faster than guesses."
  },
  {
    title: "Automate what repeats",
    description: "Manual fixes don’t scale; automation does."
  },
  {
    title: "Systems think holistically",
    description: "Frontend, backend, infra, and users are one connected system."
  }
];

const timeline = [
  {
    year: "2026",
    event:
      "Focused on strengthening system design thinking, reliability patterns, observability practices, and long-term maintainability of large-scale software systems."
  },
  {
    year: "2025",
    event:
      "Worked as a Site Reliability Engineer at Wipro, supporting 24/7 production systems for Agoda Payments, handling incidents, alerts, monitoring, and SLA-driven operations."
  },
  {
    year: "2024",
    event:
      "Worked as a Full Stack Developer at LetsNotify, building scalable push notification platforms, real-time analytics, and backend systems using React, Node.js, NestJS, and MySQL."
  },
  {
    year: "2023",
    event:
      "Built and experimented with full-stack systems, simulations, and AI-based platforms to strengthen system-level understanding."
  },
  {
    year: "2022",
    event:
      "Developed strong backend foundations with Java, Spring Boot, databases, and API-driven architectures."
  },
  {
    year: "2021",
    event:
      "Built fundamentals in programming, web technologies, and problem-solving through academic and personal projects."
  }
];
<style jsx global>{`
/* ================================
   ABOUT PAGE – COMPONENT SCOPED FIX
   ================================ */

/* Prevent overflow */
html, body {
  overflow-x: hidden;
}

/* Word safety */
* {
  word-break: break-word;
  overflow-wrap: break-word;
}

/* ---------- MOBILE (<= 640px) ---------- */
@media (max-width: 640px) {

  /* Main wrapper spacing */
  main > div {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
    padding-top: 6.5rem !important;
    padding-bottom: 4rem !important;
  }

  /* Page title */
  h1 {
    font-size: 1.9rem !important;
    line-height: 1.25 !important;
  }

  /* Section headings */
  h2 {
    font-size: 1.35rem !important;
  }

  /* Paragraphs */
  p {
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
  }

  /* Header meta (location + role) */
  .flex.items-center.gap-6 {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 0.4rem !important;
    font-size: 0.75rem !important;
  }

  /* Principles cards */
  section .grid {
    grid-template-columns: 1fr !important;
  }

  /* Timeline rows */
  section .space-y-5 > div {
    flex-direction: column !important;
    gap: 0.3rem !important;
  }

  /* Timeline year */
  section .font-mono {
    width: auto !important;
  }

  /* Currently section */
  .grid.sm\\:grid-cols-3 {
    grid-template-columns: 1fr !important;
  }

  /* CTA button */
  a.rounded-full {
    padding: 0.75rem 1.6rem !important;
    font-size: 0.9rem !important;
  }
}

/* ---------- TABLETS (641px–1024px) ---------- */
@media (min-width: 641px) and (max-width: 1024px) {

  main > div {
    padding-left: 2rem !important;
    padding-right: 2rem !important;
  }

  h1 {
    font-size: 2.5rem !important;
  }

  h2 {
    font-size: 1.6rem !important;
  }

  p {
    font-size: 1rem !important;
  }

  section .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }

  .grid.sm\\:grid-cols-3 {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }
}

/* ---------- LARGE SCREENS (>=1536px) ---------- */
@media (min-width: 1536px) {

  main > div {
    max-width: 1100px !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  h1 {
    font-size: 3.2rem !important;
  }

  h2 {
    font-size: 2rem !important;
  }

  p {
    font-size: 1.05rem !important;
  }
}
`}</style>

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <Header />

      <div className="mx-auto max-w-4xl px-6 pt-32 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="mb-8 flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              Bengaluru, India
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              Site Reliability Engineer & Full-Stack Developer
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <MagneticText>
              Building reliable systems that work under real-world pressure
            </MagneticText>
          </h1>
        </motion.div>

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-20 space-y-6 text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            <MagneticText>
              I’m a Site Reliability Engineer with hands-on experience supporting
              24/7 production systems and a strong background in full-stack web
              development. I work at the intersection of software engineering,
              operations, and system reliability.
            </MagneticText>
          </p>

          <p>
            <MagneticText>
              At Wipro, I supported large-scale, real-time payment and booking
              systems for Agoda, handling production incidents, alert analysis,
              monitoring, and SLA-driven operations across Linux, Windows, and AWS
              environments.
            </MagneticText>
          </p>

          <p>
            <MagneticText>
              Previously, as a Full Stack Developer at LetsNotify, I built
              scalable web platforms using React, Node.js, NestJS, and MySQL,
              working on real-time notifications, analytics, and performance-
              sensitive backend systems.
            </MagneticText>
          </p>

          <p>
            <MagneticText>
              My approach is systems-first. I care deeply about observability,
              automation, clean architecture, and designing systems that behave
              predictably during failures, traffic spikes, and operational stress.
            </MagneticText>
          </p>
        </motion.div>

        {/* Principles */}
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
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border/50 bg-card/30 p-6"
              >
                <h3 className="mb-2 font-bold">
                  <MagneticText>{p.title}</MagneticText>
                </h3>
                <p className="text-sm text-muted-foreground">
                  <MagneticText>{p.description}</MagneticText>
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="mb-8 text-2xl font-bold">
            <MagneticText>Timeline</MagneticText>
          </h2>

          <div className="space-y-5">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-6">
                <span className="w-16 shrink-0 font-mono text-sm text-primary">
                  {item.year}
                </span>
                <span className="text-muted-foreground">
                  <MagneticText>{item.event}</MagneticText>
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Currently */}
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
                <MagneticText>
                  Designing Data-Intensive Applications 
                </MagneticText>
              </p>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card/30 p-5">
              <h3 className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <MagneticText>Building</MagneticText>
              </h3>
              <p className="font-medium">
                <MagneticText>
                  Reliable systems2SQWQDWD, automation workflows, and scalable web platforms
                </MagneticText>
              </p>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card/30 p-5">
              <h3 className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <MagneticText>Learning</MagneticText>
              </h3>
              <p className="font-medium">
                <MagneticText>
                  Observability, cloud infrastructure, and performance engineering
                </MagneticText>
              </p>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
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
