"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { ThemeToggle } from "@/components/theme-toggle";
import { Background } from "@/components/background";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { MagneticText } from "@/components/magnetic-text";

const articles = [
  {
    slug: "designing-systems-under-pressure",
    title: "Designing Systems That Work Under Pressure",
    date: "May 12, 2024",
    readTime: "9 min read",
    category: "Systems",
    description: "Most software is built for ideal conditions, not real-world stress. This article breaks down how systems behave during failures, panic scenarios, and unexpected load.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "offline-first-web-applications",
    title: "Offline-First Web Applications: Why It Matters",
    date: "April 28, 2024",
    readTime: "11 min read",
    category: "Architecture",
    description: "Internet connectivity is never guaranteed, especially in critical situations. This article explains what offline-first really means beyond caching pages.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "frontend-performance-system-problem",
    title: "Frontend Performance Is a System Problem",
    date: "April 15, 2024",
    readTime: "8 min read",
    category: "Performance",
    description: "Slow interfaces are rarely just a frontend issue. This article explains how backend latency, APIs, and infrastructure impact UI performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "building-reliable-emergency-interfaces",
    title: "Building Reliable Emergency Interfaces",
    date: "March 22, 2024",
    readTime: "10 min read",
    category: "UX Systems",
    description: "Emergency interfaces are used under stress, fear, and time pressure. This article focuses on designing UIs that reduce cognitive load.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "from-alerts-to-action",
    title: "From Alerts to Action: Rethinking Monitoring",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Observability",
    description: "Dashboards alone don’t prevent outages. This article explores why most alert systems fail engineers during incidents.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800"
  }
];

export default function ArticlesPage() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <Header />

      <div className="mx-auto max-w-6xl px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <MagneticText>Articles</MagneticText>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            <MagneticText>Long-form thoughts on systems, software, and building reliable digital products.</MagneticText>
          </p>
        </motion.div>

        <div className="space-y-8">
          {articles.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/articles/${article.slug}`}
                className="group flex flex-col gap-6 rounded-2xl border border-border/50 bg-card/30 p-6 transition-all hover:border-primary/20 hover:bg-card/60 md:flex-row"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-xl md:aspect-[4/3] md:w-64 md:shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
                    {article.category}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-center">
                  <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary sm:text-2xl">
                    <MagneticText>{article.title}</MagneticText>
                  </h2>
                  <p className="mb-4 text-muted-foreground">
                    <MagneticText>{article.description}</MagneticText>
                  </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <MagneticText>Read article</MagneticText>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
