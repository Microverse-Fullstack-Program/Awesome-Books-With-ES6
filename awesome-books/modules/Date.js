import { DateTime } from './luxon.js';

// Date & Time Display Function
const dateContainer = document.getElementById('date');
const currentDate = DateTime.now();
const displayDateTime = () => {
  const dateString = currentDate.toLocaleString(DateTime.DATETIME_MED);
  dateContainer.textContent = dateString;
  setInterval(displayDateTime, 1000);
};

export default displayDateTime;
