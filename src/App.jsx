import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import Projects from "./components/sections/Projects.jsx";
import Education from "./components/sections/Education.jsx";
import Contact from "./components/sections/Contact.jsx";
import { useTheme } from "./hooks/useTheme.js";
import { useReveal } from "./hooks/useReveal.js";
import { navItems } from "./data/portfolio.js";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  useReveal();

  return (
    <div className="min-h-screen bg-white text-ink antialiased transition-colors duration-300 dark:bg-darkgray dark:text-slate-100">
      <Navbar navItems={navItems} theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer navItems={navItems} />
    </div>
  );
}
