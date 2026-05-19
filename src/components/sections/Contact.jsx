import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import SectionHeader from "../ui/SectionHeader.jsx";
import Reveal from "../ui/Reveal.jsx";
import { owner } from "../../data/portfolio.js";

const contacts = [
  { label: "Email", value: owner.email, href: `mailto:${owner.email}`, icon: Mail },
  { label: "GitHub", value: "github.com/akisa-divine", href: owner.github, icon: Github },
  { label: "LinkedIn", value: "linkedin.com/in/akisa-divine", href: owner.linkedin, icon: Linkedin },
  { label: "Location", value: owner.location, href: "#contact", icon: MapPin }
];

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("Thanks for reaching out. This demo form is ready to connect to a backend or form service.");
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="bg-white dark:bg-darkgray">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contact"
          title="Open to internship conversations and developer opportunities."
          description="Use the form or social links to connect about projects, collaboration, or learning opportunities."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="grid gap-4">
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="focus-ring group flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary/30 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-cyan-300/30"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-muted dark:text-slate-400">{item.label}</span>
                  <span className="mt-1 block font-bold text-ink transition group-hover:text-primary dark:text-white dark:group-hover:text-cyan-200">
                    {item.value}
                  </span>
                </span>
              </a>
            ))}
          </Reveal>

          <Reveal delay={120} className="glass-card rounded-3xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-ink dark:text-white">
                  Name
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="focus-ring min-h-12 rounded-2xl border border-slate-200 bg-white px-4 text-base font-normal text-ink transition placeholder:text-slate-400 focus:border-primary dark:border-white/10 dark:bg-secondary dark:text-white"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-ink dark:text-white">
                  Email
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="focus-ring min-h-12 rounded-2xl border border-slate-200 bg-white px-4 text-base font-normal text-ink transition placeholder:text-slate-400 focus:border-primary dark:border-white/10 dark:bg-secondary dark:text-white"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold text-ink dark:text-white">
                Subject
                <input
                  required
                  name="subject"
                  type="text"
                  placeholder="Project or opportunity"
                  className="focus-ring min-h-12 rounded-2xl border border-slate-200 bg-white px-4 text-base font-normal text-ink transition placeholder:text-slate-400 focus:border-primary dark:border-white/10 dark:bg-secondary dark:text-white"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-ink dark:text-white">
                Message
                <textarea
                  required
                  name="message"
                  rows="5"
                  placeholder="Tell me what you would like to discuss"
                  className="focus-ring resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-normal text-ink transition placeholder:text-slate-400 focus:border-primary dark:border-white/10 dark:bg-secondary dark:text-white"
                />
              </label>

              <button
                type="submit"
                className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 sm:w-fit"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Send Message
              </button>

              {status ? (
                <p className="rounded-2xl bg-primary/[0.08] px-4 py-3 text-sm font-semibold text-primary dark:bg-cyan-300/10 dark:text-cyan-200" role="status">
                  {status}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
