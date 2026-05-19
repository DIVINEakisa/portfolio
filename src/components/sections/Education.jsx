import { BookOpen, GraduationCap } from "lucide-react";
import SectionHeader from "../ui/SectionHeader.jsx";
import Reveal from "../ui/Reveal.jsx";
import { education } from "../../data/portfolio.js";

export default function Education() {
  return (
    <section id="education" className="bg-mist dark:bg-secondary">
      <div className="section-shell">
        <SectionHeader
          align="center"
          eyebrow="Education"
          title="Information Technology studies with a clear developer direction."
          description="A simple timeline that shows current academic focus and continued full-stack growth."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-accent to-transparent sm:block" aria-hidden="true" />
          <div className="grid gap-6">
            {education.map((item, index) => (
              <Reveal key={item.program} delay={index * 100} className="relative sm:pl-16">
                <div className="absolute left-0 top-7 hidden h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-glow sm:grid">
                  {index === 0 ? <GraduationCap className="h-6 w-6" /> : <BookOpen className="h-6 w-6" />}
                </div>
                <div className="glass-card rounded-3xl p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-bold text-primary dark:text-cyan-300">{item.period}</p>
                      <h3 className="mt-2 text-2xl font-bold text-ink dark:text-white">{item.program}</h3>
                    </div>
                    <span className="w-fit rounded-full bg-secondary px-4 py-2 text-sm font-bold text-white dark:bg-white/10">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-5 leading-8 text-muted dark:text-slate-300">{item.focus}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
