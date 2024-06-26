import React from 'react';
import { View, Text, StyleSheet, Switch, Image } from 'react-native';

const Settings = ({ theme, toggleTheme, isDarkMode }) => (
  <View style={[styles.container, { backgroundColor: theme.background }]}>
    <View style={styles.settingItem}>
      <Image source={require('../assets/settings.png')} style={styles.icon} />
      <Text style={[styles.text, { color: theme.text }]}>Change Password</Text>
    </View>
    <View style={styles.settingItem}>
      <Image source={require('../assets/settings.png')} style={styles.icon} />
      <Text style={[styles.text, { color: theme.text }]}>Privacy Policy</Text>
    </View>
    <View style={styles.switchContainer}>
      <Image source={require('../assets/settings.png')} style={styles.icon} />
      <Text style={[styles.text, { color: theme.text }]}>Dark Mode</Text>
      <Switch value={isDarkMode} onValueChange={toggleTheme} />
    </View>
    <View style={styles.settingItem}>
      <Image source={require('../assets/settings.png')} style={styles.icon} />
      <Text style={[styles.text, { color: theme.text }]}>Language</Text>
    </View>
    <View style={styles.settingItem}>
      <Image source={require('../assets/settings.png')} style={styles.icon} />
      <Text style={[styles.text, { color: theme.text }]}>Contact Us</Text>
    </View>
    <View style={styles.settingItem}>
      <Image source={require('../assets/settings.png')} style={styles.icon} />
      <Text style={[styles.text, { color: theme.text }]}>My Profile</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Settings;
