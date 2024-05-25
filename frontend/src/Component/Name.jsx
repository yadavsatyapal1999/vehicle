import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import ContextProvider from '../Context/ContextProvide';


function Name() {
  
const{firstname, Setfirstname, lastname, Setlastname} = useContext(ContextProvider)
 
const handleNameChange = (event) => {
   // setName(event.target.value);
  };

  const handleSubmit = () => {
    
   // console.log('Submitted name:', name);
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
        />
         <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          color="secondary"
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default Name;
