import React from 'react';

const ServiceDetailModal = ({ service, onClose, isOpen }) => {
  if (!isOpen || !service) {
    return null;
  }

  // Prevent closing when clicking inside modal-content
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`modal-overlay open`}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      <div className="modal-content" onClick={handleContentClick}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          &times;
        </button>
        <div className="modal-header">
          <img src={service.image} alt={service.title} />
          <div className="modal-title-overlay">
            <h2>{service.title}</h2>
          </div>
        </div>
        <div className="modal-body">
          <p>{service.fullDescription}</p>
          <h3>Key Offerings</h3>
          <ul>
            {service.summaryOptions.map((option, index) => (
              <li key={index}>
                <strong>{option.type}:</strong> {option.details}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;