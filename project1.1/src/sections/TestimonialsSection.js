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
      <h2 className="sectionTitle">What Clients Are Saying</h2>
      <div className="navigationContainer">
        <button onClick={scrollToPrevious} className="arrowButton">
          &lt;
        </button>
        <div className="scrollView" ref={scrollViewRef}>
          <div className="testimonialItem">
            <h3 className="testimonialName">Joe Mensah</h3>
            <p className="testimonialCompany">Premier Solutions</p>
            <p className="testimonialText">
              Lorem ipsum dolor sit amet consectetur. Cursus phasellus maecenas vulputate quis ultricies purus eu sollicitudin eget. Odio velit ac risus nulla sit in turpis vitae. Diam tellus orci elementum viverra sit amet lectus consectetur quis.
            </p>
          </div>
          <div className="testimonialItem">
            <h3 className="testimonialName">Peter Kudjoe</h3>
            <p className="testimonialCompany">PenPlusBytes</p>
            <p className="testimonialText">
              Lorem ipsum dolor sit amet consectetur. Cursus phasellus maecenas vulputate quis ultricies purus eu sollicitudin eget. Odio velit ac risus nulla sit in turpis vitae. Diam tellus orci elementum viverra sit amet lectus consectetur quis.
            </p>
          </div>
          <div className="testimonialItem">
            <h3 className="testimonialName">James Wilson</h3>
            <p className="testimonialCompany">PAQ Technologies</p>
            <p className="testimonialText">
              Lorem ipsum dolor sit amet consectetur. Cursus phasellus maecenas vulputate quis ultricies purus eu sollicitudin eget. Odio velit ac risus nulla sit in turpis vitae. Diam tellus orci elementum viverra sit amet lectus consectetur quis.
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
