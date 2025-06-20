import React, { useState, useEffect, useContext } from 'react';
import ServiceCard from '../components/ServiceCard';
import ServiceDetailModal from '../components/ServiceDetailModal';
import { services } from '../data/servicesData';
import '../styles/Services.css';
import { ModalContext } from '../context/ModalContext';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeCardId, setActiveCardId] = useState(null);
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  const handleCardClick = (cardId) => {
    setActiveCardId(prevId => (prevId === cardId ? null : cardId));
  };

  const handleOpenModal = (service) => {
    setActiveCardId(service.id);
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveCardId(null);
    setSelectedService(null);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isModalOpen]);

  return (
    <>
      <div className="page-container">
        <div className="page-content">
          <h1>Our Event Planning Services</h1>
          <div className="services-grid">
            {services.map(service => (
              <ServiceCard
                key={service.id}
                service={service}
                onOpenModal={handleOpenModal}
                onCardClick={handleCardClick}
                isActive={activeCardId === service.id}
              />
            ))}
          </div>
        </div>
      </div>
      <ServiceDetailModal
        service={selectedService}
        onClose={handleCloseModal}
        isOpen={isModalOpen}
      />
    </>
  );
};

export default Services;