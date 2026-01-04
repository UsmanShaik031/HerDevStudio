"use client";

import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { MagneticText } from "./magnetic-text";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/50 bg-background/50 py-12 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-xl font-bold uppercase tracking-widest">
              <MagneticText>Shaik</MagneticText>
            </h3>
            <p className="text-sm text-muted-foreground">
              <MagneticText>&copy; 2024 Shaik. Built with passion and Next.js.</MagneticText>
            </p>
          </div>

          <div className="flex items-center gap-6">
            {[
              { icon: Mail, label: "Email", href: "mailto:hello@shaik.design" },
              { icon: Github, label: "GitHub", href: "https://github.com" },
              { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
              { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:bg-primary hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="h-5 w-5" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 rounded bg-foreground px-2 py-1 text-[10px] text-background transition-transform group-hover:scale-100">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
