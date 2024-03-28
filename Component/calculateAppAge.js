const calculateAppAge = (signupDate) => {
    if (!signupDate) return null;
  
    const currentDate = new Date();
    const yearDiff = currentDate.getFullYear() - signupDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - signupDate.getMonth();
    const daysDiff = currentDate.getDate() - signupDate.getDate();
  
    let years = yearDiff;
    let months = monthsDiff;
  
    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
      years -= 1;
      months += 12;
    }
  
    return { years, months };
  };
  
  export default calculateAppAge;
  