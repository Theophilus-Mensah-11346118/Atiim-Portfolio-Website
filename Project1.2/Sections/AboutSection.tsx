import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutSection = () => {
  return (
    <View style={styles.aboutSection}>
      <Text style={styles.sectionTitle}>Who are we?</Text>
      <Text style={styles.aboutText}>
        The Software Development Company That Empowers Businesses
        At Atiim Technology Suite, we are a dynamic team of passionate software developers dedicated to transforming innovative ideas into high-quality software solutions. Our expertise spans a wide range of technologies and industries, allowing us to tackle complex challenges and deliver exceptional results.
      </Text>
      <Text style={styles.aboutText}>
        Our holistic approach encompasses consulting, engineering, and IT training services. As a premier software solutions provider, we specialize in delivering customized AI, IoT, mobile, and other advanced solutions. We manage projects of any scale and complexity, ranging from straightforward mobile apps to sophisticated cloud-based enterprise products. Strengthen your business with our expertise, extensive resources, cutting-edge technology, and unwavering passion for creating innovative software solutions that truly make a difference.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutSection: {
    padding: 32,
    backgroundColor: '#f8f8f8',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  aboutText: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default AboutSection;
