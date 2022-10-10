import * as React  from 'react';
import {useState,useEffect} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from '../axios'
import { useTheme } from '@mui/material/styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function ControlledOpenSelect() {
    const theme = useTheme();
  const [personName, setPersonName] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const names = personName.map((obj)=> obj.name)

  useEffect(()=>{
    axios.get('https://api.thedogapi.com/v1/breeds?api_key=live_ewA7cMGlKr0fuo7kWNEE5jmyq4ZRMFVYxakBjJ0ytJHGX1NFg2V7w9j8D7DZe6CU').then((response)=>{
   console.log(response.data);
      setPersonName(response.data)
      
     
     
    })
  },[])
  

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
        Open the select
      </Button>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={personName}
          label="Age"
          onChange={handleChange}
        >
          
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
