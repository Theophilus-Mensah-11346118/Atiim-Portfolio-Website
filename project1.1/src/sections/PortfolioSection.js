import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import '../styles.css';
import jobsearchHomePage from '../assets/Jobsearch-HomePage.png';
import jobsearchSearchResults from '../assets/Jobsearch-SearchResults.png';
import jobsearchDetailspage from '../assets/Jobsearch-DetailsPage.png';

const images = [
  {
    src: jobsearchHomePage,
    name: 'Job Search Home Page',
    description: 'An intuitive homepage for job search.',
    detaileddescription: 'The homepage of the job search platform features a clean, user-friendly design that allows users to quickly begin their job hunt. It includes search bars, featured jobs, and navigation links to various sections of the site.',
  },
  {
    src: jobsearchSearchResults,
    name: 'Job Search Results',
    description: 'Search results page for job listings.',
    detaileddescription: 'This page displays the search results based on the user’s job criteria. It provides a list of job postings with relevant details such as job title, company name, location, and a brief job description to help users find the right job quickly.',
  },
  {
    src: jobsearchDetailspage,
    name: 'Job Search Details Page',
    description: 'Detailed view of a job listing.',
    detaileddescription: 'The detailed view of a job listing gives users comprehensive information about the job. It includes the job description, requirements, company information, and an option to apply directly through the platform.',
  },
];


const PortfolioSection = () => {
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    gsap.fromTo('.card', { x: '100%' }, { x: 0, duration: 1, stagger: 0.2 });
  }, []);

  const handleMouseEnter = (index) => {
    gsap.to(`.card-${index}`, { scale: 1.1, zIndex: 1, duration: 0.3 });
  };

  const handleMouseLeave = (index) => {
    gsap.to(`.card-${index}`, { scale: 1, zIndex: 0, duration: 0.3 });
  };

  const handleClick = (image) => {
    setModalImage(image);
  };

  const handleClose = () => {
    setModalImage(null);
  };

  return (
    <div className={`main ${modalImage ? 'blur-background' : ''}`}>
      <h2 className="main_heading">My Work</h2>
      <p className='header-description'>
        Specialized SEO strategies for enhancing job search platforms, optimizing visibility and ranking in search engine results to attract more qualified candidates and employers.
      </p>
      <div className="cards">
        {images.map((image, index) => (
          <div
            key={index}
            className={`card card-${index}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => handleClick(image)}
          >
            <div className="image-container">
              <img src={image.src} alt={image.name} />
              <div className="overlay">
                <div className="text">
                  <h3>{image.name}</h3>
                  <p>{image.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {modalImage && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleClose}>
              &times;
            </button>
            <img src={modalImage.src} alt={modalImage.name} />
            <div className="modal-description">
              <h3>{modalImage.name}</h3>
              <p>{modalImage.detaileddescription}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioSection;
