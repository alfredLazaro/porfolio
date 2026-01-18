import { Project, SkillSet, PersonalInfo, WorkExperience, Education } from '../types/portfolio.types';

export const personalInfo: PersonalInfo = {
  // Your full name
  name: "Alfredo Lazaro Poma",
  
  // Your professional title/role
  title: "Ingeniero de Software",
  
  // Brief bio (2-4 sentences about you, your passion, and what you do)
about: "Desarrollador full-stack con experiencia construyendo aplicaciones web modernas. Mi objetivo es alcanzar un nivel experto en desarrollo backend, con especial énfasis en arquitectura de software y eficiencia de sistemas. Me apasiona diseñar soluciones robustas y bien estructuradas que optimicen el rendimiento y la mantenibilidad del código.",  // Your social/professional links
  github: "https://github.com/alfredLazaro?tab=repositories",
  linkedin: "https://www.linkedin.com/in/alfredo-lazaro-poma-24a317267",
  email: "alfredolazaro999@gmail.com",
  
  /* // Optional links
  twitter: "https://twitter.com/yourusername",
  website: "https://yourwebsite.com",
  resume: "/path/to/your-resume.pdf" */
};

export const projects: Project[] = [
  {
    title: "LearnCpp",
    description: "Aplicacion enfocada en el aprendizaje de algoritmo.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    github: "https://github.com/alfredLazaro/project-grado",
    demo: "https://project-learncp.vercel.app/",
    highlights: [
      "Recopilacion de informacion de varias fuentes de algoritmia",
      "Ejemplos practicos sobre problemas",
      "Enlaces de fuentes relacionadas con mayor informacion",
    ]
  },
  {
    title: "Sansi Check API",
    description: "API para el manejo de horarios y marcado de asistencia con reconocimiento Facial",
    tech: ["SpringBoot","Java","Swagger","PostgreSQL"],
    github: "https://github.com/alfredLazaro/sistemaAsistencia",
    demo: "",
    highlights: [
      "Adminstracion de Usuarios via JWT y Spring Security",
      "Seguridad por parte de endpoint y documentacion",
      "Se sigue los principios SOLID"
    ]
  },
  {
    title: "English App",
    description: "Aplicacion Movil desarrollada para el aprendisaje autonomo de ingles, esta desarrollada con diferentes apis gratuitas.",
    tech: ["Flutter", "Dart", "Sqlite"],
    github: "https://github.com/alfredLazaro/appIngles/tree/master",
    demo: "",
    highlights: [
      "Drag-and-drop Kanban board interface",
      "Real-time collaboration with Firebase",
      "Custom notification system"
    ]
  },
];

export const skills: SkillSet[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Next.js",
      "HTML5 & CSS3",
      "Tailwind CSS"
    ]
  },
  {
    category: "Backend",
    items: [
      "Spring Boot",
      "Laravel",
      "Node.js",
      "Express.js",
      "REST APIs",
    ]
  },
  {
    category: "Database",
    items: [
      "PostgreSQL",
      "Prisma ORM",
      "SQL"
    ]
  },
  {
    category: "Tools & DevOps",
    items: [
      "Git & GitHub",
      "Docker"
    ]
  }
];

// Optional: Work Experience
export const workExperience: WorkExperience[] = [
  {
    company: "Tech Company Inc.",
    position: "Senior Frontend Developer",
    period: "Jan 2023 - Present",
    description: "Leading frontend development for enterprise SaaS platform serving 50k+ users.",
    achievements: [
      "Reduced bundle size by 40% through code optimization",
      "Mentored 3 junior developers",
      "Implemented design system used across 5+ products"
    ]
  },
  {
    company: "Startup Solutions",
    position: "Full Stack Developer",
    period: "Jun 2021 - Dec 2022",
    description: "Built and maintained multiple client projects using React and Node.js.",
    achievements: [
      "Developed 10+ client projects from scratch",
      "Improved application performance by 50%",
      "Implemented automated testing pipeline"
    ]
  },
  {
    company: "Freelance",
    position: "Web Developer",
    period: "Jan 2020 - May 2021",
    description: "Worked with various clients building custom web applications and websites.",
    achievements: [
      "Completed 20+ projects for international clients",
      "Maintained 5-star rating on freelance platforms",
      "Specialized in React and responsive design"
    ]
  }
];

// Optional: Education
export const education: Education[] = [
  {
    institution: "Universidad Mayor de San Simon",
    degree: "Bachelor of Science in Computer Science",
    period: "2018 - 2025",
    description: "Focus on Software Engineering and Web Development. GPA: 3.8/4.0"
  },
  {
    institution: "Coding Bootcamp Academy",
    degree: "Full Stack Web Development Certificate",
    period: "2019",
    description: "Intensive 12-week program covering MERN stack and modern web development"
  }
];

// Optional: Certifications
export const certifications = [
  {
    name: "",
    issuer: "Cisco",
    date: "2025",
    url: "https://aws.amazon.com/certification/"
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2022",
    url: "https://www.coursera.org/professional-certificates/meta-react-native"
  }
];