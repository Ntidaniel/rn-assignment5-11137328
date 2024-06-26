import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const quickActions = [
  { image: require('../assets/send.png'), text: 'Sent' },
  { image: require('../assets/recieve.png'), text: 'Receive' },
  { image: require('../assets/loan.png'), text: 'Loan' },
  { image: require('../assets/topUp.png'), text: 'Topup' },
];

const QuickActions = ({ theme }) => (
  <View style={styles.container}>
    {quickActions.map((action, index) => (
      <View key={index} style={styles.actionContainer}>
        <Image source={action.image} style={styles.actionImage} resizeMode="contain" />
        <Text style={[styles.actionText, { color: theme.text }]}>{action.text}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  actionContainer: {
    alignItems: 'center',
  },
  actionImage: {
    width: 40,
    height: 40,
  },
  actionText: {
    marginTop: 5,
    fontSize: 14,
  },
});

export default QuickActions;
