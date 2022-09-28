import React from 'react';
import DateTimePicker from 'react-datetime-picker';

const validDate = current => current.day() !== 0

function Calendar() => {
  <DateTimePicker
    dateFormat="YYYY-MM-DD"
    timeFormat={false}
    input={false}
    utc={false}
    onChange={event => props.setCalendarDate(event._d)}
    isValidDate={validDate}
  />
};

export default Calendar;