import React, { useRef, useState } from 'react'

const StopWatch = () => {
    const[startTime,setstrattime]=useState(null);
    const[now,setnow]=useState(null);
    const ref = useRef(null);
    const LucyName = useRef('hello');


    const handleStart =()=>{
        setstrattime(Date.now());
        setnow(Date.now());
        clearInterval(ref.current);
        ref.current = setInterval(() => {
            setnow(Date.now());
        }, 10);
        console.log(ref.current);
          console.log(LucyName.current);
    }

    const handleStop = ()=>{
        clearInterval(ref.current);
    }

    let secondpass = 0;
    if (startTime != null && now != null) {
        secondpass = (now-startTime)/1000;
    }
  return (
    <div>
    <h1>time passed: {secondpass}</h1>
    <input type='text' ref={LucyName} value='hii'/><br/>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default StopWatch
