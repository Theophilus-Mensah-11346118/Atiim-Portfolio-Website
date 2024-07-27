import React, { useRef } from 'react';
import '../styles.css';

const TestimonialsSection = () => {
  const scrollViewRef = useRef(null);

  const scrollToPrevious = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ left: scrollViewRef.current.scrollWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="testimonialsSection">
      <h2 className="sectionTitle">What Our Clients Are Saying</h2>
      <div className="navigationContainer">
        <button onClick={scrollToPrevious} className="arrowButton">
          &lt;
        </button>
        <div className="scrollView" ref={scrollViewRef}>
          <div className="testimonialItem">
            <h3 className="testimonialName">Joe Mensah</h3>
            <p className="testimonialCompany">Premier Solutions</p>
            <p className="testimonialText">
              The team at Atiim Technology Suite delivered exactly what we needed. Their software solutions have transformed our business operations.
            </p>
          </div>
          <div className="testimonialItem">
            <h3 className="testimonialName">Peter Kudjoe</h3>
            <p className="testimonialCompany">PenPlusBytes</p>
            <p className="testimonialText">
              We couldn't be happier with the web application Atiim Technology Suite developed for us. It’s user-friendly and highly efficient.
            </p>
          </div>
          <div className="testimonialItem">
            <h3 className="testimonialName">James Wilson</h3>
            <p className="testimonialCompany">PAQ Technologies</p>
            <p className="testimonialText">
              Atiim Technology Suite's design team did an incredible job with our website. Our clients love the new look and feel.
            </p>
          </div>
          <div className="testimonialItem">
            <h3 className="testimonialName">Sarah Brown</h3>
            <p className="testimonialCompany">Global Corp</p>
            <p className="testimonialText">
              Working with Atiim Technology Suite was a pleasure. Their professionalism and expertise are unmatched.
            </p>
          </div>
          <div className="testimonialItem">
            <h3 className="testimonialName">Michael Lee</h3>
            <p className="testimonialCompany">Tech Innovators</p>
            <p className="testimonialText">
              The custom software solution provided by Atiim Technology Suite has significantly improved our productivity.
            </p>
          </div>
          <div className="testimonialItem">
            <h3 className="testimonialName">Linda Green</h3>
            <p className="testimonialCompany">Creative Agency</p>
            <p className="testimonialText">
              The team at Atiim Technology Suite is fantastic. Their attention to detail and creativity are evident in every project.
            </p>
          </div>
          <div className="testimonialItem">
            <h3 className="testimonialName">David Parker</h3>
            <p className="testimonialCompany">NextGen Solutions</p>
            <p className="testimonialText">
              Our collaboration with Atiim Technology Suite has been a game-changer. Their innovative solutions have given us a competitive edge.
            </p>
          </div>
          <div className="testimonialItem">
            <h3 className="testimonialName">Rachel Adams</h3>
            <p className="testimonialCompany">Startup Hub</p>
            <p className="testimonialText">
              Atiim Technology Suite's expertise in UX/UI design is top-notch. Our app’s user experience has drastically improved.
            </p>
          </div>
          <div className="testimonialItem">
            <h3 className="testimonialName">Kevin White</h3>
            <p className="testimonialCompany">Enterprise Inc.</p>
            <p className="testimonialText">
              The branding solutions provided by Atiim Technology Suite have strengthened our brand identity and market presence.
            </p>
          </div>
          <div className="testimonialItem">
            <h3 className="testimonialName">Emily Johnson</h3>
            <p className="testimonialCompany">Innovate Tech</p>
            <p className="testimonialText">
              We are extremely satisfied with the graphic design work done by Atiim Technology Suite. Their designs are modern and eye-catching.
            </p>
          </div>
          <div className="testimonialItem">
            <h3 className="testimonialName">John Doe</h3>
            <p className="testimonialCompany">Business Solutions</p>
            <p className="testimonialText">
              Atiim Technology Suite’s software development services exceeded our expectations. Their solutions are both robust and scalable.
            </p>
          </div>
          <div className="testimonialItem">
            <h3 className="testimonialName">Anna Smith</h3>
            <p className="testimonialCompany">Tech Startups</p>
            <p className="testimonialText">
              Our new product design was a hit, thanks to Atiim Technology Suite. They truly understand our vision and goals.
            </p>
          </div>
          <div className="testimonialItem">
            <h3 className="testimonialName">Chris Evans</h3>
            <p className="testimonialCompany">Digital Dynamics</p>
            <p className="testimonialText">
              The web development team at Atiim Technology Suite is exceptional. They built a site that perfectly aligns with our brand.
            </p>
          </div>
        </div>
        <button onClick={scrollToNext} className="arrowButton">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSection;
