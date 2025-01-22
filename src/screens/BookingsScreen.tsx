import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import DatePicker from '../components/Bookings/DatePicker';
import Header from '../components/Bookings/Header';
import SearchBar from '../components/Bookings/SearchBar';
import TimePicker from '../components/Bookings/TimePicker';
import Spacer from '../components/Spacer';

const BookingsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Header />

        <Spacer height={20} />

        <SearchBar />

        <Spacer height={20} />

        <DatePicker />

        <Spacer height={30} />

        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/album.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* <Spacer height={20} /> */}

        <TimePicker />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  imageContainer: {
    paddingHorizontal: 20,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 216,
  },
});

export default BookingsScreen;
