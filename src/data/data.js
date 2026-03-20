// ============================================
// 📝 PORTFOLIO DATA — Edit this file to customize your portfolio!
// ============================================

export const personalInfo = {
  name: "Arun Sambyal",
  tagline: "Backend Developer",
  roles: [
    "Backend Developer",
    "Spring Boot Developer",
    "React Enthusiast",
    "Blockchain Enthusiast",
    "Problem Solver",
    "Tech Explorer"
  ],
  bio: `I'm a passionate backend developer who enjoys designing and building robust server-side applications from concept to deployment.
   I specialize in the Java and Spring ecosystem, 
   including Spring Boot, Spring Security, and Spring AI, and focus on developing secure, scalable, and high-performance backend systems. 
   I have strong experience in building RESTful APIs and designing efficient system architectures that power modern web applications. 
   I enjoy solving complex technical problems and transforming ideas into reliable and efficient backend solutions.`,
  email: "[arunsambyal2003@gmail.com]",
  phone: "+91 7876045880",
  location: "India",
  resumeLink: "https://drive.google.com/file/d/1oqAmfxcUvLZ8zdGNoxRG6GfXaqDzc5Zz/view?usp=sharing",
};

export const stats = [
  { value: 5, suffix: "+", label: "Projects Completed" },
  { value: 0, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "+", label: "Technologies" },
  { value: 500, suffix: "+", label: "Cups of Coffee" },
];

export const skills = [
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "Spring AI", level: 50 },
      { name: "REST APIs", level: 70 },
      { name: "Spring Security", level: 75 },
      { name: "MySQL", level: 70 },
    ],
  },
  {
    category: "Tools & Others",
    icon: "🛠️",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "IntelliJ IDEA", level: 80 },
      { name: "npm / Maven", level: 80 },
      { name: "Swagger", level: 70 },
      { name: "Postman", level: 85 },
      { name: "Docker", level: 50 },
      { name: "Linux Basics", level: 70 },
    ],
  },
];

export const projects = [
  {
    title: "Book Store Management System",
    description:
      "A full-stack e-commerce platform for managing and purchasing books online. Features user authentication, role-based dashboards, order management, and a responsive storefront.",
    tags: ["React", "Spring Boot", "MongoDB", "JWT", "REST API"],
    category: "backend",
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
    github: "https://github.com/Arun2295/portfolio",
    live: "#",
    image: null,
  },

  {
    title: "ERP System – Inventory & Sales Management",
    description:
      "A full-stack ERP web application for a distribution company to manage products, customers, sales/purchase orders, inventory via GRNs, and invoice generation. Features role-based access, real-time inventory tracking, dashboards, and financial reporting.",
    tags: ["React", "Spring Boot", "MySQL", "JWT", "Material UI", "Swagger"],
    category: "fullstack",
    github: "https://github.com/Arun2295/Inventory-Management-System",
    live: null,
    image: null,
  },
];

export const experience = [
  {
    role: "Computer Science Student",
    company: "Lovely Professional University",
    period: "2023 — Present",
    description:
      "Pursuing a degree in Computer Science with focus on software development, data structures, algorithms, and database management systems.",
    technologies: ["Java", "MongoDB", "C", "SQL", "Postman", "Git", "Github", "Docker"],
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
    url: "https://www.linkedin.com/in/arun-sambyal-18a959289/",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://x.com/ArunSambya2295",
    icon: "twitter",
  },
  {
    name: "Email",
    url: "mailto:[arunsambyal2003@gmail.com]",
    icon: "email",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
