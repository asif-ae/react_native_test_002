import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';

const dates = ['10 MON', '11 TUE', '12 WED', '13 THU', '14 FRI', '15 SAT', '16 SUN'];

const DatePicker: React.FC = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      {dates.map((date, index) => (
        <TouchableOpacity key={index} style={styles.dateButton}>
          <Text style={styles.dateText}>{date}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginVertical: 10,
  },
  dateButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 5,
  },
  dateText: {
    fontSize: 14,
    color: '#333',
  },
});

export default DatePicker;
