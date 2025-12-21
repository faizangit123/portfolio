import { motion as Motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert('Message sent! Thank you for reaching out.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <Motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="contact-header"
        >
          <span className="code-text">{'// Get In Touch'}</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have a project in mind or want to chat? I'd love to hear from you!
          </p>
        </Motion.div>

        <div className="contact-grid">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-info-section"
          >
            <div className="glass-card contact-info-card">
              <h3 className="contact-info-title">Contact Information</h3>
              
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <Mail />
                  </div>
                  <div>
                    <p className="contact-item-label">Email</p>
                    <a href="mailto:faizanrock705@gmail.com" className="contact-item-value">
                      faizanrock705@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <MapPin />
                  </div>
                  <div>
                    <p className="contact-item-label">Location</p>
                    <p className="contact-item-value">India, New Delhi, Delhi, Pitampura-110034</p>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <p className="contact-social-label">Follow me on</p>
                <div className="contact-social-links">
                  <Motion.a
                    href="https://github.com/faizangit123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card contact-social-link"
                    whileHover={{ y: -4 }}
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </Motion.a>
                  <Motion.a
                    href="https://www.linkedin.com/feed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card contact-social-link"
                    whileHover={{ y: -4 }}
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </Motion.a>
                </div>
              </div>
            </div>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card availability-card"
            >
              <div className="availability-header">
                <div className="availability-dot" />
                <span className="availability-title">Available for Opportunities</span>
              </div>
              <p className="availability-desc">
                I'm currently looking for full-time opportunities. 
                Let's build something amazing together!
              </p>
            </Motion.div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Project inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary submit-btn"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </Motion.button>
            </form>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
