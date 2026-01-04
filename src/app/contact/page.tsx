"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { ThemeToggle } from "@/components/theme-toggle";
import { Background } from "@/components/background";
import { Mail, Github, Twitter, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { MagneticText } from "@/components/magnetic-text";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main className="relative min-h-screen">
      <Background />
      <Header />

      <div className="mx-auto max-w-4xl px-6 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <MagneticText>Let&apos;s Build Together</MagneticText>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              <MagneticText>Have a project in mind? I&apos;d love to hear about it. Drop me a message and let&apos;s create something extraordinary.</MagneticText>
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="mb-6 text-xl font-bold">
                <MagneticText>Send a Message</MagneticText>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full resize-none rounded-xl border border-border bg-card/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 font-bold text-primary-foreground transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:pl-8"
            >
              <h2 className="mb-6 text-xl font-bold">
                <MagneticText>Other Ways to Connect</MagneticText>
              </h2>

              <div className="mb-8 space-y-4">
                <a
                  href="mailto:hello@nova.design"
                  className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/30 p-4 transition-all hover:border-primary/20 hover:bg-card/60"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">
                      <MagneticText>Email</MagneticText>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <MagneticText>usmanshaiik2003@gmail.com</MagneticText>
                    </p>
                  </div>
                </a>

                

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/30 p-4 transition-all hover:border-primary/20 hover:bg-card/60"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">
                      <MagneticText>GitHub</MagneticText>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <MagneticText>usmanshaik</MagneticText>
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/usman-shaiik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/30 p-4 transition-all hover:border-primary/20 hover:bg-card/60"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">
                      <MagneticText>LinkedIn</MagneticText>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <MagneticText>Usman Shaik</MagneticText>
                    </p>
                  </div>
                </a>
              </div>

            </motion.div>
        </div>
      </div>
    </main>
  );
}
