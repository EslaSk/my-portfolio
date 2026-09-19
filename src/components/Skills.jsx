import React from 'react';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Skills = () => {
  return (
    <section id="skills" style={{ position: 'relative' }}>
    <div className="section-inner" style={{ position: 'relative', zIndex: 10 }}>
      <motion.div 
        className="skills-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
      >
        <p className="section-label">What I work with</p>
        <h2>Skills &amp; <em>Tools</em></h2>
      </motion.div>
      <motion.div 
        className="skills-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <motion.div variants={fadeUpVariant} className="skill-card">
          <div className="skill-icon">⬡</div>
          <h3>Languages</h3>
          <ul>
            <li>HTML &amp; CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
          </ul>
        </motion.div>
        <motion.div variants={fadeUpVariant} className="skill-card">
          <div className="skill-icon">◈</div>
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Responsive Design</li>
            <li>Accessibility</li>
          </ul>
        </motion.div>
        <motion.div variants={fadeUpVariant} className="skill-card">
          <div className="skill-icon">✦</div>
          <h3>Backend &amp; Tools</h3>
          <ul>
            <li>Node.js</li>
            <li>Git &amp; GitHub</li>
            <li>REST APIs</li>
            <li>VS Code</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  </section>
  );
};

export default Skills;
