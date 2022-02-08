import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

function DateTimeWidget({ name, date, label, handleChange, isEdit }) {

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          name={name}
          renderInput={(props) => <TextField {...props} />}
          label={label}
          value={date}
          onChange={(event) => handleChange({ name: name, value: event })}
          readOnly={!isEdit}
        />
      </LocalizationProvider>
    </div>
  );
}

export default DateTimeWidget;
