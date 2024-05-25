import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import {Context} from '../Context/ContextProvide';
import { useNavigate } from 'react-router-dom';
import Error from "./Error"

export default function Type(){

const{type, Settype,alert,Setalert,SetalertValue} = useContext(Context);
const navigate = useNavigate();

useEffect(()=>{
  if(type.length ==0){
    Setalert("True");
    SetalertValue("An Error Occurred Try After Some Time")
  }else{
    Setalert(false);
    SetalertValue("")
    
  }
})
let handleChange =(event)=>{
  Settype(event.target.value)
}
let submit =()=>{
  Setalert(false);
  SetalertValue();
  navigate("/model")
}
return <Container maxWidth="sm">
<Box sx={{ mt: 4 }}>
  <Typography variant="h6" gutterBottom>
   Select Type 
  </Typography>
  <FormControl component="fieldset">

  {type.length != 0 ? <RadioGroup
      aria-label="type"
      name="type"
      defaultValue={type[0]}
      value={type}
      onChange={handleChange}
    >
        
    {type.map((value)=>{
        return <FormControlLabel value={value} control={<Radio />} label={value} />
    })}
      
    </RadioGroup> : <Error/>}
    
  </FormControl>
  <br/>
  <Button
    variant="outlined"
    color="secondary"
    sx={{ mt: 2 }}
    disabled={alert}
    onClick={submit}
  >
    Submit
  </Button>
</Box>
</Container>

}