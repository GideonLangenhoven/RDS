import React, { useState, useEffect, useCallback } from 'react';

const Modal = ({ isOpen, onClose, galleryData, initialState }) => {
  const [currentIndex, setCurrentIndex] = useState(initialState.cardIndex);

  useEffect(() => {
    setCurrentIndex(initialState.cardIndex);
  }, [initialState.cardIndex]);

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

  if (!isOpen || initialState.rowIndex === null || currentIndex === null) {
    return null;
  }

  const currentRow = galleryData[initialState.rowIndex];
  const currentCard = currentRow?.[currentIndex];

  if (!currentCard) {
    return null;
  }

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <button className="modal-nav-btn prev" onClick={(e) => { e.stopPropagation(); goToPrev(); }}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      <div className="modal-content" onClick={handleContentClick}>
        <button className="modal-close-btn" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>

        <div className="modal-header">
          <img src={currentCard.imageUrl.replace('w=500', 'w=1200')} alt={currentCard.title} />
          <div className="modal-title-overlay">
            <h2>{currentCard.title}</h2>
          </div>
        </div>

        <div className="modal-body">
          <p>{currentCard.fullDescription}</p>

          {currentCard.keyOfferings && currentCard.keyOfferings.length > 0 && (
            <>
              <h3>Key Highlights</h3>
              <div className="key-offerings">
                {currentCard.keyOfferings.map((option, index) => (
                  <div key={index} className="offering-item">
                    <span className="offering-type">{option.type}</span>
                    <span className="offering-details">{option.details}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <button className="modal-nav-btn next" onClick={(e) => { e.stopPropagation(); goToNext(); }}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
      </button>
    </div>
  );
};

export default Modal;