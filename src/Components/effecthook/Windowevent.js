import React, { useEffect, useState } from 'react'

function Windowevent() {
    const[width,setwidth]=useState(window.screen.width);


    const actualwidth = ()=>{
        setwidth(window.innerWidth);
    }

      useEffect(()=>{
        window.addEventListener('resize',actualwidth)
         return ()=>{
            window.removeEventListener('resize',actualwidth)
            console.log('data cleared');
         }
    })

  return (
    <div>
      <h1>The screen actual width</h1>
      <p>{width}</p>
    </div>
  )
}

export default Windowevent
