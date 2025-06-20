import React, { useEffect, useRef } from 'react';
import '../styles/Gallery.css';

function Gallery() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="gallery" className="gallery-section" ref={sectionRef}>
      <div className="gallery-background-image"></div>
      <div className="gallery-content">
        <div className="gallery-text-column">
          {/* Content for the left column can be added here if needed */}
        </div>
        <div className="gallery-text-column-right">
            <h2 className="gallery-title">GALLERY</h2>
            <svg className="decorative-icon" width="46" height="49" viewBox="0 0 46 49">
                {/* SVG path data from original site */}
                <path d="M63.4 19.6C51 41.8 43.7 66.9 43.1 92.3c0 .4.3.7.7.7.4 0 .7-.3.7-.7.6-25.2 7.8-50 20-72 .2-.3.1-.7-.2-.9-.4-.2-.8-.1-.9.2z" fill="white"></path>
                <path d="M45.3 73.8C37.2 68 30 61 23.8 53.2c-.5-.7-1.5.3-1 1 6.3 7.9 13.6 14.9 21.8 20.8.7.5 1.4-.7.7-1.2z" fill="white"></path>
            </svg>
            <p className="gallery-description">Make your memories last.</p>
            <a href="/gallery" className="discover-button-gallery">DISCOVER</a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
