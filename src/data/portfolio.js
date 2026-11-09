export const owner = {
  name: "Divine Akisa",
  initials: "AD",
  role: "Software Developer | Full-Stack Developer",
  title: "Full-Stack Developer & AI Enthusiast",
  location: "Kigali, Rwanda",
  email: "akisadivine11@gmail.com",
  phone: "+250792502568",
  github: "https://github.com/DIVINEakisa",
  linkedin: "https://www.linkedin.com/in/divine-akisa-b18802399",
  instagram: "https://www.instagram.com/acsah_divin",
  profileImage: "/profile-divine-akisa.jpg",
  bio:
    "I am a software developer passionate about building accessible, AI-powered digital solutions that solve real-world problems. I specialize in full-stack web development and enjoy creating practical, user-centered applications — from healthcare platforms to data-driven tools with real social impact.",
  headline:
    "Building modern web experiences and solving real-world problems through technology.",
  subheading:
    "Full-Stack Developer specializing in React, TypeScript, Node.js, NestJS, and AI-powered applications."
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "layout",
    description: "Responsive, accessible interfaces built with modern component-based architecture.",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Tailwind CSS"]
  },
  {
    title: "Backend",
    icon: "server",
    description: "Scalable server-side logic, REST APIs, and backend application architecture.",
    skills: ["Node.js", "NestJS", "Express.js", "RESTful APIs", "PHP"]
  },
  {
    title: "Database",
    icon: "database",
    description: "Structured data modeling, querying, and application storage.",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQL", "Drizzle ORM"]
  },
  {
    title: "Tools & AI",
    icon: "tool",
    description: "Development workflow, containerization, and AI-powered application development.",
    skills: ["Git", "GitHub", "Docker", "Postman", "Generative AI", "Prompt Engineering"]
  }
];

export const projects = [
  {
    title: "Kura 🌱",
    type: "Maternal & Child Nutrition Platform",
    imageLabel: "Every Stage. Every Mother. Every Child.",
    problem:
      "Mothers and children in Rwanda lack a unified digital platform that supports the full nutrition journey — from pre-conception and pregnancy through breastfeeding, complementary feeding, and early childhood.",
    approach:
      "Built a multi-organization maternal and child nutrition platform using Next.js 16 (App Router), TypeScript, PostgreSQL, and Drizzle ORM. Designed as an installable PWA with Recharts-powered dashboards and Tailwind CSS 4 for a clean, responsive UI.",
    result:
      "A production-ready platform deployed on Vercel that helps mothers and healthcare organizations track and support nutrition at every stage of early life. 'Kura' means 'grow' in Kinyarwanda.",
    stack: ["Next.js 16", "TypeScript", "PostgreSQL", "Drizzle ORM", "Tailwind CSS 4", "Recharts", "PWA"],
    github: "https://github.com/DIVINEakisa/Kura.git",
    demo: "https://kura-neza.vercel.app/"
  },
  {
    title: "Musaruro 🌾",
    type: "Agricultural Decision-Support Tool",
    imageLabel: "Know Your Yield, Act in Time.",
    problem:
      "Farmers, agricultural extension officers, and planners in Rwanda lack accessible tools to interpret NISR agricultural statistics and satellite rainfall data at the district level.",
    approach:
      "Transformed NISR agricultural statistics and satellite rainfall data into an interactive district-level decision-support tool. Built for the NISR Big Data Hackathon 2026 (Track 1: Agricultural Productivity), the platform surfaces where crop yields fall below national averages, where irrigation gaps exist, and when rainfall patterns are anomalous.",
    result:
      "A live data application deployed on Streamlit that empowers users to identify underperforming districts, investigate conditions, and make informed agricultural decisions. 'Musaruro' means 'harvest' in Kinyarwanda.",
    stack: ["Python", "Streamlit", "Pandas", "Satellite Data", "NISR Statistics", "Data Visualization"],
    github: "https://github.com/DIVINEakisa/Musaruro",
    demo: "https://musaruro-app.streamlit.app/"
  }
];

export const education = [
  {
    program: "Advanced Diploma in Information Technology",
    institution: "Rwanda Polytechnic – Kigali College of Technology (RP-KiCT)",
    status: "2024 – Present",
    focus:
      "Software Engineering, Web Application Development, Backend Systems Development, Database Management, Artificial Intelligence Concepts, and Software Design Practices.",
    period: "Current"
  },
  {
    program: "Full-Stack Development Programme",
    institution: "TheGym Rwanda",
    status: "Completed",
    focus:
      "Completed an intensive full-stack software engineering training programme. Built applications using JavaScript, React, Node.js, NestJS, REST APIs, PostgreSQL, and MongoDB. Practiced Agile methodologies, Git workflows, feature branching, code reviews, and collaborative development.",
    period: "Graduated"
  }
];

export const socialLinks = [
  { label: "GitHub", href: owner.github, icon: "github" },
  { label: "LinkedIn", href: owner.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${owner.email}`, icon: "mail" },
  { label: "Phone", href: `tel:${owner.phone}`, icon: "phone" }
];
