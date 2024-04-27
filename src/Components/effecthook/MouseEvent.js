import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const MouseEvent = () => {
    const [x,setx] = useState(0);
    const[y,sety]= useState(0);
    useEffect(()=>{
        window.addEventListener('pointermove',(e)=>{setx(e.offsetX); sety(e.offsetY)})
    },[])
  return (
    <div style={{ position:'absolute',
                width:40,
                height:40,
                backgroundColor:'pink',
                borderRadius: '50%',
                transform:`translate(${x}px,${y}px)`,
                pointerEvents:'none',
                top:-20,
                left:-20}}>
    </div>
  )
}

export default MouseEvent
