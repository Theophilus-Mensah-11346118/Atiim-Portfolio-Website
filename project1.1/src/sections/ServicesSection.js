import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';
import '../styles.css';

// Import images
import webdesIcon from '../assets/webdes.png';
import webdevIcon from '../assets/webdev.png';
import uxuiIcon from '../assets/uxui.png';
import productIcon from '../assets/product.png';
import graphdesIcon from '../assets/graphdes.png';
import branddesIcon from '../assets/branddes.png';

const ServicesSection = () => {
  const navigate = useNavigate();
  return (
    <div className="servicesSection">
      <h2 className="sectionTitle">Our Services</h2>
      <p className="description">Tailored Solutions for Your Success</p>
      <p className="description">
        Discover our innovative and highly effective solutions designed to meet your unique needs. Our expertise ensures top-notch results, empowering your business to thrive and excel in today's competitive landscape.
      </p>
      <div className="servicesContainer">
        <div className="serviceBox">
          <img src={webdesIcon} alt="Web Design Icon" className="icon" />
          <h3 className="serviceTitle">Web Design</h3>
          <p className="serviceDescription">Creating visually appealing and user-friendly websites.</p>
        </div>
        <div className="serviceBox">
          <img src={webdevIcon} alt="Web Development Icon" className="icon" />
          <h3 className="serviceTitle">Web Development</h3>
          <p className="serviceDescription">Developing high-performance web applications.</p>
        </div>
        <div className="serviceBox">
          <img src={uxuiIcon} alt="UX/UI Design Icon" className="icon" />
          <h3 className="serviceTitle">UX/UI Design</h3>
          <p className="serviceDescription">Enhancing user experiences with intuitive designs.</p>
        </div>
        <div className="serviceBox">
          <img src={productIcon} alt="Product Design Icon" className="icon" />
          <h3 className="serviceTitle">Product Design</h3>
          <p className="serviceDescription">Designing products that meet market needs.</p>
        </div>
        <div className="serviceBox">
          <img src={graphdesIcon} alt="Graphic Design Icon" className="icon" />
          <h3 className="serviceTitle">Graphic Design</h3>
          <p className="serviceDescription">Creating stunning visual content.</p>
        </div>
        <div className="serviceBox">
          <img src={branddesIcon} alt="Branding Design Icon" className="icon" />
          <h3 className="serviceTitle">Branding Design</h3>
          <p className="serviceDescription">Building strong brand identities.</p>
        </div>
        <CustomButton title="Explore →" onClick={() => navigate('/services')} />
      </div>
    </div>
  );
};

export default ServicesSection;
