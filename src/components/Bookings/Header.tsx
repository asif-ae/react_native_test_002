import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.greetingText}>Hello,</Text>
        <Text style={styles.timeText}>Good morning</Text>
      </View>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="message-text-outline" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  greetingText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '400',
  },
  timeText: {
    fontSize: 22,
    color: '#333',
    fontWeight: '700',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
