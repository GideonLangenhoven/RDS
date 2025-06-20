import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import { ModalContext } from '../context/ModalContext';

function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isModalOpen } = useContext(ModalContext) || {};

  useEffect(() => {
    // We will hide the header once the user scrolls 30% down the viewport height
    const scrollThreshold = window.innerHeight * 0.3;

    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Run on mount to set initial state
    handleScroll();

    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    setIsHeaderVisible(true);
  };

  const handleMouseLeave = () => {
    // When the mouse leaves the top area, hide the header again if past the scroll threshold
    const scrollThreshold = window.innerHeight * 0.3;
    if (window.scrollY > scrollThreshold) {
      setIsHeaderVisible(false);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  if (isModalOpen) return null;

  return (
    // This wrapper is the hoverable area at the top of the screen
    <div 
      className="header-hover-zone"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <header className={`site-header ${isHeaderVisible ? 'header-visible' : 'header-hidden'}`}>
        <nav className="nav-container">
          <div className="logo-container">
            <Link to="/" className="logo" onClick={closeMobileMenu}>RDS Entertainment</Link>
          </div>
          
          <button 
            className={`mobile-menu-button ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul>
              <li className={isActive('/') ? 'active' : ''}>
                <Link to="/" onClick={closeMobileMenu}>Home</Link>
              </li>
              <li className={isActive('/services') ? 'active' : ''}>
                <Link to="/services" onClick={closeMobileMenu}>Services</Link>
              </li>
              <li className={isActive('/testimonials') ? 'active' : ''}>
                <Link to="/testimonials" onClick={closeMobileMenu}>Testimonials</Link>
              </li>
              <li className={isActive('/gallery') ? 'active' : ''}>
                <Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link>
              </li>
              <li className={isActive('/contact') ? 'active' : ''}>
                <Link to="/contact" onClick={closeMobileMenu} className="contact-link">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;