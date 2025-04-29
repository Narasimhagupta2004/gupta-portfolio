import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './PortfolioSection.scss';

const PortfolioSection = () => {
  const [showAll, setShowAll] = useState(false);
  const portfolioItems = [
    {
      title: "Ecommerce Grocery Shopping Website",
      subtitle: "Full Stack / MERN",
      image: "https://via.placeholder.com/600x400",
      github: "https://github.com/yourusername/ecommerce-grocery",
      demo: "https://ecommerce-grocery-demo.com",
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Deal Finder X Website",
      subtitle: "Frontend / Backend",
      image: "https://via.placeholder.com/600x400",
      github: "https://github.com/yourusername/deal-finder",
      demo: "https://deal-finder-demo.com",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Event Management Website",
      subtitle: "Frontend Development",
      image: "https://via.placeholder.com/600x400",
      github: "https://github.com/yourusername/event-management",
      demo: "https://event-management-demo.com",
      technologies: ["React", "Firebase"]
    },
    {
      title: "QR-Generator",
      subtitle: "Full Stack Development",
      image: "https://via.placeholder.com/600x400",
      github: "https://github.com/yourusername/qr-generator",
      demo: "https://qr-generator-demo.com",
      technologies: ["React", "Node.js", "MongoDB"]
    }
  ];

  const displayedItems = showAll ? portfolioItems : portfolioItems.slice(0, 3);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
          <p>Here are some of my recent works</p>
        </div>
        <div className="portfolio-grid">
          {displayedItems.map((item, index) => (
            <motion.div
              key={index}
              className="portfolio-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="card-image">
                <img src={item.image} alt={item.title} />
                <div className="card-overlay">
                  <div className="card-links">
                    <a href={item.github} target="_blank" rel="noopener noreferrer">
                      <FiGithub />
                    </a>
                    <a href={item.demo} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p className="subtitle">{item.subtitle}</p>
                <div className="technologies">
                  {item.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {!showAll && portfolioItems.length > 3 && (
          <div className="load-more">
            <button onClick={() => setShowAll(true)} className="st-btn st-style1">
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection; 