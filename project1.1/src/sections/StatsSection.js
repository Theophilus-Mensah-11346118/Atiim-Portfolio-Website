import React from 'react';
import '../styles.css';
import exp from '../assets/exp.png';

const StatsSection = () => {
  return (
    <div className="statsSection">
      <img src={exp} className="exp" alt="Experience" />
    </div>
  );
};

export default StatsSection;
