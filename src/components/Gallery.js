import React, { useState } from 'react';
import Card from './Card';
import Modal from './Modal';
import './Gallery.css';

// Data is now doubled to populate two columns, with unique IDs for all cards.
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
    { id: 3, title: 'Ancient Rome', imageUrl: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=500&q=80', fullDescription: 'Walk in the footsteps of emperors and gladiators as you explore the timeless ruins of the Roman Forum, the Colosseum, and the Pantheon.', keyOfferings: [{type: 'Must See', details:'The Colosseum'}, {type: 'Era', details:'753 BC - 476 AD'}] },
  ],
  // Row 2
  [
    { id: 5, title: 'Mountain Retreats', imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=80', fullDescription: 'Escape to the serene beauty of the mountains. Breathe in the crisp, fresh air and find peace among towering peaks and lush valleys.', keyOfferings: [] },
    { id: 6, title: 'Alpine Majesty', imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80', fullDescription: 'Description for Alpine Majesty...', keyOfferings: [] },
    { id: 7, title: 'Snowy Peaks', imageUrl: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=500&q=80', fullDescription: 'Description for Snowy Peaks...', keyOfferings: [] },
  ],
  // Row 3
  [
    { id: 10, title: 'Oceanic Wonders', imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&q=80', fullDescription: 'Description for Oceanic Wonders...', keyOfferings: [] },
    { id: 11, title: 'Coral Reefs', imageUrl: 'https://images.unsplash.com/photo-1551296336-55d81b459427?w=500&q=80', fullDescription: 'Description for Coral Reefs...', keyOfferings: [] },
    { id: 12, title: 'Coastal Views', imageUrl: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?w=500&q=80', fullDescription: 'Description for Coastal Views...', keyOfferings: [] },
  ],
  // --- COLUMN 2 ---
  // Row 4 (Copy of Row 1)
  [
    {
      id: 13,
      title: 'Tokyo Cyberpunk',
      imageUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=500&q=80',
      fullDescription: 'Dive into the neon-drenched streets of Tokyo. A fusion of ultramodern technology and ancient tradition, creating a unique and vibrant urban landscape.',
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
      fullDescription: 'Find tranquility in the temples, gardens, and bamboo forests of Kyoto. A city that embodies the soul of old Japan.',
      keyOfferings: [
        { type: 'Highlight', details: 'Fushimi Inari Shrine' },
        { type: 'Experience', details: 'Tea Ceremony' },
        { type: 'Season', details: 'Cherry Blossom (Spring)' },
      ],
    },
  ],
  // Row 5 (Copy of Row 2)
  [
    { id: 15, title: 'Desert Adventures', imageUrl: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=500&q=80', fullDescription: 'Explore vast and beautiful desert landscapes.', keyOfferings: [] },
    { id: 16, title: 'Canyon Depths', imageUrl: 'https://images.unsplash.com/photo-1529944439366-c74b81580eab?w=500&q=80', fullDescription: 'Description for Canyon Depths...', keyOfferings: [] },
    { id: 17, title: 'Oasis Mirage', imageUrl: 'https://images.unsplash.com/photo-1542642240-595108344510?w=500&q=80', fullDescription: 'Description for Oasis Mirage...', keyOfferings: [] },
  ],
  // Row 6 (Copy of Row 3)
  [
    { id: 18, title: 'Tropical Paradise', imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723a996f6ea?w=500&q=80', fullDescription: 'Relax on pristine beaches with turquoise waters.', keyOfferings: [] },
    { id: 19, title: 'Island Getaway', imageUrl: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=500&q=80', fullDescription: 'Description for Island Getaway...', keyOfferings: [] },
    { id: 20, title: 'Sunset Sails', imageUrl: 'https://images.unsplash.com/photo-1543973194-2c5243b7f83e?w=500&q=80', fullDescription: 'Description for Sunset Sails...', keyOfferings: [] },
  ],
];


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

  // This function is only called when a card in an already-expanded row is clicked.
  const handleCardClick = (e, rowIndex, cardIndex) => {
    if (expandedRowIndex === rowIndex) {
      e.stopPropagation(); // Prevent the row from collapsing
      setModalState({ isOpen: true, rowIndex, cardIndex });
    }
  };

  const closeModal = () => {
    setModalState({ isOpen: false, rowIndex: null, cardIndex: null });
  };

  return (
    <>
      <div className="gallery-wrapper">
        {galleryData.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`card-row ${expandedRowIndex === rowIndex ? 'is-expanded' : ''}`}
          >
            <ul
              className="card-stack"
              onClick={() => handleRowClick(rowIndex)}
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