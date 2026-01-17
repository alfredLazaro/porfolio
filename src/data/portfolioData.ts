import { Project, SkillSet, PersonalInfo, WorkExperience, Education } from '../types/portfolio.types';

export const personalInfo: PersonalInfo = {
  // Your full name
  name: "Alfredo Lazaro Poma",
  
  // Your professional title/role
  title: "Ingeniero de Software",
  
  // Brief bio (2-4 sentences about you, your passion, and what you do)
  about: "Passionate full-stack developer with 3+ years of experience building modern web applications. I specialize in React, TypeScript, and Node.js, with a focus on creating scalable, user-friendly solutions. I love tackling complex problems and continuously learning new technologies to deliver exceptional results.",
  
  // Your social/professional links
  github: "https://github.com/alfredLazaro?tab=repositories",
  linkedin: "https://www.linkedin.com/in/alfredo-lazaro-poma-24a317267/",
  email: "alfredolazaro999@gmail.com",
  
  /* // Optional links
  twitter: "https://twitter.com/yourusername",
  website: "https://yourwebsite.com",
  resume: "/path/to/your-resume.pdf" */
};

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard. Handles 10k+ daily users with optimized performance.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe", "Redis"],
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://your-ecommerce-demo.vercel.app",
    highlights: [
      "Reduced page load time by 60% through code splitting",
      "Integrated Stripe for secure payment processing",
      "Built admin panel for inventory management"
    ]
  },
  {
    title: "Real-Time Chat Application",
    description: "Scalable chat app with real-time messaging, file sharing, and video calls. Built with WebSocket for instant communication.",
    tech: ["React", "TypeScript", "Socket.io", "WebRTC", "Express", "PostgreSQL"],
    github: "https://github.com/yourusername/chat-app",
    demo: "https://your-chat-app.vercel.app",
    highlights: [
      "Supports 1000+ concurrent users",
      "End-to-end encrypted messaging",
      "Video call integration with WebRTC"
    ]
  },
  {
    title: "Task Management Dashboard",
    description: "Collaborative project management tool with drag-and-drop interface, real-time updates, and team collaboration features.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS", "DnD Kit"],
    github: "https://github.com/yourusername/task-manager",
    demo: "https://your-task-manager.vercel.app",
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
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    url: "https://aws.amazon.com/certification/"
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2022",
    url: "https://www.coursera.org/professional-certificates/meta-react-native"
  }
];