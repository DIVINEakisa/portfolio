import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { owner } from "../../data/portfolio.js";

export default function Navbar({ navItems, theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        hasScrolled
          ? "border-b border-slate-200/80 bg-white/[0.88] shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-secondary/[0.82]"
          : "bg-white/[0.76] backdrop-blur-lg dark:bg-secondary/[0.72]"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-full">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-sm font-bold text-white shadow-glow">
            {owner.initials}
          </span>
          <span>
            <span className="block text-sm font-bold text-ink dark:text-white">{owner.name}</span>
            <span className="block text-xs text-muted dark:text-slate-400">University IT Student</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-primary dark:text-slate-300 dark:hover:bg-white/[0.08] dark:hover:text-cyan-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary dark:border-white/10 dark:bg-white/[0.08] dark:text-slate-200 dark:hover:text-cyan-200"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-primary/30 hover:text-primary dark:border-white/10 dark:bg-white/[0.08] dark:text-slate-200 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-5 py-4 shadow-lg dark:border-white/10 dark:bg-secondary lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="focus-ring rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-primary dark:text-slate-200 dark:hover:bg-white/[0.08] dark:hover:text-cyan-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
