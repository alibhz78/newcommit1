import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Favorit = () => {

  const delfavoritbtn =(id)=>{
    axios.delete(`http://localhost:8008/mahsol/${id}`)
   /*const a= setfavoirmahsol(
      favoirmahsol.filter(
      (f)=>f[0].id!=id
    ))
    axios.delete(`http://localhost:8008/mahsol/${id}`)  
    axios.get(`http://localhost:8008/mahsol/`)*/
    
  }
 const[favoirmahsol,setfavoirmahsol]=useState()
 useEffect(
     ()=>{
         axios.get(`http://localhost:8008/mahsol/`)
         .then(resps=>setfavoirmahsol(resps.data))
     }
 )

  return (
    <>
    <div className='pedar-favorit'>
         {favoirmahsol &&
          favoirmahsol.map(
              (f)=> 
              
                <div className='mahsolateman'>
              <img className='img-mahsolateman' src={f.image} alt="" />
              <h5>نام برند : {f.title}</h5>
              <h4>قیمت : {f.author}</h4>
              <button onClick={()=>delfavoritbtn(f.id)} className='delet-from-sabad'>حذف از سبد خرید</button>
            </div>
              
              
          )  
        }
    </div>
     
    </>
  )
}

export default Favorit