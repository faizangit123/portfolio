import { motion as Motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import './ProjectsSection.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with product catalog, cart functionality, secure checkout, and admin dashboard for inventory management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com/faizangit123',
    live: '#',
    featured: true,
  },
  {
    title: 'Task Management Dashboard',
    description: 'A collaborative project management tool with drag-and-drop boards, real-time updates, team collaboration, and progress tracking.',
    tech: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
    github: 'https://github.com/faizangit123',
    live: '#',
    featured: true,
  },
  {
    title: 'Portfolio Website Builder',
    description: 'A SaaS platform that allows users to create professional portfolios with customizable templates and real-time preview.',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
    github: 'https://github.com/faizangit123',
    live: '#',
    featured: true,
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location-based forecasts, interactive maps, and severe weather alerts.',
    tech: ['React', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com/faizangit123',
    live: '#',
    featured: false,
  },
  {
    title: 'Blog CMS',
    description: 'Content management system with markdown support, SEO optimization, and analytics dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/faizangit123',
    live: '#',
    featured: false,
  },
  {
    title: 'REST API Service',
    description: 'Scalable RESTful API with authentication, rate limiting, documentation, and comprehensive testing.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/faizangit123',
    live: '#',
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

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
          <span className="code-text">{'// Featured Work'}</span>
          <h2 className="section-title">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
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
              className={`featured-project ${index % 2 !== 0 ? 'reverse' : ''}`}
            >
              <div className="project-image">
                <Motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card project-image-inner"
                >
                  <div className="project-placeholder">
                    <Folder />
                    <span>Project Preview</span>
                  </div>
                </Motion.div>
              </div>

              <div className="project-info">
                <span className="code-text project-label">Featured Project</span>
                <h3 className="project-title">{project.title}</h3>
                <div className="glass-card project-description">
                  <p>{project.description}</p>
                </div>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
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
