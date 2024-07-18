import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ServicesSection = () => {
  return (
    <View style={styles.servicesSection}>
      <Text style={styles.sectionTitle}>Our Services</Text>
      <Text style={styles.serviceItem}>Web design</Text>
      <Text style={styles.serviceItem}>Web development</Text>
      <Text style={styles.serviceItem}>UX/UI design</Text>
      <Text style={styles.serviceItem}>Product design</Text>
      <Text style={styles.serviceItem}>Graphic design</Text>
      <Text style={styles.serviceItem}>Branding design</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  servicesSection: {
    padding: 32,
    backgroundColor: '#f8f8f8',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  serviceItem: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default ServicesSection;
