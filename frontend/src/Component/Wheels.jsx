import React, { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { Context } from '../Context/ContextProvide';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Error from './Error';

function Wheel() {
  const { wheel, SetWheel,alert,Setalert,SetalertValue } = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    SetWheel(2)
    SetalertValue("")
  }, []);
  console.log(wheel)

  const handleChange = (event) => {
    SetWheel(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const result = await axios.get(`https://vehicle-cgfd.onrender.com/veh/vh/:${wheel}`)
      if (result) {
        console.log(result);
        Setalert(false)
        SetalertValue("")
        navigate("/type")
      }
    }
    catch (err) {
      console.log(err);
      Setalert(true)
      SetalertValue("An error Occured Please Try Again later")
    }

  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Choose Vehicle
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="wheelers"
            name="wheels"
            value={wheel}
            onChange={handleChange}
          >
            <FormControlLabel value={2} control={<Radio />} label="Two Wheelers" />
            <FormControlLabel value={4} control={<Radio />} label="Four Wheelers" />
          </RadioGroup>
        </FormControl>
        <br />
        <Button
          variant="outlined"
          color="secondary"
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        {alert ? <Error/>:<></>}
      </Box>
    </Container>
  );
}

export default Wheel;
