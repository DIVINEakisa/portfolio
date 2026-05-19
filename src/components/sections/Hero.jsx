import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react";
import ButtonLink from "../ui/ButtonLink.jsx";
import Reveal from "../ui/Reveal.jsx";
import { owner } from "../../data/portfolio.js";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-mist dark:bg-secondary">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="animated-band absolute left-0 top-20 -z-10 h-72 w-full rotate-[-6deg] animate-gradient-shift opacity-90 blur-2xl dark:opacity-70" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white to-transparent dark:from-darkgray" aria-hidden="true" />

      <div className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-14 pt-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal className="inline-flex items-center gap-2 rounded-full border border-primary/[0.15] bg-white/[0.78] px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur dark:border-cyan-300/20 dark:bg-white/[0.08] dark:text-cyan-200">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {owner.title}
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.08] text-ink sm:text-5xl lg:text-5xl 2xl:text-6xl dark:text-white">
              {owner.headline}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {owner.subheading}
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#projects" icon={ArrowRight}>View Projects</ButtonLink>
            <ButtonLink href="/akisa-divine-resume.txt" icon={Download} variant="secondary" download>
              Download Resume
            </ButtonLink>
            <ButtonLink href="#contact" icon={Mail} variant="ghost">Contact Me</ButtonLink>
          </Reveal>

          <Reveal delay={320} className="mt-9 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm dark:bg-white/[0.08]">
              <MapPin className="h-4 w-4 text-primary dark:text-cyan-300" aria-hidden="true" />
              {owner.location}
            </span>
            <span className="inline-flex items-center rounded-full bg-white/80 px-4 py-2 shadow-sm dark:bg-white/[0.08]">
              {owner.role}
            </span>
          </Reveal>
        </div>

        <Reveal delay={180} className="relative mx-auto w-full max-w-[440px] lg:ml-auto">
          <div className="absolute inset-x-10 top-8 -z-10 h-24 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl" aria-hidden="true" />
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-5">
            <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-secondary via-primary to-accent p-1">
              <div className="flex h-full flex-col items-center justify-center rounded-[1.25rem] bg-white/90 p-8 text-center dark:bg-secondary/[0.92]">
                <div className="grid h-40 w-40 place-items-center rounded-full border border-white/70 bg-gradient-to-br from-primary to-accent text-5xl font-black text-white shadow-glow">
                  AD
                </div>
                <h2 className="mt-8 text-2xl font-bold text-ink dark:text-white">
                  {owner.name}
                </h2>
                <p className="mt-2 text-sm font-semibold text-primary dark:text-cyan-200">
                  {owner.nickname}
                </p>
                <p className="mt-4 max-w-xs text-sm leading-7 text-muted dark:text-slate-300">
                  Profile image placeholder ready for a professional photo.
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {["React", "Node", "SQL"].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-3 py-4 text-center text-sm font-bold text-ink dark:bg-white/[0.08] dark:text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
