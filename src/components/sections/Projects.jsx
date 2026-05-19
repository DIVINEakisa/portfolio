import { ArrowRight, Droplets, ExternalLink, Github, Users } from "lucide-react";
import SectionHeader from "../ui/SectionHeader.jsx";
import Badge from "../ui/Badge.jsx";
import ButtonLink from "../ui/ButtonLink.jsx";
import Reveal from "../ui/Reveal.jsx";
import { projects } from "../../data/portfolio.js";

const projectIcons = [Users, Droplets];

export default function Projects() {
  return (
    <section id="projects" className="bg-white dark:bg-darkgray">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Practical projects shaped around real problems."
          description="Each project highlights context, action, and result so internship reviewers can quickly understand the value and technical direction."
        />

        <div className="grid gap-7">
          {projects.map((project, index) => {
            const VisualIcon = projectIcons[index] || Users;

            return (
              <Reveal
                key={project.title}
                delay={index * 120}
                className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary/30 dark:border-white/10 dark:bg-white/[0.04] lg:grid-cols-[0.92fr_1.08fr]"
              >
                <div className="relative min-h-72 overflow-hidden bg-secondary p-6 text-white">
                  <div className="animated-band absolute inset-0 animate-gradient-shift opacity-70" aria-hidden="true" />
                  <div className="relative flex h-full min-h-64 flex-col justify-between rounded-3xl border border-white/[0.15] bg-white/[0.08] p-6 backdrop-blur">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-white/[0.14] px-4 py-2 text-sm font-semibold">
                        {project.type}
                      </span>
                      <VisualIcon className="h-7 w-7 text-cyan-200" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="mb-5 grid h-20 w-20 place-items-center rounded-3xl bg-white text-primary">
                        <VisualIcon className="h-9 w-9" aria-hidden="true" />
                      </div>
                      <p className="text-sm font-semibold text-cyan-100">{project.imageLabel}</p>
                      <h3 className="mt-3 text-2xl font-black leading-tight">{project.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="grid gap-5">
                    <ProjectPoint label="Context" text={project.problem} />
                    <ProjectPoint label="Action" text={project.approach} />
                    <ProjectPoint label="Result" text={project.result} />
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <ButtonLink href={project.github} target="_blank" variant="secondary" icon={Github}>
                      GitHub
                    </ButtonLink>
                    <ButtonLink href={project.demo} variant="secondary" icon={ExternalLink}>
                      Live Demo
                    </ButtonLink>
                    <ButtonLink href="#contact" variant="primary" icon={ArrowRight}>
                      View Details
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectPoint({ label, text }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-normal text-primary dark:text-cyan-300">
        {label}
      </p>
      <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">{text}</p>
    </div>
  );
}
