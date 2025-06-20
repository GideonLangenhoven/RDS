import React from 'react';
import Gallery from '../components/Gallery';
import '../styles/pages.css';

const GalleryPage = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Showcasing Team Success</h1>
        <p className="page-intro">
          Explore our visual portfolio of impactful team events designed to foster collaboration, boost morale, and cultivate exceptional corporate cultures.
        </p>
        <div className="gallery-section">
          <Gallery fullPage={true} />
        </div>
        <div className="cta-section">
          <h2>Ready to inspire your team?</h2>
          <p>Let's collaborate to create a powerful event that transforms your corporate culture.</p>
          <a href="/contact" className="cta-button">Start Your Transformation</a>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
