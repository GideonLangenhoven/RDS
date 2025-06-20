import React from 'react';
import '../styles/Hero.css';

// Import your images here
// It's better to import images directly into your component so webpack can handle them.
// Create an 'assets' folder inside 'src' for this.
// Example: import floralImage from '../assets/floral-image.jpg';
// For now, I will use placeholder URLs directly in the style.

function Hero() {
  return (
    <section id="home" className="hero-container">
      <div className="hero-main">
        {/* Left Column: Services Info */}
        <div className="hero-left">
          <div className="hero-services-content">
            <h2 className="services-title">SERVICES</h2>
            <img 
              src="https://i.imgur.com/L7s4tLQ.png" // A recreated version of your floral icon
              alt="Floral decoration" 
              className="floral-icon" 
            />
            <p className="services-subtitle">
              Let us bring your vision to life.
            </p>
            <a href="#discover" className="discover-button">
              DISCOVER
            </a>
          </div>
        </div>

        {/* Right Column: Floral Image */}
        <div className="hero-right">
          <img 
            src="https://i.imgur.com/hYdYtV8.jpg" // The close-up floral image from the screenshot
            alt="Close-up of floral arrangement with orchids" 
            className="hero-floral-image" 
          />
        </div>
      </div>

      {/* Bottom Section: Full-width Table Image */}
      <div className="hero-bottom">
        <img 
          src="https://i.imgur.com/Ndc3b1w.jpg" // The long table image from the screenshot
          alt="Long, decorated event table" 
          className="hero-table-image" 
        />
      </div>
    </section>
  );
}

export default Hero;