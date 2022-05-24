import React, { useEffect } from 'react'
import axios from 'axios'

function VirtualDressingRoom() {

  useEffect(() => {
    axios('http://localhost:5000').then((response)=>{
      console.log(response, 'sameer');
    }
    )
  },[])
  
  return (
    <div className='virtualDressingRoom'>
        VirtualDressingRoom
    </div>
  )
}

export default VirtualDressingRoom