import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface TimeItem {
  time: string; // Time slot (e.g., "14:00")
}

const timeSlots: TimeItem[] = [
  { time: '12:00' },
  { time: '13:00' },
  { time: '14:00' },
  { time: '15:00' },
  { time: '16:00' },
  { time: '17:00' },
  { time: '18:00' },
  { time: '19:00' },
  { time: '20:00' },
  { time: '21:00' },
  { time: '22:00' },
  { time: '23:00' },
];

const TimePicker: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<string>('14:00');

  const handleTimePress = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={timeSlots}
        horizontal
        keyExtractor={(item) => item.time}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.timeContainer,
              selectedTime === item.time && styles.selectedTimeContainer,
            ]}
            onPress={() => handleTimePress(item.time)}
          >
            <Text
              style={[
                styles.timeText,
                selectedTime === item.time && styles.selectedTimeText,
              ]}
            >
              {item.time}
            </Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  flatListContainer: {
    paddingLeft: 15,
  },
  timeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  selectedTimeContainer: {
    borderColor: '#a9d100',
    backgroundColor: '#f0f9e6', // Light green background for selected time
  },
  timeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3a595e',
  },
  selectedTimeText: {
    color: '#a9d100', // Highlighted text color for selected time
    fontWeight: '700',
  },
});

export default TimePicker;
