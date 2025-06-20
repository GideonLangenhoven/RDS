import React, { useState, useEffect, useCallback } from 'react';
import '../styles/pages.css';

// Complete gallery data with all descriptions filled in
const galleryData = [
  // --- COLUMN 1 ---
  // Row 1
  [
    {
      id: 1,
      title: 'Historic Cityscapes',
      imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760c0341?w=500&q=80',
      fullDescription: 'Explore the rich history and stunning architecture of the world\'s most iconic cities. From the cobblestone streets of ancient capitals to sprawling modern metropolises, each view tells a story of culture, innovation, and time.',
      keyOfferings: [
        { type: 'Era', details: 'Renaissance to Modern' },
        { type: 'Continent', details: 'Europe' },
        { type: 'Focus', details: 'Architectural Marvels' },
      ],
    },
    {
      id: 2,
      title: 'Parisian Nights',
      imageUrl: 'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?w=500&q=80',
      fullDescription: 'Experience the magic of Paris after dark. The City of Light comes alive with illuminated landmarks, bustling cafes, and an unforgettable romantic atmosphere.',
      keyOfferings: [
        { type: 'Landmark', details: 'Eiffel Tower' },
        { type: 'Activity', details: 'Seine River Cruise' },
        { type: 'Mood', details: 'Romantic & Vibrant' },
      ],
    },
    { 
      id: 3, 
      title: 'Ancient Rome', 
      imageUrl: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=500&q=80', 
      fullDescription: 'Walk in the footsteps of emperors and gladiators as you explore the timeless ruins of the Roman Forum, the Colosseum, and the Pantheon. Discover the engineering marvels that have stood for millennia.', 
      keyOfferings: [
        {type: 'Must See', details:'The Colosseum'}, 
        {type: 'Era', details:'753 BC - 476 AD'},
        {type: 'Experience', details: 'Guided Historical Tours'}
      ] 
    },
  ],
  // Row 2
  [
    { 
      id: 5, 
      title: 'Mountain Retreats', 
      imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=80', 
      fullDescription: 'Escape to the serene beauty of the mountains. Breathe in the crisp, fresh air and find peace among towering peaks and lush valleys. Perfect for hiking, meditation, and reconnecting with nature.', 
      keyOfferings: [
        { type: 'Activity', details: 'Hiking & Trekking' },
        { type: 'Season', details: 'Spring to Fall' },
        { type: 'Difficulty', details: 'All Levels' }
      ] 
    },
    { 
      id: 6, 
      title: 'Alpine Majesty', 
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80', 
      fullDescription: 'Witness the breathtaking beauty of the Swiss Alps. Snow-capped peaks, pristine lakes, and charming villages create an unforgettable alpine experience.', 
      keyOfferings: [
        { type: 'Location', details: 'Swiss Alps' },
        { type: 'Activity', details: 'Skiing & Cable Cars' },
        { type: 'Best Time', details: 'Winter Sports Season' }
      ] 
    },
    { 
      id: 7, 
      title: 'Snowy Peaks', 
      imageUrl: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=500&q=80', 
      fullDescription: 'Experience the pristine wilderness of snow-covered mountain ranges. These majestic peaks offer world-class skiing, snowboarding, and winter photography opportunities.', 
      keyOfferings: [
        { type: 'Activities', details: 'Winter Sports' },
        { type: 'Photography', details: 'Landscape & Wildlife' },
        { type: 'Accommodation', details: 'Mountain Lodges' }
      ] 
    },
  ],
  // Row 3
  [
    { 
      id: 10, 
      title: 'Oceanic Wonders', 
      imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&q=80', 
      fullDescription: 'Dive into the mysterious depths of the ocean and discover its incredible biodiversity. From colorful coral reefs to majestic marine life, the ocean holds endless wonders.', 
      keyOfferings: [
        { type: 'Activity', details: 'Scuba Diving' },
        { type: 'Marine Life', details: 'Dolphins, Turtles, Rays' },
        { type: 'Depth', details: '5-30 meters' }
      ] 
    },
    { 
      id: 11, 
      title: 'Coral Reefs', 
      imageUrl: 'https://images.unsplash.com/photo-1551296336-55d81b459427?w=500&q=80', 
      fullDescription: 'Explore vibrant underwater gardens teeming with life. These coral ecosystems are home to thousands of species and offer some of the world\'s best snorkeling and diving experiences.', 
      keyOfferings: [
        { type: 'Best Spots', details: 'Great Barrier Reef' },
        { type: 'Visibility', details: '20-40 meters' },
        { type: 'Conservation', details: 'Protected Marine Parks' }
      ] 
    },
    { 
      id: 12, 
      title: 'Coastal Views', 
      imageUrl: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?w=500&q=80', 
      fullDescription: 'Relax along stunning coastlines where the ocean meets dramatic cliffs and sandy beaches. Perfect for sunset viewing, beach walks, and coastal photography.', 
      keyOfferings: [
        { type: 'Terrain', details: 'Cliffs & Beaches' },
        { type: 'Best Time', details: 'Golden Hour' },
        { type: 'Activities', details: 'Photography & Relaxation' }
      ] 
    },
  ],
  // --- COLUMN 2 ---
  // Row 4
  [
    {
      id: 13,
      title: 'Tokyo Cyberpunk',
      imageUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=500&q=80',
      fullDescription: 'Dive into the neon-drenched streets of Tokyo. A fusion of ultramodern technology and ancient tradition, creating a unique and vibrant urban landscape that never sleeps.',
      keyOfferings: [
        { type: 'District', details: 'Shinjuku, Shibuya' },
        { type: 'Vibe', details: 'Futuristic & Energetic' },
        { type: 'Activity', details: 'Night Photography' },
      ],
    },
    {
      id: 14,
      title: 'Kyoto\'s Serenity',
      imageUrl: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=500&q=80',
      fullDescription: 'Find tranquility in the temples, gardens, and bamboo forests of Kyoto. A city that embodies the soul of old Japan with its preserved architecture and spiritual atmosphere.',
      keyOfferings: [
        { type: 'Highlight', details: 'Fushimi Inari Shrine' },
        { type: 'Experience', details: 'Tea Ceremony' },
        { type: 'Season', details: 'Cherry Blossom (Spring)' },
      ],
    },
    {
      id: 15,
      title: 'Osaka Street Food',
      imageUrl: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&q=80',
      fullDescription: 'Indulge in Japan\'s culinary capital where street food culture thrives. From takoyaki to okonomiyaki, experience authentic flavors in bustling night markets.',
      keyOfferings: [
        { type: 'Specialty', details: 'Takoyaki & Okonomiyaki' },
        { type: 'District', details: 'Dotonbori' },
        { type: 'Experience', details: 'Food Tours' }
      ]
    }
  ],
  // Row 5
  [
    { 
      id: 16, 
      title: 'Desert Adventures', 
      imageUrl: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=500&q=80', 
      fullDescription: 'Explore vast and beautiful desert landscapes where golden dunes stretch endlessly under starlit skies. Experience camel treks, desert camping, and breathtaking sunrises.', 
      keyOfferings: [
        { type: 'Activity', details: 'Camel Trekking' },
        { type: 'Accommodation', details: 'Desert Camps' },
        { type: 'Best Time', details: 'October to March' }
      ] 
    },
    { 
      id: 17, 
      title: 'Canyon Depths', 
      imageUrl: 'https://images.unsplash.com/photo-1529944439366-c74b81580eab?w=500&q=80', 
      fullDescription: 'Descend into magnificent canyons carved by time and nature. These geological wonders offer incredible hiking opportunities and stunning rock formations.', 
      keyOfferings: [
        { type: 'Famous Site', details: 'Grand Canyon' },
        { type: 'Activity', details: 'Hiking & Rafting' },
        { type: 'Geology', details: 'Ancient Rock Layers' }
      ] 
    },
    { 
      id: 18, 
      title: 'Oasis Mirage', 
      imageUrl: 'https://images.unsplash.com/photo-1542642240-595108344510?w=500&q=80', 
      fullDescription: 'Discover hidden oases in the heart of vast deserts. These rare havens of life offer respite for travelers and showcase nature\'s resilience in harsh environments.', 
      keyOfferings: [
        { type: 'Features', details: 'Palm Trees & Springs' },
        { type: 'Wildlife', details: 'Desert Adapted Species' },
        { type: 'Culture', details: 'Nomadic Traditions' }
      ] 
    },
  ],
  // Row 6
  [
    { 
      id: 19, 
      title: 'Tropical Paradise', 
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723a996f6ea?w=500&q=80', 
      fullDescription: 'Relax on pristine beaches with crystal-clear turquoise waters and swaying palm trees. These tropical destinations offer the perfect escape from everyday life.', 
      keyOfferings: [
        { type: 'Activities', details: 'Swimming & Snorkeling' },
        { type: 'Accommodation', details: 'Beach Resorts' },
        { type: 'Climate', details: 'Year-round Warmth' }
      ] 
    },
    { 
      id: 20, 
      title: 'Island Getaway', 
      imageUrl: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=500&q=80', 
      fullDescription: 'Escape to remote islands where time stands still. These secluded paradises offer ultimate privacy, pristine nature, and unforgettable sunsets over the ocean.', 
      keyOfferings: [
        { type: 'Privacy', details: 'Secluded Locations' },
        { type: 'Activities', details: 'Water Sports' },
        { type: 'Relaxation', details: 'Spa & Wellness' }
      ] 
    },
    { 
      id: 21, 
      title: 'Sunset Sails', 
      imageUrl: 'https://images.unsplash.com/photo-1543973194-2c5243b7f83e?w=500&q=80', 
      fullDescription: 'Experience magical sunsets from the deck of a sailing yacht. Watch the sky transform into a canvas of colors as you glide across calm waters with gentle ocean breezes.', 
      keyOfferings: [
        { type: 'Experience', details: 'Sunset Cruises' },
        { type: 'Duration', details: '2-4 Hours' },
        { type: 'Includes', details: 'Refreshments & Music' }
      ] 
    },
  ],
];

// Card Component
const Card = ({ card, index, isExpanded, onCardClick, onCollapse, isFirst }) => {
  const cardStyle = isExpanded ? {} : {
    '--index': index,
    zIndex: 10 - index,
    transform: `translateY(${index * 10}px) scale(${1 - index * 0.05})`
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
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </div>
      )}
      <img src={card.imageUrl} alt={card.title} />
      {isExpanded && (
        <div className="card-overlay">
          <h3>{card.title}</h3>
        </div>
      )}
    </li>
  );
};

// Modal Component
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
      <button className="modal-nav-btn prev" onClick={(e) => { e.stopPropagation(); goToPrev(); }}>&#10094;</button>
      
      <div className="modal-content" onClick={handleContentClick}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        
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

      <button className="modal-nav-btn next" onClick={(e) => { e.stopPropagation(); goToNext(); }}>&#10095;</button>
    </div>
  );
};

// Main Gallery Component
const Gallery = () => {
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);
  const [modalState, setModalState] = useState({ isOpen: false, rowIndex: null, cardIndex: null });

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
    }
  };

  const closeModal = () => {
    setModalState({ isOpen: false, rowIndex: null, cardIndex: null });
  };

  return (
    <>
      {/* ... (the provided style and layout code) ... */}
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

export default Gallery;
