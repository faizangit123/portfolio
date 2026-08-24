import { motion as Motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import "./ProjectsSection.css";

const projects = [
  // {
  //   title: 'E-Commerce Platform',
  //   description: 'A full-featured online store with product catalog, cart functionality, secure checkout, and admin dashboard for inventory management.',
  //   tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'CSS'],
  //   image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
  //   github: 'https://github.com/faizangit123',
  //   live: '#',
  //   featured: true,
  // },

  {
    title: "Marco India v2 — Technology & Infrastructure Solutions",
    description:
      "A modern, responsive business website for Marco India, a professional CCTV surveillance, signal boosting, and telecom infrastructure installation company based in India. Built with React, Vite, and CSS.",
    tech: [
      "React.js",
      "ci/cd",
      "Tailwind CSS",
      "Express",
      "Nodejs",
      "Docker",
      "Vercel",
      "Render",
      "MongoDb",
    ],
    image: "MarcoIndia.png",
    github: "https://github.com/faizangit123/Marco_India_v2",
    live: "https://marco-india-v2.vercel.app/",
    featured: true,
  },
  {
    title: "GlobTenseNews — Real-Time Global Event Intelligence Platform",
    description:
      "Built a real-time intelligence platform integrating GDELT DOC 2.0 and multi-source RSS feeds with automated event clustering using Jaccard similarity, temporal windowing, country detection, and confidence scoring. Implemented SSE live streaming, interactive global tension radar, browser-based audio briefings, Markdown/JSON dossier exports, Schema.org structured data, RSS syndication, and a compliance-focused zero-full-text-scraping architecture. Deployed using Render, Cloudflare Pages, and MongoDB Atlas.",
    tech: [
      "React.js",
      "ci/cd",
      "Cloudflare Workers",
      "Express",
      "Nodejs",
      "Docker",
      "cron-job.org",
      "Render",
      "MongoDb",
      "SCSS",
    ],
    image: "GlobalTenseNews.png",
    live: "https://globtensenews.faizanrock705.workers.dev/",
    featured: true,
  },
  {
    title:
      "NPC Forge  : Offline, Local-First AI Co-Developer for Indie Game Developers",
    description:
      "Indie game studios hold their most valuable intellectual property in draft lore, unreleased plot twists, crash logs, and balancing spreadsheets. Sending this data to cloud LLM APIs poses severe IP leakage and privacy risks.NPC Forge is a 100% offline, local-first AI co-developer powered by Ollama (llama3.1:8b + nomic-embed-text) running locally on your machine (optimized for AMD Ryzen™ AI & Radeon™ GPUs via ROCm).",
    tech: [
      "React.js",
      "ci/cd",
      "Cloudflare Workers",
      "Express ",
      "Node.js",
      "Docker",
      "cron-job.org",
      "Render",
      "MongoDb",
      "RAG",
      "Ollama",
    ],
    image: "NPC_Forge.png",
    github: "https://github.com/faizangit123/npc-forge",
    live: "https://npc-forge-client.vercel.app/",
    featured: true,
  },
  {
    title: "LearnVanta – Modern Video Learning Platform",
    description:
      "LearnVanta is a modern, video-based learning platform for Class 8–12 students and college learners. It curates and embeds YouTube educational content into a structured learning experience, making study more organized, focused, and effective. Built with React (Vite) and Django.",
    tech: [
      "React.js",
      "Python",
      "Tailwind CSS",
      "Django",
      "Docker",
      "Vercel",
      "Render",
      "PostgreSQL 16.11",
    ],
    image: "learnVenta.png",
    github: "https://github.com/faizangit123/LearnVanta-Platform",
    live: "https://learn-vanta-platform.vercel.app/",
    featured: true,
  },
  {
    title: "SkillSync",
    description:
      "SkillSync is a production-ready full-stack web application designed to help developers track their skills, projects, milestones, and progress analytics.The project demonstrates real-world software engineering practices.",
    tech: [
      "React.js",
      "Python",
      "Tailwind CSS",
      "Django",
      "Docker",
      "Vercel",
      "Render",
      "PostgreSQL 16.11",
    ],
    image: "skill.png",
    github: "https://github.com/faizangit123/SkillSync",
    live: "https://skill-sync-sage-nu.vercel.app",
    featured: true,
  },
  {
    title: "Remote Monitoring Portal",
    description:
      "A Python-based remote monitoring system for Windows machines. A lightweight agent collects real-time system metrics and streams them over WebSocket to a FastAPI backend, which serves a React dashboard with live charts, process management, and role-based access control.",
    tech: [
      "React.js",
      "Python",
      "Tailwind CSS",
      "Django",
      "Docker",
      "Vercel",
      "Render",
      "PostgreSQL 16.11",
    ],
    image: "Remote.png",
    github: "https://github.com/faizangit123/Remote-Monitoring-Portal",
    live: "https://remote-monitoring-portal.vercel.app/login",
    featured: true,
  },
  {
    title: "Library Management System",
    description:
      "A real-world Library Management System built with Django and Django REST Framework, featuring JWT authentication, book borrowing and return logic, and secure Razorpay payment integration for memberships and late fees.",
    tech: [
      "React.js",
      "Python",
      "Django",
      "Docker",
      "Vercel",
      "Render",
      "PostgreSQL 16.11",
    ],
    image: "library.png",
    github:
      "https://github.com/faizangit123/Django-Library-management-Razorpay",
    live: "https://django-library-management-razorpay.onrender.com/",
    featured: false,
  },
  {
    title: "Task Management Dashboard",
    description:
      "A collaborative project management tool with drag-and-drop boards, real-time updates, team collaboration, and progress tracking.",
    tech: ["React.js", "Tsilwind CSS", "Versel"],
    image: "four.png",
    github: "https://github.com/faizangit123/Project-Task-Management-Dashboard",
    live: "https://project-task-management-dashboard.vercel.app/",
    featured: false,
  },
  {
    title: "Subscription Pricing Page Builder",
    description:
      "For now this is a frontend-only application that allows users to create, customize, preview, and save pricing plans dynamically",
    tech: ["React.js", "CSS3", "HTML5", "Versel", "Socket.io"],
    image: "three.png",
    github:
      "https://github.com/faizangit123/Project-Subscription-Pricing-Page-Builder",
    live: "https://project-subscription-pricing-page-b.vercel.app/",
    featured: false,
  },
  {
    title: "Weather Dashboard Open Meteo",
    description:
      "The application focuses on clean UI, usability, and frontend best practices.",
    tech: ["React.js", "CSS3", "HTML5", "Socket.io", "Open-meteo API"],
    image: "five.png",
    github: "https://github.com/faizangit123/weather-dashboard-open-meteo",
    live: "https://weather-dashboard-open-meteo.vercel.app/",
    featured: true,
  },
  {
    title: "Portfolio Website Builder",
    description:
      "A SaaS platform that allows users to create professional portfolios with customizable templates and real-time preview.",
    tech: ["React.js", "CSS3", "HTML5"],
    image: "img3.png",
    github: "https://github.com/faizangit123/project_portfolio_builder",
    live: "https://project-portfolio-builder.vercel.app/",
    featured: false,
  },
  {
    title: "Kanban Board",
    description:
      "A visual project management tool that helps teams track tasks across stages like To Do, In Progress, and Done for better workflow and productivity.",
    tech: ["React,js", "HTML5 Drag & Drop API", "Chart.js"],
    image: "two.png",
    github: "https://github.com/faizangit123/Project_Kanban_Board",
    live: "https://project-kanban-board-lilac.vercel.app/",
    featured: false,
  },
  {
    title: "Blog CMS",
    description:
      "Content management system with markdown support, SEO optimization, and analytics dashboard.",
    tech: ["React.js", "Node.js", "MongoDB", "JWT"],
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
    github: "https://github.com/faizangit123",
    live: "#",
    featured: false,
  },
  {
    title: "REST API Service",
    description:
      "Scalable RESTful API with authentication, rate limiting, documentation, and comprehensive testing.",
    tech: ["Node.js", "PostgreSQL", "Docker"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    github: "https://github.com/faizangit123",
    live: "#",
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <Motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="projects-header"
        >
          <span className="code-text">{"// Featured Work"}</span>
          <h2 className="section-title">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            A selection of projects that showcase my skills and passion
          </p>
        </Motion.div>

        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <Motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`featured-project ${index % 2 !== 0 ? "reverse" : ""}`}
            >
              <div className="project-image">
                <Motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card project-image-inner"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />
                </Motion.div>
              </div>

              <div className="project-info">
                <span className="code-text project-label">
                  Featured Project
                </span>
                <h3 className="project-title">{project.title}</h3>
                <div className="glass-card project-description">
                  <p>{project.description}</p>
                </div>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <Motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ y: -2 }}
                    aria-label="View GitHub repository"
                  >
                    <Github size={22} />
                  </Motion.a>
                  <Motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ y: -2 }}
                    aria-label="View live demo"
                  >
                    <ExternalLink size={22} />
                  </Motion.a>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="other-projects-title">Other Noteworthy Projects</h3>
          <div className="other-projects-grid">
            {otherProjects.map((project, index) => (
              <Motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="glass-card-hover other-project-card"
              >
                <div className="other-project-header">
                  <Folder />
                  <div className="other-project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <h4 className="other-project-title">{project.title}</h4>
                <p className="other-project-desc">{project.description}</p>
                <div className="other-project-tech">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </Motion.div>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
