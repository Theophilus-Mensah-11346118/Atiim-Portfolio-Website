import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../Sections/Header';
import ContactSection from '../Sections/ContactSection';
import Footer from '../Sections/Footer';
import TestimonialsSection from '../Sections/TestimonialSection';
import MainBanner from '../Sections/MainBanner';
import CompaniesSection from '../Sections/CompaniesSection';

const Services = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <MainBanner />
        <CompaniesSection />
        <TestimonialsSection />
        <ContactSection />       
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

});

export default Services;
