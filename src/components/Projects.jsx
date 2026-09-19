import React from 'react';
import { motion } from 'framer-motion';
import AboutBackground from './AboutBackground';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Projects = () => {
  return (
    <section id="projects" style={{ position: 'relative' }}>
    <AboutBackground />
    <div className="section-inner" style={{ position: 'relative', zIndex: 10 }}>
      <motion.div 
        className="projects-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
      >
        <div>
          <p className="section-label">Selected work</p>
          <h2>Things I've <em>built</em></h2>
        </div>
        <div className="filter-wrap">
          <button className="filter-btn active" data-filter="all">All</button>
          <button className="filter-btn" data-filter="frontend">Frontend</button>
          <button className="filter-btn" data-filter="fullstack">Full Stack</button>
          <button className="filter-btn" data-filter="ui">UI / UX</button>
        </div>
      </motion.div>
      <motion.div 
        className="projects-grid"
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
        <motion.div variants={fadeUpVariant} className="project-card project-card--media" data-category="frontend">
          <div className="project-media">
            <video src="/image/salon-website.mp4" muted loop playsInline className="project-video"></video>
            <div className="project-media-overlay">▶ Play</div>
          </div>
          <div className="project-body">
            <div className="project-num-inline">01</div>
            <div className="project-tags">
              <span>HTML</span><span>CSS</span><span>JavaScript</span>
            </div>
            <h3>Lash &amp; Salon Website</h3>
            <p>A fully responsive website for a lash tech and salon business — clean layout, booking-focused design, and smooth interactions across all devices.</p>
            <span className="project-link project-link--muted">Local project · not deployed</span>
          </div>
        </motion.div>
        
        <motion.div variants={fadeUpVariant} className="project-card project-card--media" data-category="ui">
          <div className="project-media">
            <img src="/image/finance-dashboard.png" alt="Financial Dashboard" className="project-screenshot"/>
          </div>
          <div className="project-body">
            <div className="project-num-inline">02</div>
            <div className="project-tags">
              <span>React</span><span>TypeScript</span><span>Tailwind</span>
            </div>
            <h3>Financial Dashboard</h3>
            <p>A data-rich financial dashboard with charts, summaries, and real-time-ready components. Built with a focus on clarity and usability.</p>
            <span className="project-link project-link--muted">Local project · not deployed</span>
          </div>
        </motion.div>
        
        <motion.div variants={fadeUpVariant} className="project-card project-card--media" data-category="frontend">
          <div className="project-media">
            <img src="/image/marketing-website.png" alt="Digital Marketing Website" className="project-screenshot"/>
          </div>
          <div className="project-body">
            <div className="project-num-inline">03</div>
            <div className="project-tags">
              <span>HTML</span><span>CSS</span><span>JavaScript</span>
            </div>
            <h3>Digital Marketing Website</h3>
            <p>A modern, conversion-focused website for a digital marketing agency — bold layout, clear messaging, and a strong visual hierarchy.</p>
            <span className="project-link project-link--muted">Local project · not deployed</span>
          </div>
        </motion.div>
        
        <motion.div variants={fadeUpVariant} className="project-card" data-category="fullstack">
          <div className="project-num">04</div>

          <div className="project-body">
            <div className="project-tags">
              <span>React</span><span>Node.js</span><span>Python</span>
            </div>
            <h3>Crest Studio</h3>
            <p>A full-featured web platform for a creative studio — from design system implementation to production deployment and CI/CD setup.</p>
            <a href="https://github.com/EslaSk" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub →</a>
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="projects-cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
      >
        <a href="https://github.com/EslaSk" target="_blank" rel="noopener noreferrer" className="btn-outline">See all on GitHub →</a>
      </motion.div>
    </div>
  </section>
  );
};

export default Projects;
