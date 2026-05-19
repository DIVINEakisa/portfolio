import { Github, Linkedin, Mail } from "lucide-react";
import { owner, socialLinks } from "../../data/portfolio.js";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail
};

export default function Footer({ navItems }) {
  return (
    <footer className="border-t border-slate-200 bg-mist dark:border-white/10 dark:bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <a href="#home" className="focus-ring inline-flex items-center gap-3 rounded-full">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
              AD
            </span>
            <span>
              <span className="block text-sm font-bold text-ink dark:text-white">{owner.name}</span>
              <span className="block text-xs text-muted dark:text-slate-400">{owner.title}</span>
            </span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-7 text-muted dark:text-slate-400">
            Building practical software, learning deeply, and preparing for developer opportunities.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-ink dark:text-white">Quick links</h2>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring w-fit rounded-full text-sm font-medium text-muted transition hover:text-primary dark:text-slate-400 dark:hover:text-cyan-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-ink dark:text-white">Connect</h2>
          <div className="mt-4 flex gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary dark:border-white/10 dark:bg-white/[0.08] dark:text-slate-300 dark:hover:text-cyan-200"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-sm text-muted dark:border-white/10 dark:text-slate-500">
        &copy; {new Date().getFullYear()} Akisa Divine. All rights reserved.
      </div>
    </footer>
  );
}
