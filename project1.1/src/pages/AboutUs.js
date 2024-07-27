import React from 'react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import './AboutUs.css';
import bannerImage from '../assets/aboutbanner.png';
import teamMemberImage from '../assets/dummyimg1.png';

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="banner">
        <div className="bannerImage" style={{ backgroundImage: `url(${bannerImage})` }}>
          <div className="textContainer">
            <h1 className="bannerTitle">About Us</h1>
          </div>
        </div>
      </div>
      <section className="about-section">
        <div className='text-container'>
          <div className='who'>
            <h2>Who We Are?</h2>
            <p>Welcome to Atiim Technology Suite, where innovation meets expertise. We are a dynamic team of passionate software developers dedicated to transforming your ideas into robust, high-quality software solutions. Our expertise spans a wide range of technologies and industries, allowing us to tackle complex challenges and deliver exceptional results.</p>
          </div>
          <div className='our'>
            <h2>Our Mission</h2>
            <p>Our mission is to empower businesses and individuals by providing cutting-edge software development services that drive growth, efficiency, and success. We are committed to excellence, innovation, and customer satisfaction, ensuring that every project we undertake meets the highest standards.</p>
          </div>
          <div className='ceo'>
            <p>" We assist businesses in uncovering and meeting the demand for digital transformation by offering engineering and consulting services that enhance competitiveness and drive innovation."</p>
            <h4>Bismark Azumah Atiim </h4>
            <p>CEO, Atiim Technology Suite</p>
          </div>
        </div>
        <div className='meet'>
          <h2>Meet The Teams</h2>
          <p>Our team is our greatest asset. Comprising talented developers, designers, project managers, and tech enthusiasts, we collaborate closely to bring your vision to life. With diverse backgrounds and a shared passion for technology, we continuously push the boundaries of what's possible.</p>
        </div>
        <div className='teamMembers-container'>
          <div className="team-member">
            <img src={teamMemberImage} alt={`Team Member`} />
            <div className='tag'>
              <h5>Bismark Azumah Atiim</h5>
              <h4>CEO</h4>
            </div>
            <p className='message'>Leading Atiim Technology Suite with a vision of innovation and excellence.</p>
          </div>
          <div className="team-member">
            <img src={teamMemberImage} alt={`Team Member`} />
            <div className='tag'>
              <h5>John Doe</h5>
              <h4>Software Engineer</h4>
            </div>
            <p className='message'>Passionate about creating efficient algorithms and robust code. Always eager to learn new technologies.</p>
          </div>
          
          <div className="team-member">
            <img src={teamMemberImage} alt={`Team Member`} />
            <div className='tag'>
              <h5>Jane Smith</h5>
              <h4>Product Manager</h4>
            </div>
            <p className='message'>Focused on delivering user-centric products that solve real-world problems. Believes in the power of collaboration.</p>
          </div>
          
          <div className="team-member">
            <img src={teamMemberImage} alt={`Team Member`} />
            <div className='tag'>
              <h5>Emily Johnson</h5>
              <h4>UX Designer</h4>
            </div>
            <p className='message'>Dedicated to crafting intuitive and delightful user experiences. A keen eye for detail and design aesthetics.</p>
          </div>
          
          <div className="team-member">
            <img src={teamMemberImage} alt={`Team Member`} />
            <div className='tag'>
              <h5>Michael Brown</h5>
              <h4>DevOps Engineer</h4>
            </div>
            <p className='message'>Expert in building scalable infrastructure and automating deployment pipelines. Passionate about continuous integration and delivery.</p>
          </div>
          
          <div className="team-member">
            <img src={teamMemberImage} alt={`Team Member`} />
            <div className='tag'>
              <h5>Sarah Davis</h5>
              <h4>Data Scientist</h4>
            </div>
            <p className='message'>Enthusiastic about uncovering insights from data. Skilled in machine learning and data visualization.</p>
          </div>
        </div>
        <div className='flowchart'>
          <h2>Our Personalized Workflow</h2>
          <div className='step'>
            <h3>01 Concept</h3>
            <p>We start by brainstorming and conceptualizing the project ideas. Our team collaborates to bring innovative solutions to the table.</p>
          </div>
          <div className='step'>
            <h3>02 Budget</h3>
            <p>We then evaluate the project's budget, ensuring that all resources are allocated efficiently. Transparency and accuracy are key in this phase.</p>
          </div>
          <div className='step'>
            <h3>03 Development</h3>
            <p>Our developers get to work, creating robust and scalable solutions. We follow an agile methodology to ensure continuous improvement and timely delivery.</p>
          </div>
          <div className='step'>
            <h3>04 Result</h3>
            <p>The final product is delivered, meeting all the requirements and exceeding expectations. We focus on quality and user satisfaction.</p>
          </div>
        </div>
        <h2>Our Core Values</h2>
        <ul className="core-values">
          <li>Innovation: <span>We continuously strive to bring fresh ideas and advanced technology solutions to the table, ensuring our clients stay ahead of the curve.</span></li>
          <li>Excellence: <span>Quality is at the heart of everything we do. We are committed to delivering top-notch solutions that exceed our clients' expectations.</span></li>
          <li>Integrity: <span>We conduct our business with the highest ethical standards, fostering trust and long-term relationships with our clients and partners.</span></li>
          <li>Collaboration: <span>Teamwork and collaboration are essential to our success. We work closely with our clients to understand their needs and deliver tailored solutions.</span></li>
        </ul>
        <h2>What We Never Do</h2>
        <ul className="never-do">
          <li>Abandon commitments</li>
          <li>Place theory over practice</li>
          <li>Take shortcuts at the expense of performance & efficiency</li>
          <li>Hide bad news</li>
        </ul>
        <h2>Our Differentiators</h2>
        <div className="differentiators">
          <div className="differentiator">
            <h3>Scale</h3>
            <p>We have a vast pool of experts with diverse technological and domain expertise, available at various qualification levels. Our team includes on-demand resources, providing full-cycle implementation services and taking on projects at any stage.</p>
          </div>
          <div className="differentiator">
            <h3>Expertise</h3>
            <p>With over 6 years in the market, Atiim Technology Suite has successfully completed more than 30 projects, acquiring extensive technical and industry-specific knowledge. We have also partnered with industry leaders such as IBM, Amazon, Salesforce, NASA, and others.</p>
          </div>
          <div className="differentiator">
            <h3>Transparency</h3>
            <p>We ensure transparent collaboration through our certified project managers assigned to every project, along with regular reporting, demos, and client access to the test environment and project tracking tools.</p>
          </div>
          <div className="differentiator">
            <h3>Flexibility</h3>
            <p>We tailor engagement scenarios and partnership schemes to meet our customers' specific requirements. Instead of using a blended rate, we offer an optimal project staffing model. This includes engaging system architects for on-demand high-level consultations and providing a balanced mix of middle and senior engineers proportionate to the task complexity.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
