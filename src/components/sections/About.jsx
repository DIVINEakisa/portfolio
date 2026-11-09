import { Code2, Lightbulb, Target } from "lucide-react";
import SectionHeader from "../ui/SectionHeader.jsx";
import Reveal from "../ui/Reveal.jsx";
import { owner } from "../../data/portfolio.js";

const highlights = [
  {
    icon: Code2,
    title: "Full-stack development",
    text: "Specialized in React, TypeScript, Node.js, NestJS, and modern databases — building end-to-end web applications."
  },
  {
    icon: Lightbulb,
    title: "AI-powered solutions",
    text: "Passionate about Generative AI and building human-centered software that improves healthcare accessibility and mental wellness."
  },
  {
    icon: Target,
    title: "Real-world impact",
    text: "Every project is built around a real problem — from maternal nutrition platforms to agricultural decision-support tools."
  }
];

export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-darkgray">
      <div className="section-shell">
        <SectionHeader
          eyebrow="About"
          title="A software developer with a practical, user-first mindset."
          description="Divine Akisa is a full-stack developer building accessible, AI-powered digital solutions that solve real-world problems in healthcare, agriculture, and beyond."
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="glass-card rounded-3xl p-7 sm:p-8">
            <p className="text-lg leading-9 text-slate-700 dark:text-slate-300">
              {owner.bio}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-primary/[0.08] p-5 dark:bg-cyan-300/10">
                <p className="text-sm font-semibold text-muted dark:text-slate-400">Location</p>
                <p className="mt-2 text-lg font-bold text-ink dark:text-white">{owner.location}</p>
              </div>
              <div className="rounded-2xl bg-secondary p-5 text-white">
                <p className="text-sm font-semibold text-slate-300">Role</p>
                <p className="mt-2 text-lg font-bold">{owner.role}</p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {highlights.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 100}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary/30 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-cyan-300/30"
              >
                <div className="flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-glow">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink dark:text-white">{item.title}</h3>
                    <p className="mt-2 leading-7 text-muted dark:text-slate-300">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
