import React from 'react';
import '../styles.css';
import globe from '../assets/globe.png';

const Globe = () => {
  return (
    <div className="globesection">
      <img src={globe} className="globe" alt="Experience" />
    </div>
  );
};

export default Globe;
