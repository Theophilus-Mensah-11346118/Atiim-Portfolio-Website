import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MainBanner = () => {
  return (
    <View style={styles.banner}>
      <Image source={require('../assets/banner.png')} style={styles.bannerImage} />
      <View style={styles.textContainer}>
        <Text style={styles.bannerTitle}>Crafting Innovative Software Solutions</Text>
        <Text style={styles.bannerText}>
          We transform businesses through our innovative software. Our seasoned software engineering team specializes in crafting cutting-edge digital solutions that drive tangible business growth.
        </Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    padding: 32,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    zIndex: 1, 
  },
  bannerText: {
    fontSize: 18,
    zIndex: 1, 
  },
  bannerImage: {
    width: '50%', 
    height: 'auto',
    resizeMode: 'contain',
    position: 'absolute',
  },
});

export default MainBanner;
