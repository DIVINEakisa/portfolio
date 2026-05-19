import { Code2, Database, Server, Wrench } from "lucide-react";
import SectionHeader from "../ui/SectionHeader.jsx";
import Badge from "../ui/Badge.jsx";
import Reveal from "../ui/Reveal.jsx";
import { skillGroups } from "../../data/portfolio.js";

const icons = {
  layout: Code2,
  server: Server,
  database: Database,
  tool: Wrench
};

export default function Skills() {
  return (
    <section id="skills" className="bg-mist dark:bg-secondary">
      <div className="section-shell">
        <SectionHeader
          align="center"
          eyebrow="Skills"
          title="A balanced toolkit for front-end and full-stack learning."
          description="Core technologies are grouped by how they support practical application development."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon];

            return (
              <Reveal
                key={group.title}
                delay={index * 90}
                className="group rounded-3xl border border-white bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-glow dark:border-white/10 dark:bg-white/[0.05] dark:hover:border-cyan-300/40"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white transition group-hover:scale-105">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500 dark:bg-white/[0.08] dark:text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-ink dark:text-white">{group.title}</h3>
                <p className="mt-3 min-h-20 text-sm leading-7 text-muted dark:text-slate-300">
                  {group.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
