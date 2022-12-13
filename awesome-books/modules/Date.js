import { DateTime } from './luxon.js';

// Date & Time Display Function
const dateContainer = document.getElementById('date');
const currentDate = DateTime.now();
export const displayDateTime = () => {
    const options = {
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric', 
                      hour: 'numeric',
                      minute: 'numeric',
                      second: 'numeric'
                    };
    const dateString = currentDate.toLocaleString(DateTime.DATETIME_MED)
    dateContainer.textContent = dateString;
    setInterval(displayDateTime, 1000);
  };
