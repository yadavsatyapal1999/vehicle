import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import { useContext } from 'react';
import {Context} from '../Context/ContextProvide';

export default function Model(){

  const{model, Setmodel} = useContext(Context);

    

return <Container maxWidth="sm">
<Box sx={{ mt: 4 }}>
  <Typography variant="h6" gutterBottom>
   Select Model 
  </Typography>
  <FormControl component="fieldset">

  {model.length != 0 ? <RadioGroup
      aria-label="model"
      name="model"
     
      /*value={selectedValue}
      onChange={handleChange}*/
    >
        
    {model.map((value)=>{
        return <FormControlLabel value={value} control={<Radio />} label={value} />
    })}
      
    </RadioGroup> : <Alert severity="error">An Error Occured Please Try Again!.</Alert> }
    
  </FormControl>
  <br/>
  <Button
    variant="outlined"
    color="secondary"
    sx={{ mt: 2 }}
    disabled={false}
  >
    Submit
  </Button>
</Box>
</Container>

}