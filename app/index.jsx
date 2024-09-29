import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('Login'); // Navigates to the Login page
  };

  return (
    <View style={styles.container}>
      {/* Image Section */}
      {/*<Image
        source={require('./../../assets/images/museum.png')} // Replace with your image URL
        style={styles.image}
      />*/}
      
      {/* Text Section */}
      <Text style={styles.heading}>Let's Explore</Text>
      <Text style={styles.subHeading}>MuseoMingle</Text>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  subHeading: {
    fontSize: 24,
    color: '#000',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Index;
