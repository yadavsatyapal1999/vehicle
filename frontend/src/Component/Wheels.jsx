import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Wheel() {
  /* const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    console.log('Selected value:', selectedValue);
  };
*/
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
            defaultValue={"2"}
            /*value={selectedValue}
            onChange={handleChange}*/
          >
            <FormControlLabel value="2" control={<Radio />} label="Two Wheelers" />
            <FormControlLabel value="4" control={<Radio />} label="Four Wheelers" />
          </RadioGroup>
        </FormControl>
        <br/>
        <Button
          variant="outlined"
          color="secondary"
          
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default Wheel;
