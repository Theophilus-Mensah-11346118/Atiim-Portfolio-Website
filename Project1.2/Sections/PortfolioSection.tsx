import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PortfolioSection = () => {
  return (
    <View style={styles.portfolioSection}>
      <Text style={styles.sectionTitle}>Our Portfolio</Text>
      {/* Add portfolio items here */}
    </View>
  );
};

const styles = StyleSheet.create({
  portfolioSection: {
    padding: 32,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default PortfolioSection;
