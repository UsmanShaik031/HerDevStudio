"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { ThemeToggle } from "@/components/theme-toggle";
import { Background } from "@/components/background";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { MagneticText } from "@/components/magnetic-text";

const projects = [
  {
    title: "Quran Full-Stack Platform ⭐",
    year: "2025",
    description: "Built a full-stack Quran platform with complete Surah and Juz organization, designed for structured reading and smooth navigation. Focused on clean UI, respectful presentation, scalability, and performance for a distraction-free reading experience.",
    tags: ["Full-Stack Web Development", "JavaScript", "Structured Content Systems"],
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "Nirbhitha – Women Safety Application",
    year: "2023",
    description: "Developed a comprehensive women safety application with a wide range of emergency-focused features. Designed for real-time alerts, safety workflows, and reliability during critical situations, with emphasis on speed, clarity, and system robustness.",
    tags: ["Full-Stack Web Technologies", "Real-Time Systems", "Cloud", "Safety Systems"],
    image: "https://images.unsplash.com/photo-1623156346149-d5bc8bd29670?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "MultiPORTAL – Futuristic AI Platform",
    year: "2025",
    description: "Built a futuristic AI-driven multi-portal platform with complete voice-over interaction and chatbot functionality. Designed to support multiple AI assistants, real-time conversations, and intelligent responses using a full-stack React architecture.",
    tags: ["React.js", "Full-Stack JavaScript", "AI", "Voice Processing", "Chatbots"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "AI-Based Auto SRE System",
    year: "2026",
    description: "Developed a self-healing SRE platform that processes monitoring alerts, detects anomalies, and tracks remediation status in real time using AI-driven workflows. Designed to reduce manual intervention and improve system reliability.",
    tags: ["NestJS", "Python", "Prometheus", "Grafana", "AI"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "DevOps Operations Dashboard",
    year: "2025",
    description: "Built an end-to-end full-stack web application to monitor Kubernetes clusters, CI/CD pipelines, production alerts, and overall system health using SRE reliability metrics. Focused on observability and operational visibility.",
    tags: ["React.js", "Node.js", "Kubernetes", "Jenkins", "Docker"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "Neural Network Simulation Platform",
    year: "2024",
    description: "Built an interactive platform to simulate neural networks and visualize how nodes, layers, and signals interact. Focused on explaining neural behavior, learning patterns, and data flow through simulations.",
    tags: ["Neural Networks", "Simulation Systems", "JavaScript", "Data Visualization"],
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "Neuro Response Simulation Project",
    year: "2024",
    description: "Developed a neuro-inspired simulation platform modeling how the brain reacts to different situations. Focused on stimulus-response behavior, decision paths, and reaction intensity under varying conditions.",
    tags: ["Neuro Simulation", "System Modeling", "JavaScript", "Data Visualization"],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "3D Smart Home Environment (Three.js)",
    year: "2023",
    description: "Developed a fully interactive 3D home environment including hall and room layouts using Three.js. Implemented functional interactions, camera controls, and real-time state changes to simulate smart home behavior.",
    tags: ["Three.js", "JavaScript", "3D Graphics", "Interactive Systems"],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "AI Interview Simulator",
    year: "2025",
    description: "Built a full-stack AI-powered interview simulation platform supporting one-to-one and panel interview scenarios with face and voice interaction and automated performance evaluation reports.",
    tags: ["React.js", "Node.js", "Generative AI", "WebRTC"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "Future AI Assistant System",
    year: "2023",
    description: "Built a full-stack Java-based AI assistant capable of responding to both text and voice commands. Implemented intelligent request handling for technical and general-purpose assistance.",
    tags: ["Java", "Spring Boot", "NLP", "Voice Processing"],
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "Health Monitoring System",
    year: "2022",
    description: "Built a full-stack Java-based health monitoring platform to track user health parameters and visualize trends. Implemented secure data handling and real-time dashboards.",
    tags: ["Java", "Spring Boot", "IoT", "Data Visualization"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "Theatre Food Ordering System",
    year: "2022",
    description: "Built a full-stack Java web application enabling seat-based food ordering inside theatres. Implemented real-time order tracking along with admin and vendor dashboards.",
    tags: ["Java", "Spring Boot", "MySQL", "Real-time Systems"],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "StrictBuzz Cricket Platform",
    year: "2021",
    description: "Developed a full-stack Java-based cricket analytics and engagement platform with match insights, player statistics, and interactive user features.",
    tags: ["Java", "Spring Boot", "MySQL", "Analytics"],
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "Typing Speed Test Platform",
    year: "2021",
    description: "Developed a full-stack Java application to measure typing speed, accuracy, and error rate in real time with analytics and user history tracking.",
    tags: ["Java", "Spring Boot", "MySQL", "JavaScript"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "Developer Diary Application",
    year: "2021",
    description: "Developed a full-stack Java web application for developers to log daily work, learning progress, issues, and solutions with secure authentication and searchable records.",
    tags: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "#"
  },
  {
    title: "Alkimi Hackathon Project (SUI)",
    year: "2024",
    description: "Developed a full-stack Java-oriented application during the Alkimi Hackathon using the SUI ecosystem, focusing on rapid prototyping, scalability, and real-world problem solving.",
    tags: ["Java", "SUI Ecosystem", "Cloud Architecture"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
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

                    <div className="flex gap-4">
                      <Link
                        href={project.link}
                        className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:scale-105"
                      >
                        View Project
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    <Link
                      href={project.github}
                      className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
                    >
                      <Github className="h-4 w-4" />
                      Source
                    </Link>
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
