import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const ContactSection = () => {
  return (
    <View style={styles.contactSection}>
      <Text style={styles.sectionTitle}>Contact</Text>
      <Text style={styles.contactText}>Ready to discuss your software requirements?</Text>
      <TextInput style={styles.input} placeholder="Full name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Country" />
      <TextInput style={styles.input} placeholder="Company" />
      <TextInput style={styles.input} placeholder="Message" multiline />
      <Button title="Send" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  contactSection: {
    padding: 32,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  contactText: {
    fontSize: 16,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
});

export default ContactSection;
