"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { ThemeToggle } from "@/components/theme-toggle";
import { Background } from "@/components/background";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { MagneticText } from "@/components/magnetic-text";

const projects = [
  // 2026
  {
    title: "Quran Full-Stack Platform ⭐",
    year: "2026",
    description:
      "Designed and built a production-grade full-stack Quran platform with complete Surah and Juz structuring. Focused on distraction-free reading, respectful UI/UX, optimized navigation, and scalable content architecture for long-term growth.",
    tags: ["Full-Stack Web Development", "JavaScript", "Structured Content Systems"],
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },

  // 2025
  {
    title: "Nirbhitha – Women Safety Application",
    year: "2025",
    description:
      "Built a mission-critical women safety platform designed for emergency situations, featuring real-time alerts, fast-trigger safety workflows, and reliability-focused UX to function effectively under stress and low-connectivity scenarios.",
    tags: ["Full-Stack Web Technologies", "Real-Time Systems", "Cloud", "Safety Systems"],
    image: "https://bewitness.world/wp-content/uploads/2023/05/Teen-Girls.jpg",
    link: "#",
    github: "#"
  },
  {
    title: "AI-Based Auto SRE System",
    year: "2025",
    description:
      "Engineered an AI-driven self-healing SRE platform capable of analyzing alerts, detecting anomalies, triggering remediation workflows, and tracking incident resolution to reduce manual operational overhead.",
    tags: ["NestJS", "Python", "Prometheus", "Grafana", "AI"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "DevOps Operations Dashboard",
    year: "2025",
    description:
      "Developed a centralized DevOps and SRE dashboard to monitor Kubernetes clusters, CI/CD pipelines, system health, and production alerts with a strong focus on observability and operational visibility.",
    tags: ["React.js", "Node.js", "Kubernetes", "Jenkins", "Docker"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "3D Smart Home Environment (Three.js)",
    year: "2025",
    description:
      "Created a fully interactive 3D smart home simulation using Three.js, featuring room-level navigation, camera controls, and real-time state changes to demonstrate smart device behavior visually.",
    tags: ["Three.js", "JavaScript", "3D Graphics", "Interactive Systems"],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "AI Interview Simulator",
    year: "2025",
    description:
      "Built an AI-powered interview simulation platform supporting one-on-one and panel interviews with voice and facial interaction, along with automated feedback and performance evaluation reports.",
    tags: ["React.js", "Node.js", "Generative AI", "WebRTC"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "Developer Diary Application",
    year: "2025",
    description:
      "Developed a secure full-stack diary platform for developers to log daily work, learning progress, issues, and solutions with authentication, search, and structured records.",
    tags: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "Alkimi Hackathon Project (SUI)",
    year: "2025",
    description:
      "Rapidly designed and implemented a full-stack prototype during the Alkimi Hackathon using the SUI ecosystem, focusing on scalability, clean architecture, and real-world problem solving under time constraints.",
    tags: ["Java", "SUI Ecosystem", "Cloud Architecture"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },

  // 2024
  {
    title: "MultiPORTAL – Futuristic AI Platform",
    year: "2024",
    description:
      "Built a futuristic AI-driven multi-portal platform supporting multiple AI assistants with real-time chatbot conversations, voice interaction, and modular frontend architecture.",
    tags: ["React.js", "AI", "Voice Processing", "Chatbots"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "Neural Network Simulation Platform",
    year: "2024",
    description:
      "Developed an interactive visualization platform to demonstrate how neural networks process data across layers, nodes, and connections for educational and exploratory purposes.",
    tags: ["Neural Networks", "JavaScript", "Data Visualization"],
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "Neuro Response Simulation Project",
    year: "2024",
    description:
      "Designed a neuro-inspired simulation system to model stimulus-response behavior, decision paths, and reaction intensity under varying conditions.",
    tags: ["Neuro Simulation", "System Modeling", "JavaScript"],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "StrictBuzz Cricket Platform",
    year: "2024",
    description:
      "Built a cricket analytics and engagement platform offering match insights, player statistics, and interactive features with a strong backend-driven architecture.",
    tags: ["Java", "Spring Boot", "MySQL", "Analytics"],
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "Typing Speed Test Platform",
    year: "2024",
    description:
      "Developed a real-time typing speed and accuracy measurement platform with analytics, error tracking, and user performance history.",
    tags: ["Java", "Spring Boot", "MySQL", "JavaScript"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },

  // 2023
  {
    title: "Future AI Assistant System",
    year: "2023",
    description:
      "Built a Java-based AI assistant capable of handling both text and voice commands with intelligent request routing for technical and general-purpose assistance.",
    tags: ["Java", "Spring Boot", "NLP", "Voice Processing"],
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },

  // 2022
  {
    title: "Health Monitoring System",
    year: "2022",
    description:
      "Developed a full-stack health monitoring platform to track user health parameters, visualize trends, and securely manage sensitive medical data.",
    tags: ["Java", "Spring Boot", "IoT", "Data Visualization"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "Theatre Food Ordering System",
    year: "2022",
    description:
      "Built a seat-based food ordering system for theatres with real-time order tracking, vendor dashboards, and efficient order management workflows.",
    tags: ["Java", "Spring Boot", "MySQL", "Real-time Systems"],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  }
];


export default function ProjectsPage() {
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
            <MagneticText>Projects</MagneticText>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            <MagneticText>Selected work from the past few years. Each project represents a deep dive into solving real problems.</MagneticText>
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="group"
            >
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border/50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </div>

                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="mb-4 flex items-center gap-4">
                    <span className="text-sm font-medium text-muted-foreground">{project.year}</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>

                  <h2 className="mb-4 text-3xl font-bold tracking-tight transition-colors group-hover:text-primary sm:text-4xl">
                    <MagneticText>{project.title}</MagneticText>
                  </h2>

                  <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
                    <MagneticText>{project.description}</MagneticText>
                  </p>

                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium"
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
      </div>
    </main>
  );
}
