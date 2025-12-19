import { motion as Motion } from 'framer-motion';
import { Github, Linkedin, Heart, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <span className="bracket">&lt;</span>
              <span>Faizan</span>
              <span className="bracket">/&gt;</span>
            </a>
            <p>
              Full-Stack Developer & UI/UX Designer crafting beautiful web experiences.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`}>
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Built With</h4>
            <div className="footer-tech">
              {['React', 'JavaScript', 'CSS', 'Framer Motion'].map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Faizan.
             {/* Made with <Heart size={14} /> and lots of ☕ */}
          </p>

          <div className="footer-social">
            <Motion.a
              href="https://github.com/faizangit123"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              aria-label="GitHub"
            >
              <Github size={20} />
            </Motion.a>
            <Motion.a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Motion.a>
          </div>
        </div>
      </div>

      <Motion.button
        onClick={scrollToTop}
        className="glass-card scroll-top-btn"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </Motion.button>
    </footer>
  );
};

export default Footer;
