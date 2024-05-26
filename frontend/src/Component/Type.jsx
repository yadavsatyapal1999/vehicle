import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import {Context} from '../Context/ContextProvide';
import { useNavigate } from 'react-router-dom';
import Error from "./Error";
import axios from "axios";


export default function Type(){

const{type,alert,Setalert,SetalertValue,selected,SetSelected,Setmodel,data, SetData } = useContext(Context);
const navigate = useNavigate();
console.log(type)
console.log(data)
useEffect(()=>{
  if(type.length ==0){
    Setalert("True");
    SetalertValue("An Error Occurred Try After Some Time")
  }else{
    Setalert(false);
    SetalertValue("")
    SetSelected(type[0])
  }
})
let handleChange =(event)=>{
  SetSelected(event.target.value)
  SetData(prev=>({
    ...prev,
    type:event.target.value
  }))
}
let submit =async ()=>{
  try {
    const result = await axios.get(`https://vehicle-cgfd.onrender.com/veh/vh1/${selected}`)
    if (result) {
      console.log(result.data.data);
      Setalert(false)
      SetalertValue("")
      navigate("/model")
      Setmodel(result.data.data);
    }
  }
  catch (err) {
    console.log(err);
    Setalert(true)
    SetalertValue("An error Occured Please Try Again later")
  }

}
return <Container maxWidth="sm">
<Box sx={{ mt: 4 }}>
  <Typography variant="h6" gutterBottom>
   Select Type 
  </Typography>
  <FormControl component="fieldset">

  {Array.isArray(type) && type.length !== 0  ? <RadioGroup
      aria-label="type"
      name="type"
      value={selected}
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