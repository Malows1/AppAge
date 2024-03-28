import React, {useState, useEffect} from 'react';
import AppUI from './Component/App_AgeUI';
import calculateAppAge from './Component/calculateAppAge';

const App = () => {
  const [signupDate, setSignupDate] = useState(null);
  const [appAge, setAppAge] = useState(null);
  const [currentDate, setCurrentDate] = useState(null);

  useEffect(() => {
    // example signup date
    const userSignupDate = new Date('2019-08-12');
    setSignupDate(userSignupDate);

    const today = new Date();
    setCurrentDate(today.toLocaleDateString()); // Format current date as a string
  }, []);

  useEffect(() => {
    const calculatedAppAge = calculateAppAge(signupDate);
    if (calculatedAppAge) {
      setAppAge(calculatedAppAge);
    }
  }, [signupDate]);

  return <AppUI appAge={appAge} currentDate={currentDate} />;
};

export default App;
