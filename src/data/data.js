// ============================================
// 📝 PORTFOLIO DATA — Edit this file to customize your portfolio!
// ============================================

export const personalInfo = {
  name: "Arun",
  tagline: "Full-Stack Developer",
  roles: [
    "Full-Stack Developer",
    "React Enthusiast",
    "Spring Boot Developer",
    "Problem Solver",
    "Tech Explorer"
  ],
  bio: `I'm a passionate full-stack developer who loves building modern web applications 
  from concept to deployment. With expertise in React and Spring Boot, I create 
  seamless user experiences backed by robust, scalable architectures. I thrive on 
  turning complex problems into elegant, intuitive solutions.`,
  email: "arun.dev@example.com",
  phone: "+91 98765 43210",
  location: "India",
  resumeLink: "#",
};

export const stats = [
  { value: 10, suffix: "+", label: "Projects Completed" },
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 8, suffix: "+", label: "Technologies" },
  { value: 500, suffix: "+", label: "Cups of Coffee" },
];

export const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Responsive Design", level: 90 },
      { name: "Vite", level: 80 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "Spring Security", level: 75 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    category: "Tools & Others",
    icon: "🛠️",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "npm / Maven", level: 80 },
      { name: "Postman", level: 85 },
      { name: "Linux Basics", level: 70 },
    ],
  },
];

export const projects = [
  {
    title: "Book Store Management System",
    description:
      "A full-stack e-commerce platform for managing and purchasing books online. Features user authentication, role-based dashboards, order management, and a responsive storefront.",
    tags: ["React", "Spring Boot", "MySQL", "JWT", "REST API"],
    category: "fullstack",
    github: "https://github.com/Arun2295/Book-Store-System",
    live: "#",
    image: null,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, interactive personal portfolio built with React and Vite. Features smooth animations, glassmorphism design, and a fully responsive layout.",
    tags: ["React", "Vite", "CSS3", "Responsive"],
    category: "frontend",
    github: "#",
    live: "#",
    image: null,
  },
  {
    title: "Task Manager App",
    description:
      "A clean and intuitive task management application with drag-and-drop functionality, priority levels, and progress tracking.",
    tags: ["React", "JavaScript", "CSS3", "LocalStorage"],
    category: "frontend",
    github: "#",
    live: "#",
    image: null,
  },
  {
    title: "REST API Service",
    description:
      "A secure and scalable RESTful API service built with Spring Boot featuring JWT authentication, input validation, and comprehensive error handling.",
    tags: ["Java", "Spring Boot", "JWT", "MySQL"],
    category: "backend",
    github: "#",
    live: null,
    image: null,
  },
];

export const experience = [
  {
    role: "Full-Stack Developer",
    company: "Self-Employed / Freelance",
    period: "2024 — Present",
    description:
      "Building full-stack web applications using React and Spring Boot. Developed multiple projects including e-commerce platforms with secure authentication, RESTful APIs, and modern responsive frontends.",
    technologies: ["React", "Spring Boot", "MySQL", "JWT"],
  },
  {
    role: "Frontend Developer",
    company: "Personal Projects",
    period: "2023 — 2024",
    description:
      "Focused on mastering modern frontend technologies. Built interactive UIs with React, explored state management patterns, and implemented responsive designs with CSS3 animations.",
    technologies: ["React", "JavaScript", "HTML/CSS", "Vite"],
  },
  {
    role: "Computer Science Student",
    company: "University",
    period: "2021 — Present",
    description:
      "Pursuing a degree in Computer Science with focus on software development, data structures, algorithms, and database management systems.",
    technologies: ["Java", "Python", "C", "SQL"],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Arun2295",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
    icon: "twitter",
  },
  {
    name: "Email",
    url: "mailto:arun.dev@example.com",
    icon: "email",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
