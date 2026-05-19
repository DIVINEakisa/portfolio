export default function ButtonLink({
  href,
  children,
  variant = "primary",
  icon: Icon,
  download,
  target
}) {
  const variants = {
    primary:
      "bg-primary text-white shadow-glow hover:-translate-y-0.5 hover:bg-blue-700",
    secondary:
      "border border-slate-200 bg-white text-ink hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary dark:border-white/10 dark:bg-white/[0.08] dark:text-white dark:hover:border-cyan-300/40 dark:hover:text-cyan-200",
    ghost:
      "text-primary hover:bg-primary/[0.08] dark:text-cyan-200 dark:hover:bg-white/[0.08]"
  };

  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className={`focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${variants[variant]}`}
    >
      {Icon ? <Icon aria-hidden="true" className="h-4 w-4" /> : null}
      {children}
    </a>
  );
}
