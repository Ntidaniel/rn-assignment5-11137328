import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import TransactionList from '../components/TransactionList';
import CardDetails from '../components/CardDetails';
import QuickActions from '../components/QuickActions';

const HomeScreen = ({ theme }) => (
  <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
    <View style={styles.header}>
      <Image source={require('../assets/profile.png')} style={styles.profileImage} />
      <View style={styles.headerTextContainer}>
        <Text style={[styles.welcomeText, { color: theme.text }]}>Welcome back,</Text>
        <Text style={[styles.nameText, { color: theme.text }]}>Daniel Nti</Text>
      </View>
      <Image source={require('../assets/search.png')} style={styles.searchIcon} />
    </View>
    <CardDetails theme={theme} />
    <QuickActions theme={theme} />
    <View style={styles.transactionHeader}>
      <Text style={[styles.transactionText, { color: theme.text }]}>Transaction</Text>
      <Text style={[styles.seeAllText, { color: theme.primary }]}>See All</Text>
    </View>
    <TransactionList theme={theme} />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  welcomeText: {
    fontSize: 16,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  transactionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 16,
  },
});

export default HomeScreen;
