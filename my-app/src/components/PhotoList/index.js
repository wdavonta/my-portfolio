import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Run Buddy',
      category: 'landscape',
      description: 'Site to be able to find a personal trainer',
    },
    {
      name: 'Horiseon',
      category: 'landscape',
      description: 'Social Solution Services Website',
    },
    {
      name: 'Dungeons End',
      category: 'landscape',
      description: 'Random Encounter Battle Generator',
    },
    {
      name: 'Photo Hut',
      category: 'landscape',
      description: 'Community site for professional photographers',
    },
    {
      name: 'Budget-Tracker',
      category: 'landscape',
      description: 'Tracker to track you budget whenever needed offline or online',
    },
    {
      name: 'Photo-Port',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;