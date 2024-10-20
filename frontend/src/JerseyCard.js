// src/JerseyCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import './JerseyCard.css'; // Ensure the path is correct

const JerseyCard = ({ id, name, image, price }) => {
  return (
    <div className="jersey-card">
      <Link to={`/jersey/${id}`}>
        <img src={image} alt={name} className="jersey-image" />
        <h3>{name}</h3>
        <p className="jersey-price">{price}</p>
      </Link>
    </div>
  );
};

export default JerseyCard;
