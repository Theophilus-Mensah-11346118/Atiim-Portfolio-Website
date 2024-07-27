import React, { useState } from 'react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import bannerImage from '../assets/contactbg.png';
import './Contact.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    country: 'Ghana',
    company: '',
    message: '',
    attachment: null,
    receiveUpdates: false,
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      attachment: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('Thank you for contacting us! We will respond soon.');
  };

  return (
    <div>
      <Header />
      <div className="banner">
        <div className="bannerImage" style={{ backgroundImage: `url(${bannerImage})` }}>
          <div className="formContainer">
            <div className="contactFormWrapper">
              <h2>Get in touch</h2>
              <form className="contactForm" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name *"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="inputField"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="inputField"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone number *"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="inputField"
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="inputField"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company *"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="inputField"
                />
                <textarea
                  name="message"
                  placeholder="Message *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="inputField"
                ></textarea>
                <input
                  type="file"
                  name="attachment"
                  accept="image/*,application/pdf"
                  onChange={handleFileChange}
                />
                <label>
                  <input
                    type="checkbox"
                    name="receiveUpdates"
                    checked={formData.receiveUpdates}
                    onChange={handleChange}
                  />
                  I want to receive news and updates once in a while
                </label>
                <button type="submit" className="submitButton">Contact us</button>
                {successMessage && <p className="successMessage">{successMessage}</p>}
              </form>
            </div>
            <div className="quoteContainer">
              <blockquote>
                <p>"The extensive knowledge and expertise at Atiim Technology Suite enable us to deliver exceptional results for our clients. Partnering with Atiim Technology Suite means working with the top 1% of the country's talent in engineering and aptitude."</p>
              </blockquote>
              <cite>
                <strong>Bismark Azumah Atiim</strong><br />
                CEO, Atiim Technology Suite
              </cite>
            </div>
          </div>
        </div>
      </div>
      <section className="addressSection">
        <h3>Our Offices</h3>
        <div className="addressWrapper">
          <div className="addressBox">
            <h4>Head Office - Ghana</h4>
            <p>+233 246116669</p>
            <p>1234 Accra Road, Accra, Ghana</p>
          </div>
          <div className="addressBox">
            <h4>Office - Germany</h4>
            <p>+49 15258120294</p>
            <p>5678 Berlin Street, Berlin, Germany</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
