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
import { Context } from '../Context/ContextProvide';
import { useNavigate } from 'react-router-dom';
import Error from './Error';

export default function Model() {

  const { model, Setmodel,alert,Setalert,SetalertValue } = useContext(Context);
  const navigate = useNavigate();
  useEffect(()=>{
    if(model.length ==0){
      Setalert("True");
      SetalertValue("An Error Occurred Try After Some Time")
    }else{
      Setalert(false);
      SetalertValue("")
      
    }
  })
  let handleChange =(event)=>{
   // Setmodel(event.target.value)
  }
  let submit =()=>{
    Setalert(false);
    SetalertValue()
    navigate("/date")
  }


  return <Container maxWidth="sm">
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Select Model
      </Typography>
      <FormControl component="fieldset">

        {model.length != 0 ? <RadioGroup
          aria-label="model"
          name="model"
          value={model.model}
          defaultValue={model[0].model}
          onChange={handleChange}
        >

          {model.map((value) => {
            return <FormControlLabel value={value.model} control={<Radio />} label={value.model} />
          })}

        </RadioGroup> : <Error/>}

      </FormControl>
      <br />
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