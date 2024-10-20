// src/JerseyList.js

import React from 'react';
import JerseyCard from './JerseyCard';
import jerseyData from './data/jerseys';
import './JerseyList.css';

const JerseyList = () => {
  return (
    <div className="jersey-list">
      {Object.keys(jerseyData.club).map(club => (
        <div key={club} className="team-section">
          <h2 className="team-title">{club}</h2>
          <div className="jersey-row">
            {jerseyData.club[club].map(jersey => (
              <JerseyCard
                key={jersey.id}
                id={jersey.id}
                name={jersey.name}
                price={jersey.price}
                image={jersey.image}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JerseyList;
