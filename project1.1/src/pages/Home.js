import React from 'react';
import Header from '../sections/Header';
import MainBanner from '../sections/MainBanner';
import PortfolioSection from '../sections/PortfolioSection';
import ServicesSection from '../sections/ServicesSection';
import StatsSection from '../sections/StatsSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import Footer from '../sections/Footer';

const Home = () => {
  return (
    <div>
        <Header />
        <div>
        <MainBanner />
        <PortfolioSection />
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <Footer />
        </div> 
    </div>

  );
};

export default Home;
