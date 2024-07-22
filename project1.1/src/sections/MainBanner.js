import React from 'react';
import '../styles.css';
import bannerImage from '../assets/banner.jpg';

const MainBanner = () => {
  return (
    <div className="banner">
      <div className="bannerImage" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="textContainer1">
          <h1 className="bannerTitle1">Crafting Innovative Software Solutions</h1>
          <p className="bannerText1">
            We transform businesses through our innovative software.<br /> 
            Our seasoned software engineering team specializes in crafting <br /> 
            cutting-edge digital solutions that drive tangible business growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
