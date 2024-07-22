import React from 'react';
import '../styles.css';

const CustomButton = ({ onClick, title }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {title}
    </button>
  );
};

export default CustomButton;
