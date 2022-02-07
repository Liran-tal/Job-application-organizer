import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

function DateTimeWidget({ date, label }) {
  const [selectedDate, setSelectedDate] = useState(date);

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label={label}
          value={selectedDate}
          onChange={(newValue) => {
            handleDateChange(newValue);
          }}
        />
      </LocalizationProvider>
    </div>
  );
}

export default DateTimeWidget;
