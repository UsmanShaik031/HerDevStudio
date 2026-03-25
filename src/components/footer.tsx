"use client";

import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { MagneticText } from "./magnetic-text";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-40 border-t border-border/40 bg-background/60 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-8 py-20">
        <div className="flex flex-col gap-14 md:flex-row md:items-center md:justify-between">
          {/* Brand / Identity */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black uppercase tracking-[0.35em]">
              <MagneticText>Her Dev Studio</MagneticText>
            </h3>

            <p className="mt-4 max-w-md text-base text-muted-foreground leading-relaxed">
              <MagneticText>
                Full-Stack Developer & DevOps Engineer — building scalable,
                high-performance digital products with modern web technologies.
              </MagneticText>
            </p>

            <p className="mt-6 text-sm uppercase tracking-[0.25em] text-muted-foreground/70">
              © {currentYear} · All rights reserved
            </p>
          </div>

          {/* Social / Contact */}
          <div className="flex flex-col items-center gap-10 md:items-end">
            <div className="flex items-center gap-6">
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-14 w-14 items-center justify-center rounded-full
                             border border-border/60 bg-background/70 transition-all
                             hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="h-7 w-7" />

                  {/* Tooltip */}
                  <span
                    className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2
                                   scale-0 rounded-md bg-foreground px-3 py-1.5 text-xs
                                   uppercase tracking-widest text-background
                                   transition-transform group-hover:scale-100"
                  >
                    {social.label}
                  </span>
                </a>
              ))}
            </div>

            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground/60">
              Let’s build something meaningful
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
