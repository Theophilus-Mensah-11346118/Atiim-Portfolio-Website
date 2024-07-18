import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, ScrollView, StyleSheet, View,} from 'react-native';
import Header from '../Sections/Header';
import MainBanner from '../Sections/MainBanner';
import CompaniesSection from '../Sections/CompaniesSection';
import AboutSection from '../Sections/AboutSection';
import StatsSection from '../Sections/StatsSection';
import ServicesSection from '../Sections/ServicesSection';
import PortfolioSection from '../Sections/PortfolioSection';
import TestimonialsSection from '../Sections/TestimonialSection';
import ContactSection from '../Sections/ContactSection';
import Footer from '../Sections/Footer';

const { height } = Dimensions.get('window')

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}><MainBanner /></View>
        <View style={styles.section}><CompaniesSection /></View>
        <View style={styles.section}><AboutSection /></View>
        <View style={styles.section}><StatsSection /></View>
        <View style={styles.section}><ServicesSection /></View>
        <View style={styles.section}><PortfolioSection /></View>
        <View style={styles.section}><TestimonialsSection /></View>
        <View style={styles.section}><ContactSection /></View>     
      <StatusBar style="auto" />
      </ScrollView>
      <View style={styles.section}><Footer /></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    height: height,
  },
  scrollContainer: {
    flexGrow: 1
  },
  section: {
    marginBottom: 20,
  },
});

export default HomeScreen;
