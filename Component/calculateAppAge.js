//calculate the app age based on the provided signup date
const calculateAppAge = (signupDate) => {
    //if signupdate not provide return null
    if (!signupDate) return null;

  // Get the current date
    const currentDate = new Date();
// difference in years, months, and days between the current date and the signup date
    const yearDiff = currentDate.getFullYear() - signupDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - signupDate.getMonth();
    const daysDiff = currentDate.getDate() - signupDate.getDate();
  
    let years = yearDiff;
    let months = monthsDiff;
  
    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
      years -= 1;
      months += 12;
    }
  // Return an object containing the calculated years and months
    return { years, months };
  };
  
  export default calculateAppAge;
  