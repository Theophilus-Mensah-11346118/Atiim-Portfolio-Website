import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CompaniesSection = () => {
  return (
    <View style={styles.companiesSection}>
      <Text style={styles.sectionTitle}>Companies we worked with</Text>
      {/* Add logos or names of companies here */}
    </View>
  );
};

const styles = StyleSheet.create({
  companiesSection: {
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

export default CompaniesSection;
