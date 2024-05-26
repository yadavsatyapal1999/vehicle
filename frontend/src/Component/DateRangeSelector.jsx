import React, { useState, useContext } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, TextField } from '@mui/material';
import { Context } from '../Context/ContextProvide';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DateRangeSelector() {
  const { startDate, SetStartDate, endDate, SetendDate, data, SetData } = useContext(Context);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const validate = () => {
    const newErrors = {};

    if (!data.firstname) {
      newErrors.firstname = "First name is required";
    }
    if (!data.lastname) {
      newErrors.lastname = "Last name is required";
    }
    if (!data.wheel) {
      newErrors.wheel = "Wheel is required";
    }
    if (!data.model) {
      newErrors.model = "Model is required";
    }
    if (!data.from) {
      newErrors.from = "From date is required";
    } else if (!isValidDate(data.from)) {
      newErrors.from = "From date is invalid";
    }
    if (!data.to) {
      newErrors.to = "To date is required";
    } else if (!isValidDate(data.to)) {
      newErrors.to = "To date is invalid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidDate = (dateString) => {
    const regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regEx)) return false;  // Invalid format
    const d = new Date(dateString);
    const dNum = d.getTime();
    if (!dNum && dNum !== 0) return false; // NaN value, Invalid date
    return d.toISOString().slice(0, 10) === dateString;
  };

  const handleStartDateChange = (date) => {
    SetStartDate(date);
    SetData(prev => ({
      ...prev,
      from: date ? date.format('YYYY-MM-DD') : ''
    }));
  };

  const handleEndDateChange = (date) => {
    SetendDate(date);
    SetData(prev => ({
      ...prev,
      to: date ? date.format('YYYY-MM-DD') : ''
    }));
  };

  const handleSubmit = async () => {
    if (validate()) {
      console.log(data);
      console.log('Selected start date:', startDate);
      console.log('Selected end date:', endDate);
      try{
        const result = axios.post(`https://vehicle-cgfd.onrender.com/book/new_book`,data)
        if(result){
          window.alert("Data Saved Sucessfully")
          navigate("/");
         
        }
      }
      catch(err){
        window.alert("An error Occurred")
      }

    } else {
      window.alert("There are errors in the form");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Select Booking Date Range
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Typography variant="subtitle1" gutterBottom>
            From
          </Typography>
          <DatePicker
            value={startDate}
            onChange={handleStartDateChange}
            renderInput={(params) => <TextField {...params} fullWidth error={!!errors.from} helperText={errors.from} />}
          />
          <br /><br />
          <Typography variant="subtitle1" gutterBottom>
            To
          </Typography>
          <DatePicker
            value={endDate}
            onChange={handleEndDateChange}
            renderInput={(params) => <TextField {...params} fullWidth error={!!errors.to} helperText={errors.to} />}
          />
          <br />
        </LocalizationProvider>
        {Object.values(errors).map((error, index) => (
          <Typography key={index} color="error">{error}</Typography>
        ))}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default DateRangeSelector;
