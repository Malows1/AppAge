// calculateAppAge.js
const calculateAppAge = signupDate => {
  // Check if signupDate is provided
  if (!signupDate) {
    return null;
  }

  // Get the current date
  const currentDate = new Date();
  // Calculate the time difference in milliseconds
  const timeDifference = currentDate.getTime() - signupDate.getTime();
  // Convert time difference to days
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

  // If registered for less than a week, return this
  if (daysDifference < 7) {
    return '少於一週';
  } 
  // If registered for less than 2 weeks, return this
  else if (daysDifference < 14) {
    return '2 週';
  } 
  // If registered for less than 1 month, return the number of weeks
  else if (daysDifference < 30) {
    return `${Math.floor(daysDifference / 7)} 週`;
  } 
  // If registered for less than 1 year, return the number of months
  else if (daysDifference < 365) {
    const months = Math.floor(daysDifference / 30);
    const remainingDays = daysDifference % 30;
    if (remainingDays === 0) {
      return `${months} 個月${months !== 1 ? '' : ''}`;
    } else {
      return `${months} 個月${
        months !== 1 ? '' : ''
      } `;
    }
  } 
  // If registered for 1 year or more, return the number of years and months
  else {
    const years = Math.floor(daysDifference / 365);
    const remainingDays = daysDifference % 365;
    if (remainingDays === 0) {
      return `${years} 年${years !== 1 ? '' : ''}`;
    } else {
      const months = Math.floor(remainingDays / 30);
      return `${years} 年${years !== 1 ? '' : ''} 和 ${months} 個月${
        months !== 1 ? '' : ''
      }`;
    }
  }
};

export default calculateAppAge;
