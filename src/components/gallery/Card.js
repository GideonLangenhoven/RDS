import React from 'react';

const Card = ({ card, index, isExpanded, onCardClick, onCollapse, isFirst }) => {
  const cardStyle = isExpanded ? {} : {
    '--index': index,
    zIndex: 10 - index,
    transform: `translateY(${index * 10}px) scale(${1 - index * 0.05})`,
  };

  return (
    <li
      className={`card ${isExpanded ? 'expanded' : ''}`}
      style={cardStyle}
      onClick={isExpanded ? onCardClick : undefined}
    >
      {isExpanded && isFirst && (
        <div className="back-arrow" onClick={onCollapse}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </div>
      )}
      <img src={card.imageUrl} alt={card.title} />
      {/* This overlay adds a subtle gradient for better text readability if you add a title */}
      <div className="card-gradient-overlay"></div>
    </li>
  );
};

export default Card;