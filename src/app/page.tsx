"use client";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { Background } from "@/components/background";
import { Header } from "@/components/header";
import {
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Beaker,
  Sparkles,
  ArrowUpRight,
  Bookmark,
} from "lucide-react";
import Link from "next/link";
import { MagneticText } from "@/components/magnetic-text";

const fadeIn = {
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0,
    },
  },
};

const featuredProjects = [
  {
    title: "3D Smart Home Environment",
    year: "2023",
    description:
      "Developed a fully interactive 3D home environment with hall and room layouts using Three.js. Implemented camera controls, object interactions, and real-time state changes to simulate smart home behavior.",
    tags: ["Three.js", "JavaScript", "3D Graphics", "Interactive Systems"],
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#",
  },
  {
    title: "Developer Diary Application",
    year: "2021",
    description:
      "Built a full-stack Java web application enabling developers to log daily work, learning progress, issues, and solutions with secure authentication and searchable records.",
    tags: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#",
  },
];

const blogs = [
  {
    slug: "future-of-minimalist-design",
    title: "The Future of Minimalist Web Design",
    date: "May 12, 2026",
    category: "Design",
    description:
      "Exploring how whitespace and subtle animations are redefining the modern web experience.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "mastering-framer-motion",
    title: "Mastering Framer Motion for Next.js",
    date: "April 28, 2025",
    category: "Development",
    description:
      "A comprehensive guide to creating fluid, responsive animations that delight users.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "color-theory-matters",
    title: "Why Color Theory Still Matters",
    date: "April 15, 2025",
    category: "Art",
    description:
      "Understanding how palette choices influence user psychology and conversion rates.",
    image:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "building-design-systems",
    title: "Building Scalable Design Systems",
    date: "March 22, 2025",
    category: "Systems",
    description:
      "How to create a design system that grows with your product and team.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "typography-web",
    title: "The Art of Typography on the Web",
    date: "March 10, 2024",
    category: "Design",
    description:
      "Deep dive into choosing and pairing fonts for maximum impact and readability.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "minimalist-tech-stacks",
    title: "Minimalist Tech Stacks for 2024",
    date: "February 28, 2024",
    category: "Tech",
    description:
      "Why less is more when it comes to choosing your development environment and tools.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
  },

  {
    slug: "accessible-motion-design",
    title: "Accessible Motion Design",
    date: "February 1, 2024",
    category: "Accessibility",
    description:
      "Creating animations that are beautiful for everyone, including those with vestibular disorders.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800",
  },
];

const labs = [
  {
    title: "Fluid Physics",
    description:
      "Real-time Navier-Stokes simulation for background aesthetics.",
    link: "/labs/fluid",
  },
  {
    title: "LLM Tokenizer",
    description: "Visualizing how machines slice human language.",
    link: "/labs/tokenizer",
  },
];


<style jsx global>{`
  /* ================================
   GLOBAL RESPONSIVE SAFETY (HOME)
   ================================ */

  /* Prevent horizontal scroll everywhere */
  html,
  body {
    max-width: 100%;
    overflow-x: hidden;
  }

  /* Images & media safety */
  img,
  video,
  canvas {
    max-width: 100%;
    height: auto;
  }

  /* ---------- MOBILE (<= 640px) ---------- */
  @media (max-width: 640px) {
    /* Reduce giant spacing */
    .pt-40 {
      padding-top: 6rem !important;
    }
    .mt-40 {
      margin-top: 6rem !important;
    }

    /* Headline scaling */
    h1 {
      font-size: 2.6rem !important;
      line-height: 1.05 !important;
    }

    h2 {
      font-size: 1.6rem !important;
    }

    h3 {
      font-size: 1.25rem !important;
    }

    /* Paragraph readability */
    p {
      font-size: 0.95rem !important;
      line-height: 1.6 !important;
    }

    /* Stack all grids */
    .grid {
      grid-template-columns: 1fr !important;
    }

    /* Cards padding reduction */
    .rounded-\\[2\\.5rem\\],
    .rounded-\\[2rem\\] {
      border-radius: 1.25rem !important;
    }

    /* Disable heavy hover animations */
    .group:hover img {
      transform: none !important;
    }

    /* Buttons full width */
    a.h-16,
    button.h-16 {
      width: 100%;
    }

    /* Reduce emoji / floating image size */
    img[alt="Thumbs Up"] {
      height: 48px !important;
      width: 48px !important;
      right: -8px !important;
      top: -8px !important;
    }
  }

  /* ---------- TABLETS (641px – 1024px) ---------- */
  @media (min-width: 641px) and (max-width: 1024px) {
    h1 {
      font-size: 4rem !important;
    }

    .pt-40 {
      padding-top: 8rem !important;
    }
    .mt-40 {
      margin-top: 8rem !important;
    }

    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    }
  }

  /* ---------- LARGE SCREENS (>= 1536px) ---------- */
  @media (min-width: 1536px) {
    main > div {
      max-width: 1400px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  /* HARD FIX for MagneticText horizontal drift */
  .magnetic-text,
  [data-magnetic] {
    transform: translateX(0) !important;
  }
`}</style>;

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <main className="relative min-h-screen selection:bg-primary/30">
      <Background />
      <Header />

      <div className="mx-auto max-w-6xl px-6 pt-50 -pb-20">
        <section className="flex flex-col items-center justify-center text-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-10 mr-11 flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-sm cursor-pointer hover:bg-primary/10 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Where design meets clean engineering
            </motion.div>
            <motion.img
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 10 }}
              transition={{ delay: 1, duration: 0.5, type: "spring" }}
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/e903baaa-008b-458f-9dda-e2f4e15f4c53/pngtree-thumbs-up-emoji-with-a-smile-expressing-approval-and-positive-attitude-png-image_19847034-removebg-preview-1767499756708.png?width=8000&height=8000&resize=contain"
              alt="Thumbs Up"
              className="absolute -right-12 -top-8 h-20 w-20 pointer-events-none select-none"
            />
          </div>

          <h1
            className="mb-9
    w-full text-center font-black tracking-tight leading-[0.95]
    text-[2.5rem]
    sm:text-[4rem]
    lg:text-[7rem]
  "
          >
            Hi, I’m <br />
            Usman Shaik <br />
            <span className="text-muted-foreground font-semibold">
              Crafting modern, scalable digital experiences
            </span>
          </h1>

          <p className="mb-14 max-w-2xl text-lg text-muted-foreground/80 sm:text-xl font-medium leading-relaxed">
            <MagneticText delay={0.2}>
              I build high-end digital experiences that merge clean aesthetics
              with cutting-edge performance. Specializing in minimalist design
              and interaction.
            </MagneticText>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-6 sm:flex-row"
          >
            <Link
              href="/projects"
              className="group relative flex h-16 items-center justify-center overflow-hidden rounded-full bg-foreground px-10 font-bold text-white dark:text-black transition-all active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work{" "}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/contact"
              className="h-16 flex items-center justify-center rounded-full bg-foreground px-10 font-bold text-white dark:text-black transition-all active:scale-95 hover:bg-foreground/90"
            >
              Let&apos;s Talk
            </Link>
          </motion.div>
        </section>

        <section id="work" className="mt-40 flex flex-col items-center">
          <div className="mb-10 flex flex-col items-center text-center gap-4">
            <div>
              <h2 className="text-6xl font-bold tracking-tight sm:text-6xl">
                <MagneticText>Selected Work</MagneticText>
              </h2>
              <p className="mt-2 text-muted-foreground">
                <MagneticText>
                  A curated list of my favorite projects.
                </MagneticText>
              </p>
            </div>
            <Link
              href="/projects"
              className="flex items-center gap-2 font-bold text-primary transition-colors "
            >
              <MagneticText>View All Projects</MagneticText>{" "}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 w-full max-w-5xl">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-border/50 bg-card/50 transition-all hover:border-primary/20 hover:bg-card/80"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">
                        {project.year}
                      </span>
                      <div className="h-px w-8 bg-white/30" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      <MagneticText>{project.title}</MagneticText>
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <p className="mb-6 flex-1 text-sm text-muted-foreground leading-relaxed">
                    <MagneticText>{project.description}</MagneticText>
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold uppercase tracking-wider text-primary/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="writing" className="mt-40 flex flex-col items-center">
          {/* Section Header */}
          <div className="mb-12 flex flex-col items-center text-center gap-4">
            <div>
              <h2 className="text-3xl font-black tracking-tight sm:text-6xl">
                <MagneticText>Latest Writing</MagneticText>
              </h2>
              <p className="mt-2 text-muted-foreground max-w-xl">
                <MagneticText>
                  Thoughts on design, engineering, and building meaningful
                  digital systems.
                </MagneticText>
              </p>
            </div>

            {/* CTA (safe navigation only here if needed later) */}
            <div className="flex items-center gap-2 font-bold text-primary opacity-70">
              <MagneticText>Articles coming soon</MagneticText>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>

          {/* Writing Grid */}
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl"
          >
            {blogs.map((blog, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="group relative rounded-[2rem] border border-border/40 bg-card/40 p-4 transition-all duration-500
                   hover:border-primary/20 hover:bg-card/60"
              >
                {/* Image */}
                <div className="relative mb-6 aspect-video overflow-hidden rounded-2xl">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Category */}
                  <div
                    className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[10px]
                          font-black uppercase tracking-widest text-black shadow-sm backdrop-blur-sm"
                  >
                    {blog.category}
                  </div>
                </div>

                {/* Content */}
                <div className="px-2">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-px w-4 bg-primary/30" />
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                      {blog.date}
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-bold leading-tight tracking-tight group-hover:text-primary transition-colors">
                    <MagneticText>{blog.title}</MagneticText>
                  </h3>

                  <p className="line-clamp-2 text-sm text-muted-foreground/80 leading-relaxed">
                    <MagneticText>{blog.description}</MagneticText>
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="notes" className="mt-15 flex flex-col items-center">
          <div className="mb-10 flex flex-col items-center text-center gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-6xl">
                <MagneticText>Recent Notes</MagneticText>
              </h2>
              <p className="mt-2 text-muted-foreground">
                <MagneticText>
                  Short insights and quick observations.
                </MagneticText>
              </p>
            </div>
            <Link
              href="/notes"
              className="flex items-center gap-2 font-bold text-primary transition-colors "
            >
              <MagneticText>View All Notes</MagneticText>{" "}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
            {[
              "Good design is invisible. The best interfaces disappear, leaving users alone with their goals.",
              "Premature optimization is the root of all evil. Ship first, measure second, optimize third.",
              "The constraint of a small screen forces clarity. Mobile-first isn't just responsive—it's reductive thinking.",
              "Animation should feel like breathing: present but unnoticed. The moment you see it, you've overdone it.",
            ].map((note, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl border border-border/40 bg-card/40 p-6 transition-all hover:border-primary/20 hover:bg-card/60"
              >
                <Bookmark className="mb-4 h-4 w-4 text-primary/40" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <MagneticText>{note}</MagneticText>
                </p>
              </motion.div>
            ))}
          </div>
        </section>

       

  
        <section id="contact" className="mt-40 mb-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-7xl">
              <MagneticText>
                Let&apos;s build something extraordinary together.
              </MagneticText>
            </h2>
            <p className="mb-12 text-lg text-muted-foreground sm:text-xl">
              <MagneticText delay={0.2}>
                I&apos;m currently taking on new projects and collaborations.
                Whether you have a fully-formed idea or just a spark, I&apos;d
                love to hear from you.
              </MagneticText>
            </p>
            {/* <div className="flex flex-wrap justify-center gap-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  href: "mailto:hello@shaik.design",
                },
                { icon: Github, label: "GitHub", href: "https://github.com" },
                {
                  icon: Twitter,
                  label: "Twitter",
                  href: "https://twitter.com",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://linkedin.com",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background transition-all hover:scale-[1.05] hover:bg-primary hover:text-white"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div> */}
          </div>
        </section>
      </div>
    </main>
  );
}
