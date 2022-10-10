import React, { useState,useEffect } from 'react'
import axios from '../axios';



function ImageAxios() {
 
    const [photo,setPhoto]=useState([])

    useEffect(()=>{
        axios.get('https://api.thedogapi.com/v1/breeds?api_key=live_ewA7cMGlKr0fuo7kWNEE5jmyq4ZRMFVYxakBjJ0ytJHGX1NFg2V7w9j8D7DZe6CU').then((response)=>{
          console.log(response.data);
          setPhoto(response.data[0].image)
        })
      },[])
  return (
    <div>
        <h1>{photo.id}</h1>
        


    </div>
  )
}

export default ImageAxios