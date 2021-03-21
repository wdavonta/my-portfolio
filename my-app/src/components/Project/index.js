import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'WorkDay Scheduler',
      category: 'Projects',
      description: 'Site to be able to find a personal trainer',
      url: "https://wdavonta.github.io/workday-scheduler/"
    },
    {
      name: 'Horiseon',
      category: 'Projects',
      description: 'Social Solution Services Website',
      url: "https://wdavonta.github.io/Horiseon/"
    },
    {
      name: 'Dungeons End',
      category: 'Projects',
      description: 'Random Encounter Battle Generator',
      url: "https://elysiayn.github.io/dungeons-end/"
    },
    {
      name: 'Photo Hut',
      category: 'Projects',
      description: 'Community site for professional photographers',
      url: "https://ucf-photo-hut.herokuapp.com/"
      
    },
    {
      name: 'Budget-Tracker',
      category: 'Projects',
      description: 'Tracker to track you budget whenever needed offline or online',
      url: "https://calm-refuge-54253.herokuapp.com/"
    },
    {
      name: 'Weather Dashboard',
      category: 'Projects',
      description: 'Weather in location you at',
      url: "https://wdavonta.github.io/weatherdashboard/"
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
            src={require(`../../assets/Projects/${category}/${i}.jpg`)}
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