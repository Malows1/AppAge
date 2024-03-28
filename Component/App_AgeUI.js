// AppAgeUI.js
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from '../Styles/Appage';

const AppUI = ({appAge, currentDate}) => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <View style={styles.box} />
        {appAge && <Text style={styles.ageText}>{appAge}</Text>}
        <Text style={styles.dateText}>{currentDate}</Text>
      </View>
    </SafeAreaView>
  );
};

export default AppUI;
