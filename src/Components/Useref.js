import React, { useEffect, useRef, useState } from 'react'

const Useref = () => {
    const[data,setdata]=useState(0);
    const a = useRef(1);
    const btnref = useRef();
    
    
    useEffect(()=>{
        a.current = a.current+1;
        console.log(`rendering... ${a.current}`);
        btnref.current.style.backgroundColor = 'red';
    })



  return (
    <div>
    <button  ref={btnref} onClick={()=>{setdata(data+1)}}>Click</button>
    <button onClick={()=>{}}>Change Me</button>
    </div>
  )
}

export default Useref
