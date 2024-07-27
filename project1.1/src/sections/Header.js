import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import useResponsiveJSX from './useResponsiveJSX';
import '../styles.css';
import logo from '../assets/Logo.png';

const Header = () => {
  const navigate = useNavigate();
  const { isMobile, isMenuVisible, handleMenuToggle } = useResponsiveJSX(600);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {  
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <img src={logo} alt="Logo" className="header-logo" />
        <h1 className="header-text">Atiim Technology Suite</h1>
      </div>
      {isMobile ? (
        <>
          <button className="menu-toggle" onClick={handleMenuToggle}>
            <FaBars size={32} />
          </button>
          {isMenuVisible && (
            <div className="modal-container">
              <button className="close-button" onClick={handleMenuToggle}>
                <FaTimes size={32} />
              </button>
              <nav className="navbar-mobile">
                <Link to="/" className="nav-link-mobile" onClick={handleMenuToggle}>Home</Link>
                <Link to="/about" className="nav-link-mobile" onClick={handleMenuToggle}>About Us</Link>
                <Link to="/services" className="nav-link-mobile" onClick={handleMenuToggle}>Services</Link>
                <Link to="/contact" className="nav-link-mobile" onClick={handleMenuToggle}>Contact</Link>
                <button className="custom-button-mobile" onClick={() => { navigate('/contact'); handleMenuToggle(); }}>Get Started →</button>
              </nav>
            </div>
          )}
        </>
      ) : (
        <div className="nav-text">
          <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
          <button className="custom-button" onClick={() => navigate('/contact')}>Contact Us →</button>
        </div>
      )}
    </header>
  );
};

export default Header;
