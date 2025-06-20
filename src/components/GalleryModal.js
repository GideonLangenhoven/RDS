import React, { useEffect, useCallback } from 'react';
import './GalleryModal.css'; // We'll create this CSS file next

const GalleryModal = ({ images, startIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = React.useState(startIndex);

  // --- Navigation Handlers ---
  const handleNext = useCallback((e) => {
    e.stopPropagation(); // Prevent modal from closing
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback((e) => {
    e.stopPropagation(); // Prevent modal from closing
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  // --- Effect for Keyboard and Body Scroll ---
  useEffect(() => {
    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext(e);
      if (e.key === 'ArrowLeft') handlePrev(e);
    };

    // Disable body scroll
    const scrollPosition = window.scrollY;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
    
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup function
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollPosition);
    };
  }, [onClose, handleNext, handlePrev]);

  if (currentIndex === null || !images[currentIndex]) {
    return null;
  }

  return (
    <div className="gallery-modal-overlay" onClick={onClose}>
      <button className="modal-close-button" onClick={onClose} aria-label="Close image view">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <button className="modal-nav-button modal-prev" onClick={handlePrev} aria-label="Previous image">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
         </svg>
      </button>

      <div className="modal-image-content" onClick={(e) => e.stopPropagation()}>
        <img src={images[currentIndex]} alt={`Full screen view of event ${currentIndex + 1}`} />
      </div>

      <button className="modal-nav-button modal-next" onClick={handleNext} aria-label="Next image">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
         </svg>
      </button>
    </div>
  );
};

export default GalleryModal;