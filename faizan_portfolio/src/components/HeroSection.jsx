import { motion as Motion } from 'framer-motion';
import { Github, Linkedin, ArrowDown, Sparkles } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-bg-gradient" />
      <div className="hero-blob-1" />
      <div className="hero-blob-2" />
      <div className="hero-grid" />

      <div className="hero-content">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-badge"
        >
          <Sparkles size={16} />
          Available for opportunities
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="hero-title">
            Hi, I'm{' '}
            <span className="gradient-text">Faizan</span>
            <Motion.span
              className="hero-wave"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
            >
              
            </Motion.span>
          </h1>
        </Motion.div>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-subtitle"
        >
          <span className="code-text">Full-Stack Developer</span> & <span className="code-text">UI/UX Designer</span>
        </Motion.p>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hero-description"
        >
          I craft beautiful, scalable web applications with clean code and exceptional user experiences.
          Passionate about turning ideas into reality through modern technologies.
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hero-buttons"
        >
          <Motion.a
            href="#projects"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
            <ArrowDown size={18} />
          </Motion.a>
          <Motion.a
            href="#contact"
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </Motion.a>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hero-social"
        >
          <Motion.a
            href="https://github.com/faizangit123"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            whileHover={{ y: -4 }}
            aria-label="GitHub"
          >
            <Github size={24} />
          </Motion.a>
          <Motion.a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            whileHover={{ y: -4 }}
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </Motion.a>
        </Motion.div>
      </div>

      <Motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-mouse">
          <Motion.div
            className="scroll-dot"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </Motion.div>
    </section>
  );
};

export default HeroSection;
