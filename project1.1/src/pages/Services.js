import React, { useEffect } from 'react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import './Service.css';
import bannerImage from '../assets/workimg.png';
import Technologies from '../sections/Technologies';
import Container from '../assets/Container.png';

const Services = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const serviceElements = document.querySelectorAll('.service, .first-section, .section-header');
    serviceElements.forEach((el) => observer.observe(el));

    return () => {
      serviceElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className='App'>
      <Header />
      <section className='Appheader'>
        <div className="banner">
          <div className="bannerImage" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="textContainer">
              <h1 className="bannerTitle">Services</h1>
            </div>
          </div>
        </div>
        <p className='intro-text'>
          At Atiim Technology Suite, we offer a wide range of services designed to meet the diverse needs of our clients.
          <br />Our expertise spans various domains and technologies, enabling us to deliver tailored solutions that drive digital transformation and business success.
        </p>
        <div className='placement'></div>
        <div className='section'>
          <div className='first-section'>
            <div className='section-header'>
              <h1>Software Development</h1>
            </div>
            <p className='placement-text'>
              With over 6 years of accumulated tech expertise and industry-specific knowledge,
              <br />Atiim Technology Suite develops custom software solutions for large enterprises,
              <br />SMBs, and startups. Our comprehensive offerings include full-cycle software
              <br />development services tailored to meet the diverse business needs and specific
              <br />requirements of our customers.
            </p>
          </div>
          <div className='services'>
            <div className='service'>
              <h2>Custom application development</h2>
              <p>We develop custom software applications from the ground up, ensuring seamless integration with existing environments and systems.</p>
            </div>
            <div className='service'>
              <h2>Enterprise Integration</h2>
              <p>Leveraging our deep understanding of tech platforms and off-the-shelf software components, we seamlessly integrate our software with existing systems to enhance operational efficiency and data consistency.</p>
            </div>
            <div className='service'>
              <h2>Legacy application redesign</h2>
              <p>We revitalize outdated systems by refactoring their code, migrating legacy apps to newer platforms, and reviewing their architectures, giving them a new lease on life.</p>
            </div>
            <div className='service'>
              <h2>Full-Cycle Development</h2>
              <p>Comprehensive support throughout the entire software lifecycle, from initial design to ongoing maintenance.</p>
            </div>
          </div>
        </div>
        <div className='section'>
          <div className='first-section'>
            <div className='section-header'>
              <h1>IoT Solutions</h1>
            </div>
            <p className='placement-text'>We connect your devices and systems,
              <br />creating smart environments that improve
              <br />efficiency, productivity, and user experience
              <br />through advanced IoT solutions.</p>
          </div>
          <div className='services'>
            <div className='service'>
              <h2>IoT Platform Development</h2>
              <p>We develop custom software applications from the ground up, ensuring seamless integration with existing environments and systems.</p>
            </div>
            <div className='service'>
              <h2>Device Integration</h2>
              <p>Leveraging our deep understanding of tech platforms and off-the-shelf software components, we seamlessly integrate our software with existing systems to enhance operational efficiency and data consistency.</p>
            </div>
            <div className='service'>
              <h2>Real-Time Data Analytics</h2>
              <p>We revitalize outdated systems by refactoring their code, migrating legacy apps to newer platforms, and reviewing their architectures, giving them a new lease on life.</p>
            </div>
            <div className='service'>
              <h2>Remote Monitoring and Control</h2>
              <p>Comprehensive support throughout the entire software lifecycle, from initial design to ongoing maintenance.</p>
            </div>
          </div>
        </div>
        <div className='section'>
          <div className='first-section'>
            <div className='section-header'>
              <h1>IT Training</h1>
            </div>
            <p className='placement-text'>We provide comprehensive IT training programs
              <br />designed to equip your staff with
              <br />the skills needed to leverage technology effectively,
              <br />improve productivity, and stay
              <br />ahead in the fast-evolving tech landscape.</p>
          </div>
          <div className='services'>
            <div className='service'>
              <h2>Customized Training Programs</h2>
              <p>We develop custom software applications from the ground up, ensuring seamless integration with existing environments and systems.</p>
            </div>
            <div className='service'>
              <h2>Hands-On Workshops</h2>
              <p>Leveraging our deep understanding of tech platforms and off-the-shelf software components, we seamlessly integrate our software with existing systems to enhance operational efficiency and data consistency.</p>
            </div>
            <div className='service'>
              <h2>Technical Skill Development</h2>
              <p>We revitalize outdated systems by refactoring their code, migrating legacy apps to newer platforms, and reviewing their architectures, giving them a new lease on life.</p>
            </div>
            <div className='service'>
              <h2>Certification Preparation</h2>
              <p>Comprehensive support throughout the entire software lifecycle, from initial design to ongoing maintenance.</p>
            </div>
          </div>
        </div>
        <div className='section'>
          <div className='services'>
            <div className='service'>
              <h2>Ongoing Support and Resources</h2>
              <p>We develop custom software applications from the ground up, ensuring seamless integration with existing environments and systems.</p>
            </div>
            <div className='service'>
              <h2>Flexible Learning Options</h2>
              <p>Leveraging our deep understanding of tech platforms and off-the-shelf software components, we seamlessly integrate our software with existing systems to enhance operational efficiency and data consistency.</p>
            </div>
          </div>
        </div>
        <div className='section'>
          <div className='first-section'>
            <div className='section-header'>
              <h1>Technologies we work with</h1>
            </div>
            <p className='placement-text'>As a custom software development firm,
              <br />we leverage a wide range of programming languages,
              <br />frameworks, libraries, and tools. Our in-house R&D lab
              <br />enables us to explore and collaborate on emerging technologies.</p>
          </div>
          <Technologies />
        </div>
        <div className="banner">
          <div className="bannerImage" style={{ backgroundImage: `url(${Container})` }}>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
