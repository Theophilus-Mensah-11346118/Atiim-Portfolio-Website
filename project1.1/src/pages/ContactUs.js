import React, { useState } from 'react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import bannerImage from '../assets/contactbg.png';
import address from '../assets/contact.png';
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
          <div className="bannerContent">
            <div className="textContainer">
              <form className="contactForm" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="inputField"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="inputField"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
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
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="inputField"
                />
                <textarea
                  name="message"
                  placeholder="Message"
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
                  I want to receive news updates once in a while
                </label>
                <p>We will respond soon.</p>
                <button type="submit">Contact Us</button>
                {successMessage && <p className="successMessage">{successMessage}</p>}
              </form>
              <div className="quoteContainer">
                <h4 className="quote">"The extensive knowledge and expertise at<br />Atiim Technology Suite enable us to deliver<br />exceptional results for our clients. Partnering<br />with Atiim Technology Suite means working<br />with the top 1% of the country's talent in<br />engineering and aptitude."</h4>
                <h2 className="quote-owner">Bismark Azumah Atiim <br />CEO, Atiim Technology Suite</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="addressSection">
        <img src={address} alt="company address" className="addressImage" />
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
