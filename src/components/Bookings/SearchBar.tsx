import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBar: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Search Icon */}
      <Icon name="search" size={20} color="#000" style={styles.searchIcon} />

      {/* Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Search center"
        placeholderTextColor="#3a595e" // Matches the placeholder text color
      />

      {/* Filter Icon */}
      <TouchableOpacity>
        <Icon name="tune" size={22} color="#a9d100" style={styles.filterIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light gray background for the search bar
    borderRadius: 25, // Rounded edges
    paddingHorizontal: 15,
    height: 50,
    marginHorizontal: 20, // Space on both sides
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#3a595e', // Matches the text color
  },
  filterIcon: {
    marginLeft: 10,
  },
});

export default SearchBar;
