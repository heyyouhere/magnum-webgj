import React, { useState } from 'react';
import './VideoBlock.css'


const ImageWithVideoOnHover = ({imageUrl, videoUrl, title, subtitle}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='interactiveVideo'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <>
        <img className='interactiveVideo__image' src={videoUrl} loading='lazy' alt="Hover to play video"/>
        <div className='interactiveVideo__overlay'><div className='interactiveVideo__subtitle'><p className='interactiveVideo__project-name'>{title}</p><p className='interactiveVideo__project-hash'>{subtitle}</p></div></div>
        </>
      ) : (
        <>
          <img className='interactiveVideo__image' src={imageUrl} loading='lazy' alt="Hover to play video"/>
          <div className='interactiveVideo__overlay'><div className='interactiveVideo__subtitle'><p className='interactiveVideo__project-name'>{title}</p><p className='interactiveVideo__project-hash'>{subtitle}</p></div></div>
        </>
      )}
    </div>
  );
};

export default ImageWithVideoOnHover;
