import { motion as Motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Rocket, Coffee } from 'lucide-react';
import './AboutSection.css';

const stats = [
  { number: '10+', label: 'Projects Completed', icon: Rocket },
  { number: '5+', label: 'Technologies', icon: Code2 },
  { number: '100%', label: 'Passion', icon: Coffee },
  { number: '∞', label: 'Creativity', icon: Palette },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="about">
      <div className="about-container">
        <Motion.div
  ref={ref}
  initial={{ opacity: 0, y: 40 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
  className="about-header"
>

          <span className="code-text">{'// About Me'}</span>
          <h2 className="section-title">
            Turning <span className="gradient-text">Vision</span> Into Reality
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A passionate developer who loves creating beautiful digital experiences
          </p>
        </Motion.div>

        <div className="about-grid">
          <Motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-content"
          >
            <div className="glass-card about-text">
              <p>
                Hello! I'm <span className="highlight">Faizan</span>, a fresh graduate 
                and aspiring Full-Stack Developer with a keen eye for UI/UX design. My journey in tech 
                started with curiosity and has evolved into a deep passion for building impactful web applications.
              </p>
              <p>
                As a fresher, I bring <span className="text-white">fresh perspectives</span>, 
                <span className="text-white"> unbounded enthusiasm</span>, and 
                <span className="text-white"> cutting-edge knowledge</span> of modern technologies. 
                I believe in writing clean, maintainable code and creating intuitive user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or designing UI concepts. I'm always eager to learn and take on new challenges.
              </p>
            </div>

            <div className="about-traits">
              {['Problem Solver', 'Quick Learner', 'Team Player', 'Detail Oriented'].map((trait) => (
                <span key={trait} className="tech-badge">
                  {trait}
                </span>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="stats-grid"
          >
            {stats.map((stat, index) => (
              <Motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="glass-card-hover stat-card"
              >
                <stat.icon />
                <div className="stat-number gradient-text">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
