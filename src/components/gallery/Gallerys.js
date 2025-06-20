import React, { useState, useContext } from 'react';
import Card from './Card';
import Modal from './Modal';
import './Gallery.css';
import { ModalContext } from '../../context/ModalContext'; // <-- Import the context

// The galleryData array remains here (omitted for brevity)
const galleryData = [
  // ... all your gallery data from the previous step
];

const Gallery = () => {
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);
  const [modalState, setModalState] = useState({ isOpen: false, rowIndex: null, cardIndex: null });

  // Get the setter function from our global context
  const { setIsModalOpen } = useContext(ModalContext);

  const handleRowClick = (rowIndex) => {
    setExpandedRowIndex((prevIndex) => (prevIndex === rowIndex ? null : rowIndex));
  };

  const handleCollapseRow = (e) => {
    e.stopPropagation();
    setExpandedRowIndex(null);
  };

  const handleCardClick = (e, rowIndex, cardIndex) => {
    if (expandedRowIndex === rowIndex) {
      e.stopPropagation();
      setModalState({ isOpen: true, rowIndex, cardIndex });
      setIsModalOpen(true); // <-- Tell the context the modal is open
    }
  };

  const closeModal = () => {
    setModalState({ isOpen: false, rowIndex: null, cardIndex: null });
    setIsModalOpen(false); // <-- Tell the context the modal is closed
  };

  return (
    <>
      <div className="gallery-wrapper">
        <div className="gallery-grid">
          {galleryData.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`card-row ${expandedRowIndex === rowIndex ? 'is-expanded' : ''}`}
            >
              <ul
                className="card-stack"
                onClick={expandedRowIndex !== rowIndex ? () => handleRowClick(rowIndex) : undefined}
              >
                {row.map((card, cardIndex) => (
                  <Card
                    key={card.id}
                    card={card}
                    index={cardIndex}
                    isExpanded={expandedRowIndex === rowIndex}
                    onCardClick={(e) => handleCardClick(e, rowIndex, cardIndex)}
                    onCollapse={handleCollapseRow}
                    isFirst={cardIndex === 0}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        galleryData={galleryData}
        initialState={modalState}
      />
    </>
  );
};

export default Gallerys;