export default function Reveal({ as: Component = "div", delay = 0, className = "", children }) {
  return (
    <Component
      data-reveal
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
