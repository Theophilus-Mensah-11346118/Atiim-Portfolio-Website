import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const TestimonialsSection = () => {
  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToPrevious = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: 0, animated: true });
    }
  };

  const scrollToNext = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  return (
    <View style={styles.testimonialsSection}>
      <Text style={styles.sectionTitle}>What Clients Are Saying</Text>
      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={scrollToPrevious} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{"<"}</Text>
        </TouchableOpacity>
        <ScrollView
          horizontal
          ref={scrollViewRef}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
        >
          <View style={styles.testimonialItem}>
            <Text style={styles.testimonialName}>Joe Mensah</Text>
            <Text style={styles.testimonialCompany}>Premier Solutions</Text>
            <Text style={styles.testimonialText}>
              Lorem ipsum dolor sit amet consectetur. Cursus phasellus maecenas vulputate quis ultricies purus eu sollicitudin eget. Odio velit ac risus nulla sit in turpis vitae. Diam tellus orci elementum viverra sit amet lectus consectetur quis.
            </Text>
          </View>
          <View style={styles.testimonialItem}>
            <Text style={styles.testimonialName}>Peter Kudjoe</Text>
            <Text style={styles.testimonialCompany}>PenPlusBytes</Text>
            <Text style={styles.testimonialText}>
              Lorem ipsum dolor sit amet consectetur. Cursus phasellus maecenas vulputate quis ultricies purus eu sollicitudin eget. Odio velit ac risus nulla sit in turpis vitae. Diam tellus orci elementum viverra sit amet lectus consectetur quis.
            </Text>
          </View>
          <View style={styles.testimonialItem}>
            <Text style={styles.testimonialName}>James Wilson</Text>
            <Text style={styles.testimonialCompany}>PAQ Technologies</Text>
            <Text style={styles.testimonialText}>
              Lorem ipsum dolor sit amet consectetur. Cursus phasellus maecenas vulputate quis ultricies purus eu sollicitudin eget. Odio velit ac risus nulla sit in turpis vitae. Diam tellus orci elementum viverra sit amet lectus consectetur quis.
            </Text>
          </View>
        </ScrollView>
        <TouchableOpacity onPress={scrollToNext} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  testimonialsSection: {
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  navigationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  arrowButton: {
    padding: 16,
  },
  arrowText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  testimonialItem: {
    width: 300,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  testimonialName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  testimonialCompany: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 8,
  },
  testimonialText: {
    fontSize: 16,
  },
});

export default TestimonialsSection;
