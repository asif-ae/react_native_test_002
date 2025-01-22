import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActivitiesScreen from '../screens/ActivitiesScreen';
import BookingsScreen from '../screens/BookingsScreen';
import MenuScreen from '../screens/MenuScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

const Tab = createBottomTabNavigator();

const getTabBarIcon =
  (routeName: string) =>
  ({color, size}: {color: string; size: number}): JSX.Element => {
    let iconName: string;

    switch (routeName) {
      case 'Bookings':
        iconName = 'home-outline';
        break;
      case 'Activities':
        iconName = 'calendar-outline';
        break;
      case 'Notifications':
        iconName = 'notifications-outline';
        break;
      case 'Menu':
        iconName = 'grid-outline';
        break;
      default:
        iconName = 'alert-circle-outline';
    }

    return <Icon name={iconName} size={size} color={color} />;
  };

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: getTabBarIcon(route.name),
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: '#333',
          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle,
        })}>
        <Tab.Screen name="Bookings" component={BookingsScreen} />
        <Tab.Screen name="Activities" component={ActivitiesScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 10,
    paddingTop: 10,
    height: 70,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: '600',
  },
});

export default Navigation;
