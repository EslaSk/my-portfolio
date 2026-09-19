import React from 'react';
import { motion } from 'framer-motion';
import AboutBackground from './AboutBackground';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const About = () => {
  return (
    <section id="about" style={{ position: 'relative' }}>
    <AboutBackground />
    <div className="section-inner" style={{ position: 'relative', zIndex: 10 }}>
      <div className="about-grid">
        <motion.div 
          className="about-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <p className="section-label">About me</p>
          <h2>Turning ideas into<br/><em>real products</em></h2>
          <div className="about-img-wrap">
            <img src="image/coding.jpg" alt="Esla Kagbu coding" className="about-img"/>
          </div>
        </motion.div>
        
        <motion.div 
          className="about-right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { 
                duration: 0.8, 
                ease: "easeOut",
                staggerChildren: 0.2,
                delayChildren: 0.2
              } 
            }
          }}
        >
          <motion.p variants={fadeUpVariant}>
            I'm Esla Kagbu, a Software Engineer and Frontend Developer with a focus on building clean, high-performance web applications. I care deeply about the details — the kind that make a product feel polished and intentional.
          </motion.p>
          <motion.p variants={fadeUpVariant}>
            With hands-on experience across the full frontend stack, I thrive at the intersection of design and engineering. I've contributed to real-world projects through tech bounties, collaborating with distributed teams to ship solutions that matter.
          </motion.p>
          <motion.p variants={fadeUpVariant}>
            When I'm not writing code, I'm thinking about how to make existing things better — faster, cleaner, more accessible.
          </motion.p>
          
          <motion.div className="about-stats" variants={fadeUpVariant}>
            <div className="stat">
              <span className="stat-num">5+</span>
              <span className="stat-label">Years experience</span>
            </div>
            <div className="stat">
              <span className="stat-num">40+</span>
              <span className="stat-label">Projects delivered</span>
            </div>
            <div className="stat">
              <span className="stat-num">30+</span>
              <span className="stat-label">Happy clients</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;
