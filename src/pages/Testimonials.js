import React from 'react';
import TestimonialSlideshow from '../components/TestimonialSlideshow';
import '../styles/pages.css';

const Testimonials = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Voices of Empowered Teams</h1>
        <p className="page-intro">
          Discover how our events have transformed corporate cultures and ignited motivation, as shared by our valued clients.
        </p>
        <div className="testimonials-section">
          <TestimonialSlideshow fullPage={true} />
        </div>
        <div className="cta-section">
          <h2>Ready to elevate your team's potential?</h2>
          <p>Connect with us to design your next impactful team event.</p>
          <a href="/contact" className="cta-button">Get in Touch</a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
