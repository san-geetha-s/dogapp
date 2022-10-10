
import * as React from 'react';
import axios from '../axios'
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import ImageAxios from './ImageAxios';
import PicList from './PicList'
import {AppContext} from '../AppContext'

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



export default function MultipleSelect() {

  

  
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [urlId, setUrlId] =React.useState([])
  const [open, setOpen] = React.useState(false);
  const names = personName.map((obj)=> obj.name)
  
    //  const names =[]
    
 

//     //how to list the names obtained from api into an array using map function?

    
  
    

  useEffect(()=>{
        axios.get('https://api.thedogapi.com/v1/breeds?api_key=live_ewA7cMGlKr0fuo7kWNEE5jmyq4ZRMFVYxakBjJ0ytJHGX1NFg2V7w9j8D7DZe6CU').then((response)=>{
       console.log(response.data);
          setPersonName(response.data)
          setUrlId(response.data[0].image)
         
         
        })
      },[])
     

  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(
  //     // On autofill we get a stringified value.
  //     typeof value === 'string' ? value.split(',') : value,
  //   );
  // };

  const handleChange = (event) => {
    const {
          target: { value },
        } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value,);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        {/* <InputLabel id="demo-multiple-name-label">{personName.name}</InputLabel> */}
        <InputLabel id="demo-controlled-open-select-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
          
            // labelId="demo-controlled-open-select-label"
            // id="demo-controlled-open-select"
            // open={open}
            // onClose={handleClose}
            // onOpen={handleOpen}
            // value={personName}
            // label="Age"
            // onChange={handleChange}
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
      <SearchIcon style ={{alignItems: 'center'}}/>

      <AppContext.Provider value ={{data:urlId}}>

      <PicList data ={urlId} />

      </AppContext.Provider>

      
    </div>
  );
}





