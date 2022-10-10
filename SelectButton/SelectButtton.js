
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import React, { useEffect, useState } from 'react'
import './selectButton.css'
import {Form} from 'react-bootstrap'
import axios from '../axios'
import { CircularProgress } from '@mui/material'

function SelectButtton() {
    const [state,setState]=useState([])
    const[selected,setSelected] =useState("")
    const [pictures,setPictures]=useState([])

    useEffect(()=>{
    var URL ='https://dog.ceo/api/breeds/list/all'
    axios.get(URL).then(res=>{
        for(var a in res.data.message){
            if(res.data.message[a].length !=0)
            for (var b of res.data.message[a])
            state.push(a + "/" + b)

            else
            state.push(a)
            setState(prev =>[ ...state]);
           
         }
    }).then((r)=>{
        setSelected(state[0])
        loadImages(state[0])
    })
    },[])

    function loadImages(category)  {
        var URL = `https://dog.ceo/api/breed/${category}/images`
        axios.get(URL).then(res=>{
            
           
                setPictures(prev =>[...res.data.message]);
                
             
             
        })


        

    }

 const StandardImageList=() => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
    
    <ImageList sx={{ width: 330, height: 550 }} cols={2} rowHeight={180}>
        
      {pictures.map((i) => (
        <ImageListItem >
          <img
            src={`${i}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${i}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            
            loading="lazy"
      
          />
      
        </ImageListItem>
      ))}

    </ImageList>
    </div>
    </div>
    </div>
  );

}




    






// function SelectButtton() {
//     const [state,setState]=useState([])
//     const[selected,setSelected] =useState("")
//     const [pictures,setPictures]=useState([])

//     useEffect(()=>{
//     var URL ='https://dog.ceo/api/breeds/list/all'
//     axios.get(URL).then(res=>{
//         for(var a in res.data.message){
//             if(res.data.message[a].length !=0)
//             for (var b of res.data.message[a])
//             state.push(a + "/" + b)

//             else
//             state.push(a)
//             setState(prev =>[...state]);
//             console.log(state)
//          }
//     }).then((r)=>{
//         setSelected(state[0])
//         loadImages(state[0])
//     })
//     },[])

//     function loadImages(category)  {
//         var URL = `https://dog.ceo/api/breed/${category}/images`
//         axios.get(URL).then(res=>{
            
           
//                 setPictures(prev =>[...res.data.message]);
                
             
             
//         })


        

//     }
  return (
    
    <div className='selectButton'>
       {selected}
        <Form>
            <Form.Group>
            <select class="form-control form-select" onChange={(e)=>{
                    setSelected(e.target.value)
                    setPictures([])
                    loadImages(selected)
                }}>
                    {
                        state.map(b=>{
                            return <option key={b} >{b}</option>
                        })
                    }
                </select>
            </Form.Group>
        </Form>
        <br />
        <StandardImageList/>
        
        {/* {pictures.length == 0?
        (<div className='center'><CircularProgress/></div>)
         :

        <div className='image-box'>
           {
            pictures.map(i=>{
               
               return(
                <img src={i}/>
               )
            })
           }

        </div>
        
} */}



        </div>
        
    
    
  )
}

export default SelectButtton
//how to make a div responsive in reactjs
//React cannot get data from fetch api first time?