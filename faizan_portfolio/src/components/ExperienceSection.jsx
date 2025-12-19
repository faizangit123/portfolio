import { motion as Motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Briefcase, Calendar } from 'lucide-react';
import './ExperienceSection.css';

const education = [
 {
  title: "Bachelor of Technology in Computer Science Engineering (CSE)",
  institution: "Dronacharya College of Engineering (DCE)",
  period: "2021 – 2025",
  description:
    "Pursuing Computer Science Engineering with a strong foundation in data structures, algorithms, software engineering, and modern web technologies. Actively engaged in building full-stack applications and improving problem-solving skills through hands-on projects.",
},

];

const certifications = [
  {
    title: 'Full-Stack Web Development',
    issuer: 'Meta (Coursera)',
    year: '2024',
  },
  {
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    year: '2023',
  },
  {
    title: 'Node.js Developer Certificate',
    issuer: 'freeCodeCamp',
    year: '2023',
  },
  {
    title: 'MongoDB Developer Path',
    issuer: 'MongoDB University',
    year: '2023',
  },
];

const personalProjects = [
  {
    title: 'Open Source Contributor',
    description: 'Actively contributing to various open-source projects on GitHub, focusing on React component libraries and developer tools.',
    period: '2023 - Present',
  },
  // {
  //   title: 'Tech Blog Author',
  //   description: 'Writing technical articles about web development, sharing knowledge and best practices with the developer community.',
  //   period: '2023 - Present',
  // },
  // {
  //   title: 'Freelance Web Developer',
  //   description: 'Building custom websites and web applications for small businesses and startups.',
  //   period: '2023 - Present',
  // },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <Motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="experience-header"
        >
          <span className="code-text">{'// Journey'}</span>
          <h2 className="section-title">
            Education & <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            My academic background and professional journey
          </p>
        </Motion.div>

        <div className="experience-grid">
          <div className="experience-column">
            <Motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="section-label">
                <div className="section-label-icon">
                  <GraduationCap />
                </div>
                <h3>Education</h3>
              </div>
              {education.map((edu) => (
                <div key={edu.title} className="glass-card education-card">
                  <div className="education-header">
                    <h4 className="education-title">{edu.title}</h4>
                    <span className="education-period">
                      <Calendar />
                      {edu.period}
                    </span>
                  </div>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-desc">{edu.description}</p>
                </div>
              ))}
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="section-label">
                <div className="section-label-icon">
                  <Briefcase />
                </div>
                <h3>Experience</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {personalProjects.map((project, index) => (
                  <Motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="glass-card-hover exp-card"
                  >
                    <div className="exp-header">
                      <h4 className="exp-title">{project.title}</h4>
                      <span className="exp-period">{project.period}</span>
                    </div>
                    <p className="exp-desc">{project.description}</p>
                  </Motion.div>
                ))}
              </div>
            </Motion.div>
          </div>

          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="experience-column"
          >
            <div className="section-label">
              <div className="section-label-icon">
                <Award />
              </div>
              <h3>Certifications</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {certifications.map((cert, index) => (
                <Motion.div
                  key={cert.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="glass-card cert-card"
                >
                  <div className="cert-icon">
                    <Award />
                  </div>
                  <div className="cert-info">
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                  </div>
                  <span className="cert-year">{cert.year}</span>
                </Motion.div>
              ))}
            </div>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-card learning-card"
            >
              <h4 className="learning-title">Always Learning 📚</h4>
              <p className="learning-desc">
                As a fresher, I'm committed to continuous learning. Currently exploring 
                <span className="highlight"> TypeScript</span>, 
                <span className="highlight"> Next.js</span>, and 
                <span className="highlight"> Cloud Technologies</span> to expand my skill set.
              </p>
            </Motion.div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
