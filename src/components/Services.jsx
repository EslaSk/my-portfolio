import React from 'react';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Services = () => {
  return (
    <section id="services" style={{ position: 'relative' }}>
    <div className="section-inner" style={{ position: 'relative', zIndex: 10 }}>
      <motion.div 
        className="services-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
      >
        <p className="section-label">What I offer</p>
        <h2>Services</h2>
      </motion.div>
      <motion.div 
        className="services-grid"
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
        <motion.div variants={fadeUpVariant} className="service-card">
          <span className="service-num">01</span>
          <div className="service-icon">⬡</div>
          <h3>Frontend Development</h3>
          <p>Pixel-perfect, performant interfaces built with modern tooling. I translate designs into fast, accessible, and maintainable code.</p>
          <div className="service-tags">
            <span>React</span><span>TypeScript</span><span>Tailwind</span>
          </div>
        </motion.div>
        <motion.div variants={fadeUpVariant} className="service-card">
          <span className="service-num">02</span>
          <div className="service-icon">◈</div>
          <h3>Full Stack Development</h3>
          <p>End-to-end web applications — from database design and API architecture to polished frontend interfaces ready for production.</p>
          <div className="service-tags">
            <span>Node.js</span><span>REST APIs</span><span>Python</span>
          </div>
        </motion.div>
        <motion.div variants={fadeUpVariant} className="service-card">
          <span className="service-num">03</span>
          <div className="service-icon">✦</div>
          <h3>UI / UX Implementation</h3>
          <p>Bringing design files to life with meticulous attention to detail — animations, interactions, and responsive behaviour across all devices.</p>
          <div className="service-tags">
            <span>Figma</span><span>CSS</span><span>Motion</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
  );
};

export default Services;
