// src/components/HeroSection.js

import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src="C:\Users\hp\Pictures\jersey store\IMG_20220401_180954.jpg" alt="Hero" className="hero-image" />
      <div className="hero-content">
        <h1 className="hero-title">Discover Your Favorite Jerseys</h1>
        <p className="hero-subtitle">Exclusive Collection of Top Football Kits</p>
        <a href="#featured" className="cta-button">Shop Now</a>
      </div>
    </div>
  );
};

export default HeroSection;
