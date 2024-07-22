import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';
import '../styles.css';
import dummyicon from '../assets/dummyicon.png';

const ServicesSection = () => {
  const navigate = useNavigate();
  return (
    <div className="servicesSection">
      <h2 className="sectionTitle">Our Services</h2>
      <p className="description">Highly effective solutions</p>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, mattis sit phasellus mollis sit aliquam sit nullam.
      </p>
      <div className="servicesContainer">
        <div className="serviceBox">
          <img src={dummyicon} alt="Web Design Icon" className="icon" />
          <h3 className="serviceTitle">Web Design</h3>
          <p className="serviceDescription">Creating visually appealing and user-friendly websites.</p>
        </div>
        <div className="serviceBox">
          <img src={dummyicon} alt="Web Development Icon" className="icon" />
          <h3 className="serviceTitle">Web Development</h3>
          <p className="serviceDescription">Developing high-performance web applications.</p>
        </div>
        <div className="serviceBox">
          <img src={dummyicon} alt="UX/UI Design Icon" className="icon" />
          <h3 className="serviceTitle">UX/UI Design</h3>
          <p className="serviceDescription">Enhancing user experiences with intuitive designs.</p>
        </div>
        <div className="serviceBox">
          <img src={dummyicon} alt="Product Design Icon" className="icon" />
          <h3 className="serviceTitle">Product Design</h3>
          <p className="serviceDescription">Designing products that meet market needs.</p>
        </div>
        <div className="serviceBox">
          <img src={dummyicon} alt="Graphic Design Icon" className="icon" />
          <h3 className="serviceTitle">Graphic Design</h3>
          <p className="serviceDescription">Creating stunning visual content.</p>
        </div>
        <div className="serviceBox">
          <img src={dummyicon} alt="Branding Design Icon" className="icon" />
          <h3 className="serviceTitle">Branding Design</h3>
          <p className="serviceDescription">Building strong brand identities.</p>
        </div>
        <CustomButton title="Explore →" onClick={() => navigate('/portfolio')} />
      </div>
    </div>
  );
};

export default ServicesSection;
