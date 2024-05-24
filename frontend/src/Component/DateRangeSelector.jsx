import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';


function DateRangeSelector() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSubmit = () => {
    
    console.log('Selected start date:', startDate);
    console.log('Selected end date:', endDate);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Select Booking Date Range
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Typography variant="h10" gutterBottom>
        From
      </Typography> <br/>
      <DatePicker/>
      <br/>
      <Typography variant="h10" gutterBottom>
        To
      </Typography> <br/>
      <DatePicker/>
      <br/>
    </LocalizationProvider>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={!startDate || !endDate}
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default DateRangeSelector;
