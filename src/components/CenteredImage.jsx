// src/components/CenteredImage.jsx
import React from 'react';
import './CenteredImage.css'; // Importing the CSS file for styles

const CenteredImage = () => {
  return (
    <div className="image-container">
      <img 
        src={require('../images/your-image.jpg')} // Adjust the path to your image
        alt="Description of the image"
        className="centered-image"
      />
    </div>
  );
};

export default CenteredImage;
