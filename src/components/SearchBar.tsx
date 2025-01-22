import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <Icon name="search-outline" size={20} color="#333" />
      <TextInput style={styles.input} placeholder="Search center" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
  input: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
});

export default SearchBar;
