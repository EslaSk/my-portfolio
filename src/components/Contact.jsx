import React from 'react';
import { motion } from 'framer-motion';
import AboutBackground from './AboutBackground';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Contact = () => {
  return (
    <section id="contact" style={{ position: 'relative' }}>
    <AboutBackground />
    <div className="section-inner" style={{ position: 'relative', zIndex: 10 }}>
      <div className="contact-grid">
        <motion.div 
          className="contact-left"
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
          <motion.p variants={fadeUpVariant} className="section-label">Get in touch</motion.p>
          <motion.h2 variants={fadeUpVariant}>Let's build<br/>something <em>great</em></motion.h2>
          <motion.p variants={fadeUpVariant}>Have a project in mind, or just want to talk? I'm always open to new opportunities and interesting conversations. I'll get back to you within 24 hours.</motion.p>
          
          <motion.div variants={fadeUpVariant} className="contact-info">
            <a href="mailto:kagbuesla@gmail.com" className="contact-item">
              <span className="contact-icon">@</span>kagbuesla@gmail.com
            </a>
            <a href="tel:+2349133910415" className="contact-item">
              <span className="contact-icon">#</span>+234 913-3910-415
            </a>
            <div className="contact-item">
              <span className="contact-icon">◎</span>Available worldwide · Remote
            </div>
          </motion.div>
          
          <motion.div variants={fadeUpVariant} className="contact-socials">
            <a href="https://github.com/EslaSk" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
            <a href="https://x.com/Kagbuesla" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">Twitter / X</a>
            <a href="https://www.linkedin.com/in/esla-kagbu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="contact-right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
        >
          <form id="contact-form" action="https://formspree.io/f/xyklwgbp" method="POST">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first_name" placeholder="John" required/>
                <span className="field-error" id="err-first-name"></span>
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last_name" placeholder="Doe" required/>
                <span className="field-error" id="err-last-name"></span>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" required/>
              <span className="field-error" id="err-email"></span>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Project enquiry"/>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about your project..." required></textarea>
              <span className="field-error" id="err-message"></span>
            </div>
            <button type="submit" id="submit-btn">
              <span className="btn-text">Send Message →</span>
              <span className="btn-sending" hidden>Sending...</span>
            </button>
            <div className="form-success" id="form-success" hidden>
              Message sent! I'll get back to you within 24 hours.
            </div>
            <div className="form-error-msg" id="form-error" hidden>
              Something went wrong. Please try emailing me directly at kagbuesla@gmail.com
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Contact;
