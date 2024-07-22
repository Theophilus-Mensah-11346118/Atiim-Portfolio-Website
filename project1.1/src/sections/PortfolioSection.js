import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import '../styles.css';
import dummyimg1 from '../assets/dummyimg1.png';
import dummyimg2 from '../assets/dummyimg2.png';
import dummyimg3 from '../assets/dummyimg3.png';

const dummyImages = [dummyimg1, dummyimg1, dummyimg1, dummyimg2, dummyimg3, dummyimg1, dummyimg3, dummyimg3, dummyimg2, dummyimg2];

const PortfolioSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo('.card', { x: '100%' }, { x: 0, duration: 1, stagger: 0.2 });
    gsap.to('.card', { scale: 1.1, duration: 0.2, yoyo: true, repeat: -1, paused: true, ease: 'power1.inOut' });
  }, []);

  const handleMouseEnter = (index) => {
    gsap.to(`.card-${index}`, { scale: 1.2, zIndex: 1, duration: 0.3 });
  };

  const handleMouseLeave = (index) => {
    gsap.to(`.card-${index}`, { scale: 1, zIndex: 0, duration: 0.3 });
  };

  const handleClick = (index) => {
    navigate('/portfolio');
  };

  return (
    <div className="main">
      <h2 className="main_heading">Portfolio</h2>
      <div className="cards">
        {dummyImages.slice(0, 5).map((image, index) => (
          <div
            key={index}
            className={`card card-${index + 1}`}
            onMouseEnter={() => handleMouseEnter(index + 1)}
            onMouseLeave={() => handleMouseLeave(index + 1)}
            onClick={() => handleClick(index + 1)}
          >
            <img src={image} alt={`Portfolio ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
