import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const CardDetails = ({ theme }) => (
  <View style={styles.cardContainer}>
    <Image source={require('../assets/Card.png')} style={styles.cardImage} resizeMode="cover" />
  </View>
);

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: 200, // Adjust height as needed
    marginVertical: 20,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
});

export default CardDetails;
