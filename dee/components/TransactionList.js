import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const transactions = [
  {
    id: '1',
    image: require('../assets/apple.png'),
    title: 'Apple Store',
    category: 'Entertainment',
    amount: '-$5.99',
  },
  {
    id: '2',
    image: require('../assets/spotify.png'),
    title: 'Spotify',
    category: 'Music',
    amount: '-$12.99',
  },
  {
    id: '3',
    image: require('../assets/moneyTransfer.png'),
    title: 'Money Transfer',
    category: 'Transaction',
    amount: '$300',
  },
  {
    id: '4',
    image: require('../assets/grocery.png'),
    title: 'Grocery',
    category: '',
    amount: '-$88',
  },
];

const TransactionList = ({ theme }) => (
  <FlatList
    data={transactions}
    keyExtractor={item => item.id}
    renderItem={({ item }) => (
      <View style={styles.transactionContainer}>
        <View style={styles.transactionImageContainer}>
          <Image source={item.image} style={styles.transactionImage} resizeMode="contain" />
        </View>
        <View style={styles.transactionDetails}>
          <Text style={[styles.transactionTitle, { color: theme.text }]}>{item.title}</Text>
          {item.category ? <Text style={[styles.transactionCategory, { color: theme.text }]}>{item.category}</Text> : null}
        </View>
        <Text style={[styles.transactionAmount, { color: item.amount.startsWith('-') ? 'red' : 'green' }]}>{item.amount}</Text>
      </View>
    )}
  />
);

const styles = StyleSheet.create({
  transactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  transactionImageContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionImage: {
    width: '100%',
    height: '100%',
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10,
  },
  transactionTitle: {
    fontSize: 16,
  },
  transactionCategory: {
    fontSize: 12,
    color: 'gray',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TransactionList;
