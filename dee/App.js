import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import MyCardsScreen from './screens/MyCardsScreen';
import StatisticsScreen from './screens/StatisticsScreen';

const Tab = createBottomTabNavigator();

const lightTheme = {
  background: '#FFFFFF',
  text: '#000000',
  primary: '#007BFF',
};

const darkTheme = {
  background: '#000000',
  text: '#FFFFFF',
  primary: '#007BFF',
};

const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = require('./assets/home.png');
            } else if (route.name === 'My Cards') {
              iconName = require('./assets/myCards.png');
            } else if (route.name === 'Statistics') {
              iconName = require('./assets/statictics.png');
            } else if (route.name === 'Settings') {
              iconName = require('./assets/settings.png');
            }

            return <Image source={iconName} style={{ width: 24, height: 24, tintColor: focused ? theme.primary : 'gray' }} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: theme.primary,
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home">
          {props => <HomeScreen {...props} theme={theme} />}
        </Tab.Screen>
        <Tab.Screen name="My Cards">
          {props => <MyCardsScreen {...props} theme={theme} />}
        </Tab.Screen>
        <Tab.Screen name="Statistics">
          {props => <StatisticsScreen {...props} theme={theme} />}
        </Tab.Screen>
        <Tab.Screen name="Settings">
          {props => (
            <SettingsScreen 
              {...props} 
              theme={theme} 
              toggleTheme={toggleTheme} 
              isDarkMode={theme === darkTheme} 
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
