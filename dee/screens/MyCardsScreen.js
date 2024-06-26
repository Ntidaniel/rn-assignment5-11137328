import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyCardsScreen = ({ theme }) => (
  <View style={[styles.container, { backgroundColor: theme.background }]}>
    <Text style={[styles.text, { color: theme.text }]}>My Cards</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default MyCardsScreen;
