import React, { useState } from 'react';
import Modal from '../Modal';

function PhotoList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const project = [
    {
      name: 'WorkDay Scheduler',
      category: 'Scheduler',
      description: 'Site to be able to find a personal trainer',
      url: "https://wdavonta.github.io/workday-scheduler/"
    },
    {
      name: 'Horiseon',
      category: 'Horiseon',
      description: 'Social Solution Services Website',
      url: "https://wdavonta.github.io/Horiseon/"
    },
    {
      name: 'Dungeons End',
      category: 'Dungeons',
      description: 'Random Encounter Battle Generator',
      url: "https://elysiayn.github.io/dungeons-end/"
    },
    {
      name: 'Photo Hut',
      category: 'Photohut',
      description: 'Community site for professional photographers',
      url: "https://ucf-photo-hut.herokuapp.com/"
      
    },
    {
      name: 'Budget-Tracker',
      category: 'Tracker',
      description: 'Tracker to track you budget whenever needed offline or online',
      url: "https://calm-refuge-54253.herokuapp.com/"
    },
    {
      name: 'Weather Dashboard',
      category: 'Weather',
      description: 'Weather in location you at',
      url: "https://wdavonta.github.io/weatherdashboard/"
    },
    {
    name: 'Maniac of HNN',
    category: 'hhnmanic',
    description: 'FanPage for HHN',
    url: "https://maniacs-of-hhn.herokuapp.com/"
  }
  ];

  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal = (image, category) => {
    setCurrentPhoto({ ...image, index: category});
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
      <div className="flex-row">
        {project.map((image) => (
          <div>
          <img
            src={image.photo}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image)}
            key={image.name}
          />
          <a href={image.url} target='_blank' rel='noreferrer' className='dest-links'>Browse the Project</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PhotoList;