import React from 'react';
import { View, Text, StyleSheet, Switch, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

const settingsItems = [
  { title: 'Language' },
  { title: 'My Profile' },
  { title: 'Contact Us' },
  { title: 'Change Password' },
  { title: 'Privacy Policy' },
];

const SettingsScreen = ({ theme, toggleTheme, isDarkMode }) => (
  <View style={[styles.container, { backgroundColor: theme.background }]}>
    <Text style={[styles.header, { color: theme.text }]}>Settings</Text>
    <FlatList
      data={settingsItems}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <ListItem
          containerStyle={[styles.listItem, { backgroundColor: theme.background }]}
          bottomDivider
        >
          <ListItem.Content>
            <ListItem.Title style={{ color: theme.text }}>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron color={theme.text} />
        </ListItem>
      )}
    />
    <View style={styles.themeSwitchContainer}>
      <Text style={[styles.themeText, { color: theme.text }]}>Theme</Text>
      <Switch
        value={isDarkMode}
        onValueChange={toggleTheme}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listItem: {
    paddingVertical: 8, // Adjusted padding to reduce space after list items
  },
  themeSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5, // Reduced margin to move closer to the list items
    paddingHorizontal: 10, // Added padding for consistent spacing
  },
  themeText: {
    fontSize: 18,
  },
});

export default SettingsScreen;
