import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import GamePage from '../screens/GamePage';
import NewsPage from '../screens/NewsPage';
import RegisterPage from '../screens/RegisterPage';
import ChatPage from '../screens/ChatScreen'; // Import the Chat screen

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

/**
 * Helper function to return the appropriate icon component based on the route name.
 */
const getTabBarIcon = (routeName: string, color: string, size: number) => {
  switch (routeName) {
    case 'Register':
      return (
        <MaterialCommunityIcons name="tennis-ball" size={size} color={color} />
      );
    case 'Game Board':
      return (
        <MaterialCommunityIcons
          name="calendar-check"
          size={size}
          color={color}
        />
      );
    case 'Rank':
      return (
        <MaterialCommunityIcons name="chart-bar" size={size} color={color} />
      );
    case 'News':
      return (
        <MaterialCommunityIcons name="newspaper" size={size} color={color} />
      );
    default:
      return null;
  }
};

// Bottom Tab Navigator
const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) =>
          getTabBarIcon(route.name, color, size),
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#1c1c1c', // Dark background color
          borderTopWidth: 0, // No border
          height: 60, // Height of the tab bar
        },
        tabBarLabelStyle: {
          fontSize: 12, // Font size for labels
          fontWeight: 'bold',
        },
        headerShown: false, // Hides the header for each tab
      })}
    >
      <Tab.Screen name="Register" component={RegisterPage} />
      <Tab.Screen name="Game Board" component={GamePage} />
      <Tab.Screen name="Rank" component={GamePage} />
      <Tab.Screen name="News" component={NewsPage} />
    </Tab.Navigator>
  );
};

// Stack Navigator
const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Main Tab Navigator */}
        <Stack.Screen name="Tabs" component={TabNavigator} />

        {/* Additional route outside the tab bar */}
        <Stack.Screen name="Chat" component={ChatPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
