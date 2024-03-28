import React, {useState, useEffect, useReducer} from 'react';
import { SafeAreaView,Text, View } from 'react-native';
import styles from '../Styles/Appage';

const App =()=>{

    //Variable for signupDate and Appage  
        const [signupDate, setSigupDate]= useState (null);
        const[appAge , setappAge] = useState (null);
        const [currentDate, setCurrentDate] = useState(null);

   useEffect(()=>{
//example sigup date
const userSignupDate = new Date ('2019-08-12')
setSigupDate(userSignupDate);

const today = new Date();
    setCurrentDate(today.toLocaleDateString()); // Format current date as a string
   },[] )
   
   // calculate the app age base on the Sign up 
   useEffect(()=>{
if (signupDate){
    //getting current date
    const currentDate = new Date ();
    // Now calculating the year and months
    const yearDiff = currentDate.getFullYear () - signupDate.getFullYear();
    const monthsDiff = currentDate.getMonth () - signupDate.getMonth();
    const daysDiff = currentDate.getDate() - signupDate.getDate();

    let years = yearDiff;
    let months = monthsDiff;

    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)){
        years -= 1;
        months +=12; 

    }
    setappAge ({years , months});
}


   }, [signupDate])
    return(
<SafeAreaView style={styles.background}>
    <View style={styles.container}>
      <Text style={styles.title}>App Age Counter</Text>
      {appAge && (
        <Text style={styles.ageText}>
          {appAge.years} year{appAge.years !== 1 ? 's' : ''} and{' '}
          {appAge.months} month{appAge.months !== 1 ? 's' : ''}
        </Text>
       
      )}
       <Text style = {styles.datetoday}>
            (As of {currentDate} )
            </Text>
    </View>
  </SafeAreaView>

    );
};
export default App;
