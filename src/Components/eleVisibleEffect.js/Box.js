import React, { useEffect, useRef } from 'react'

const Box = () => {
    const Divref = useRef(null);
   useEffect(()=>{
    const div = Divref.current;
    const observe = new IntersectionObserver(entries=>{
        const entry = entries[0];
        if (entry.isIntersecting) {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        }else{
            document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        }
    },{threshold:1.0 });
    observe.observe(div);
    return () => {
        observe.disconnect();
      }
   },[]);

  return (
    <div ref={Divref} style={{
       margin: 20,
      height: 100,
      width: 100,
      border: '2px solid black',
      backgroundColor: 'blue'
    }}>
      
    </div>
  )
}

export default Box
