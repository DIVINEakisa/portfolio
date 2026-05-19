export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/[0.15] bg-primary/[0.08] px-3 py-1 text-xs font-semibold text-primary dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200">
      {children}
    </span>
  );
}
