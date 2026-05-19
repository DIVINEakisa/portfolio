import Reveal from "./Reveal.jsx";

export default function SectionHeader({ eyebrow, title, description, align = "left" }) {
  const centered = align === "center";

  return (
    <Reveal
      className={`mb-12 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-normal text-primary dark:text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-muted dark:text-slate-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
