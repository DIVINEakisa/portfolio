export const owner = {
  name: "Divine Akisa",
  initials: "AD",
  role: "University IT Student | Aspiring Full-Stack Web Developer",
  title: "Frontend & Full-Stack Developer in Training",
  location: "Rwanda - Kigali, Kicukiro",
  email: "akisadivine11@gmail.com",
  phone: "+250792502568",
  github: "https://github.com/DIVINEakisa",
  instagram: "https://www.instagram.com/acsah_divin",
  profileImage: "/profile-divine-akisa.jpg",
  bio:
    "I am a university IT student passionate about software development, web technologies, and solving real-world problems through technology. I enjoy learning modern development tools, creating practical projects, and continuously improving my technical and problem-solving skills. I am interested in building scalable and user-friendly applications.",
  headline:
    "Building modern web experiences and solving real-world problems through technology.",
  subheading:
    "University IT student passionate about React, Node.js, databases, and creating practical software solutions."
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

// Content is separated from presentation so Divine can update the portfolio quickly.
export const skillGroups = [
  {
    title: "Frontend",
    icon: "layout",
    description: "Interfaces that are responsive, accessible, and easy to use.",
    skills: ["HTML", "CSS and Tailwind CSS", "JavaScript", "React.js"]
  },
  {
    title: "Backend",
    icon: "server",
    description: "APIs and server-side logic for practical software workflows.",
    skills: ["Node.js", "Express.js"]
  },
  {
    title: "Database",
    icon: "database",
    description: "Structured data modeling, querying, and application storage.",
    skills: ["PostgreSQL", "MongoDB", "SQL"]
  },
  {
    title: "Tools",
    icon: "tool",
    description: "Development workflow tools for version control and productivity.",
    skills: ["Git", "GitHub", "VS Code"]
  }
];

export const projects = [
  {
    title: "Student Management System",
    type: "Full-stack web application",
    imageLabel: "Student records dashboard",
    problem: "Managing student records manually can be inefficient and difficult.",
    approach:
      "Built using React.js, Node.js, Express.js, and PostgreSQL with user-friendly interfaces and organized database structure.",
    result:
      "Improved organization and simplified management of student information.",
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
    github: "https://github.com/RP-Kigali-Capstone",
    demo: "#contact"
  },
  {
    title: "Water Tank Overflow Detection System",
    type: "Arduino monitoring solution",
    imageLabel: "Water level monitor",
    problem: "Water tanks overflow and waste water in homes.",
    approach: "Created an Arduino-based monitoring solution.",
    result: "Reduced unnecessary water loss and improved efficiency.",
    stack: ["Arduino", "Sensors", "Embedded Systems", "Problem Solving"],
    github: "https://github.com/DIVINEakisa",
    demo: "#contact"
  }
];

export const education = [
  {
    program: "Information Technology",
    status: "University Student",
    focus: "Software development, databases, networking, and practical systems.",
    period: "Current"
  },
  {
    program: "Full-Stack Developer Learning Path",
    status: "In progress",
    focus: "React, Node.js, Express.js, SQL, MongoDB, Git, and deployment readiness.",
    period: "Ongoing"
  }
];

export const socialLinks = [
  { label: "GitHub", href: owner.github, icon: "github" },
  { label: "Instagram", href: owner.instagram, icon: "instagram" },
  { label: "Email", href: `mailto:${owner.email}`, icon: "mail" },
  { label: "Phone", href: `tel:${owner.phone}`, icon: "phone" }
];
