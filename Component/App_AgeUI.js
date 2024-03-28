import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from '../Styles/Appage';

const AppUI = ({appAge, currentDate}) => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Joined</Text>
        {appAge && (
          <Text style={styles.ageText}>
            {appAge.years} year{appAge.years !== 1 ? 's' : ''} and{' '}
            {appAge.months} month{appAge.months !== 1 ? 's' : ''}
          </Text>
        )}
        <Text style={styles.datetoday}>(As of {currentDate} )</Text>
      </View>
    </SafeAreaView>
  );
};

export default AppUI;
