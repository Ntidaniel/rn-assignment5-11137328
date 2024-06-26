import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import MyCardsScreen from '../screens/MyCardsScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = ({ theme, customTheme, toggleTheme, isDarkMode }) => {
  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = require('../assets/home.png');
            } else if (route.name === 'My Cards') {
              iconName = require('../assets/myCards.png');
            } else if (route.name === 'Statistics') {
              iconName = require('../assets/statictics.png');
            } else if (route.name === 'Settings') {
              iconName = require('../assets/settings.png');
            }

            return <Image source={iconName} style={{ width: 24, height: 24, tintColor: color }} />;
          },
          tabBarActiveTintColor: customTheme.primary,
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home">
          {props => <HomeScreen {...props} theme={customTheme} />}
        </Tab.Screen>
        <Tab.Screen name="My Cards">
          {props => <MyCardsScreen {...props} theme={customTheme} />}
        </Tab.Screen>
        <Tab.Screen name="Statistics">
          {props => <StatisticsScreen {...props} theme={customTheme} />}
        </Tab.Screen>
        <Tab.Screen name="Settings">
          {props => <SettingsScreen {...props} theme={customTheme} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
