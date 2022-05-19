import React from 'react'

const Mahsolat = ({myimg,name,cost,theid,addto}) => {
  return (
    <>
    <div className='mahsolateman'>
      <img className='img-mahsolateman' src={myimg} alt="" />
      <h5>نام برند : {name}</h5>
      <h4>قیمت : {cost}</h4>
      <button onClick={()=>addto(theid)} className='btn-mahsolateman'><i class="fa fa-plus" aria-hidden="true"></i></button>
    </div>

    </>
  )
}

export default Mahsolat