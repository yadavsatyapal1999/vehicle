import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { Context } from '../Context/ContextProvide';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import Error from "./Error.jsx";


function Name() {

  const { firstname, Setfirstname, lastname, Setlastname,alert,Setalert,SetalertValue,data, SetData } = useContext(Context);
  

  const navigate = useNavigate();
  console.log(data)
  const handleFirstNameChange = (event) => {
    Setfirstname(event.target.value);
    SetData(prev=>({
      ...prev,
      firstname:event.target.value
    }))
  };
  const handleLastNameChange = (event) => {
    Setlastname(event.target.value);
    SetData(prev=>({
      ...prev,
      lastname:event.target.value
    }))
  };

  const handleSubmit = () => {
    if (firstname.trim() === "") {
      console.log("first name")
      Setalert(true);
      return SetalertValue("First Name Required")
    }
    else if (lastname.trim() === "") {
      console.log("first name")
      Setalert(true)
      return SetalertValue("Last name is required")
    }
    else {
      Setalert(false)
      SetalertValue("")
      navigate("/wheel")
    }

  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          margin='normal'
          color="secondary"
          onChange={handleFirstNameChange}
          value={firstname}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          color="secondary"
          onChange={handleLastNameChange}
          value={lastname}
        />
        <Button
          variant="contained"
          color="primary"
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

export default Name;
