import { motion as Motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, Database, Server, Layout, GitBranch, 
  Layers, Palette, Terminal, Cloud, Lock
} from 'lucide-react';
import './SkillsSection.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    color: 'cyan',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3/SCSS', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'React.js', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'green',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 75 },
      { name: 'REST APIs', level: 80 },
      { name: 'Authentication', level: 70 },
      { name: 'Payment Integration', level: 65 },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'orange',
    skills: [
      { name: 'MongoDB', level: 75 },
      { name: 'SQL', level: 70 },
      { name: 'PostgreSQL', level: 65 },
      { name: 'Firebase', level: 70 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: GitBranch,
    color: 'purple',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Docker', level: 60 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma', level: 75 },
    ],
  },
];

const techStack = [
  { name: 'HTML', icon: Code },
  { name: 'CSS', icon: Palette },
  { name: 'JavaScript', icon: Terminal },
  { name: 'React', icon: Layers },
  { name: 'Node.js', icon: Server },
  { name: 'SQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'Git', icon: GitBranch },
  { name: 'Docker', icon: Cloud },
  { name: 'Auth', icon: Lock },

];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <Motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="skills-header"
        >
          <span className="code-text">{'// Skills & Technologies'}</span>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Technologies I work with to bring ideas to life
          </p>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="tech-icons"
        >
          {techStack.map((tech, index) => (
            <Motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              className="glass-card tech-icon"
            >
              <tech.icon />
              <span>{tech.name}</span>
            </Motion.div>
          ))}
        </Motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <Motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + catIndex * 0.1 }}
              className="glass-card-hover skill-category"
            >
              <div className="skill-category-header">
                <div className={`skill-category-icon ${category.color}`}>
                  <category.icon />
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>

              <div className="skill-list">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <Motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + catIndex * 0.1 + index * 0.1 }}
                        className={`skill-progress ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
