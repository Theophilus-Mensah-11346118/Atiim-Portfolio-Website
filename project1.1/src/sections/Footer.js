import React from 'react';
import '../styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foo">
        <div className="footer-logo-section">
          <div className="foot">
            <img src={require('../assets/randicon.png')} alt="Logo" className="footer-logo" />
            <h4>Atiim Technology Suite</h4>
          </div>
          <p className="footer-description">
            Providing innovative solutions to help <br />
            your business thrive in the digital age
          </p>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/Facebook.png')} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/Twitter.png')} alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/Instagram.png')} alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/LinkedIn.png')} alt="LinkedIn" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/YouTube.png')} alt="YouTube" />
            </a>
          </div>
        </div>
        <div className="footer-links-section">
          <div className="footer-links-column">
            <h3>Product</h3>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Case studies</a></li>
              <li><a href="#">Reviews</a></li>
              <li><a href="#">Updates</a></li>
            </ul>
          </div>
          <div className="footer-links-column">
            <h3>Company</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/service">Services</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-links-column">
            <h3>Support</h3>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Help center</a></li>
              <li><a href="#">Server status</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Atiim Technology Suite. All rights reserved. <a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
