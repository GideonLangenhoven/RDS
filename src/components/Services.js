// src/components/Services.js

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/services'; // Make sure the path is correct
import '../styles/Services.css'; // We will create new styles for the cards

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  }
};

const ServiceCard = ({ icon, title, description, link, index }) => {
  return (
    <motion.div
      className="service-card"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      transition={{ delay: index * 0.1 }}
    >
      <div className="card-content">
        <div className="service-icon">
          <i className={icon}></i>
        </div>
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
        <Link to={link} className="service-link-button">
          Learn More <span className="arrow-span">&rarr;</span>
        </Link>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="services-grid">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          index={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          link={service.link}
        />
      ))}
    </div>
  );
};

export default Services;