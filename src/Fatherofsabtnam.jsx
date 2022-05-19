import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Main from './main'
import Userefit from './components/Userefit'
const Fatherofsabtnam = () => {
    const ismobile=useMediaQuery({
        query:"(max-device-width:480px)"
    })
  return (
    <div>
      {ismobile?<Userefit/>:<Main/>}  
    </div>
  )
}

export default Fatherofsabtnam