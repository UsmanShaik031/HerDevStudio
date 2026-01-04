"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Background } from "@/components/background";
import { MagneticText } from "@/components/magnetic-text";

const articles = [
  {
    title: "Designing Systems That Work Under Pressure",
    date: "May 12, 2025",
    category: "Systems",
    description:
      "Most software is built for ideal conditions, not real-world stress. This article breaks down how systems behave during failures, panic scenarios, and unexpected load.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Offline-First Web Applications: Why It Matters",
    date: "April 28, 2025",
    category: "Architecture",
    description:
      "Internet connectivity is never guaranteed, especially in critical situations. This article explains what offline-first really means beyond caching pages.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
  },

  {
    title: "Building Reliable Emergency Interfaces",
    date: "March 22, 2024",
    category: "UX Systems",
    description:
      "Emergency interfaces are used under stress, fear, and time pressure. This article focuses on designing UIs that reduce cognitive load.",
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800",
  },
  
];

export default function ArticlesPage() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <Header />

      <div className="mx-auto max-w-6xl px-6 pt-32 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <MagneticText>Articles</MagneticText>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            <MagneticText>
              Long-form thoughts on systems, software, and building reliable
              digital products.
            </MagneticText>
          </p>
        </motion.div>

        {/* Articles list */}
        <div className="space-y-10">
          {articles.map((article, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col gap-6 rounded-2xl border border-border/40 bg-card/40 p-6 md:flex-row"
            >
              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl md:aspect-[4/3] md:w-64 md:shrink-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-center">
                <span className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {article.date}
                </span>

                <h2 className="mb-3 text-xl font-bold sm:text-2xl">
                  <MagneticText>{article.title}</MagneticText>
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  <MagneticText>{article.description}</MagneticText>
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
