import React, { useState, useEffect, useCallback } from 'react';

const Modal = ({ isOpen, onClose, galleryData, initialState }) => {
  const [currentIndex, setCurrentIndex] = useState(initialState.cardIndex);

  // When the modal opens, always ensure we are on the correct card
  useEffect(() => {
    setCurrentIndex(initialState.cardIndex);
  }, [initialState.cardIndex]);

  // Memoize navigation functions to prevent re-creation on every render
  const goToNext = useCallback(() => {
    if (!galleryData || initialState.rowIndex === null) return;
    const currentRow = galleryData[initialState.rowIndex];
    setCurrentIndex(prevIndex => (prevIndex + 1) % currentRow.length);
  }, [galleryData, initialState.rowIndex]);

  const goToPrev = useCallback(() => {
    if (!galleryData || initialState.rowIndex === null) return;
    const currentRow = galleryData[initialState.rowIndex];
    setCurrentIndex(prevIndex => (prevIndex - 1 + currentRow.length) % currentRow.length);
  }, [galleryData, initialState.rowIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, goToNext, goToPrev]);

  // Prevent rendering if not open or if data is missing
  if (!isOpen || initialState.rowIndex === null || currentIndex === null) {
    return null;
  }

  const currentRow = galleryData[initialState.rowIndex];
  const currentCard = currentRow?.[currentIndex];

  // Handle cases where the card data might be missing
  if (!currentCard) {
    console.error("Modal Error: Card data not found for the given index.");
    return null;
  }

  // Prevent the modal from closing when its content is clicked
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Navigation Buttons */}
      <button className="modal-nav-btn prev" onClick={(e) => { e.stopPropagation(); goToPrev(); }} title="Previous (Left Arrow)">&#10094;</button>
      
      <div className="modal-content" onClick={handleContentClick}>
        <button className="modal-close-btn" onClick={onClose} title="Close (Esc)">&times;</button>
        
        <div className="modal-header">
          <img src={currentCard.imageUrl.replace('w=500', 'w=1200')} alt={currentCard.title} />
          <div className="modal-title-overlay">
            <h2>{currentCard.title}</h2>
          </div>
        </div>
        
        <div className="modal-body">
          <p>{currentCard.fullDescription || "No description available."}</p>
          
          {currentCard.keyOfferings && currentCard.keyOfferings.length > 0 && (
            <>
              <h3>Key Offerings</h3>
              <ul>
                {currentCard.keyOfferings.map((option, index) => (
                  <li key={index}>
                    <strong>{option.type}:</strong> {option.details}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      <button className="modal-nav-btn next" onClick={(e) => { e.stopPropagation(); goToNext(); }} title="Next (Right Arrow)">&#10095;</button>
    </div>
  );
};

export default Modal;