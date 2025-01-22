import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface DateItem {
  day: string;
  date: string;
}

const dates: DateItem[] = [
  {day: 'MON', date: '10'},
  {day: 'TUE', date: '11'},
  {day: 'WED', date: '12'},
  {day: 'THU', date: '13'},
  {day: 'FRI', date: '14'},
  {day: 'SAT', date: '15'},
  {day: 'SUN', date: '16'},
  {day: 'MON', date: '17'},
  {day: 'TUE', date: '18'},
  {day: 'WED', date: '19'},
  {day: 'THU', date: '20'},
  {day: 'FRI', date: '21'},
  {day: 'SAT', date: '22'},
  {day: 'SUN', date: '23'},
  {day: 'MON', date: '24'},
  {day: 'TUE', date: '25'},
  {day: 'WED', date: '26'},
  {day: 'THU', date: '27'},
  {day: 'FRI', date: '28'},
  {day: 'SAT', date: '29'},
  {day: 'SUN', date: '30'},
];

const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('10');

  const handleDatePress = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dates}
        horizontal
        keyExtractor={item => item.date}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.dateContainer,
              selectedDate === item.date && styles.selectedDateContainer,
            ]}
            onPress={() => handleDatePress(item.date)}>
            <Text
              style={[
                styles.dateText,
                selectedDate === item.date && styles.selectedDateText,
              ]}>
              {item.date}
            </Text>
            <Text
              style={[
                styles.dayText,
                selectedDate === item.date && styles.selectedDayText,
              ]}>
              {item.day}
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
  dateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'transparent',
    width: 60,
    height: 60,
  },
  selectedDateContainer: {
    borderColor: '#a9d100',
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  selectedDateText: {
    color: '#a9d100',
  },
  dayText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#666',
    marginTop: 2,
  },
  selectedDayText: {
    color: '#a9d100',
  },
});

export default DatePicker;
