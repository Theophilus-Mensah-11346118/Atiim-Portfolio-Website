import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const StatsSection = () => {
  return (
    <View style={styles.statsSection}>
      <Text style={styles.statItem}>6+ years of expertise</Text>
      <Text style={styles.statItem}>20+ IT professionals</Text>
      <Text style={styles.statItem}>100 success stories</Text>
      <Text style={styles.statItem}>15+ industries covered</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statsSection: {
    flexDirection:  screenWidth > 600 ? 'row' : 'column',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff',
  },
  statItem: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StatsSection;
