import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Favorit = () => {
 const[favoirmahsol,setfavoirmahsol]=useState()
 useEffect(
     ()=>{
         axios.get("http://localhost:8003/mahsol")
         .then(resps=>setfavoirmahsol(resps.data))
     }
 )
  return (
    <>
        {favoirmahsol &&
          favoirmahsol.map(
              (f)=> <div className='mahsolateman'>
              <img className='img-mahsolateman' src={f.image} alt="" />
              <h5>نام برند : {f.title}</h5>
              <h4>قیمت : {f.author}</h4>
            </div>
          )  
        }
    </>
  )
}

export default Favorit