import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

function DateTimeWidget({ name, date, label, handleChange }) {
  // const [selectedDate, setSelectedDate] = useState(date);

  // const handleDateChange = (date) => {
  //   console.log(date);
  //   setSelectedDate(date);
  // };



  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          name={name}
          renderInput={(props) => <TextField {...props} />}
          label={label}
          // value={selectedDate}
          value={date}
          // onChange={(newValue) => {
          //   handleDateChange(newValue);
          // }}
          onChange={({target}) => handleChange(target)}
        />
      </LocalizationProvider>
    </div>
  );
}

export default DateTimeWidget;
