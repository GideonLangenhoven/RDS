import React from 'react';

const Card = ({ card, index, isExpanded, onCardClick, onCollapse, isFirst }) => {
  const style = {
    '--index': index,
  };

  const BackArrowIcon = () => (
    <div className="back-arrow" onClick={onCollapse} title="Collapse Row">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
      </svg>
    </div>
  );

  return (
    <li
      className="card"
      style={style}
      onClick={onCardClick}
    >
      {isExpanded && isFirst && <BackArrowIcon />}
      <img src={card.imageUrl} alt={card.title} />
    </li>
  );
};

export default Card;