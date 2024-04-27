import React, { useState } from 'react'
import CounterLabel from './CounterLabel';

const Counter = () => {
    const[count,setcount]= useState(0);
  return (
    <div>
      <button onClick={()=>{setcount(count+1)}}>Increment</button>
      <button onClick={()=>{setcount(count-1)}}>Decrement</button>
     <CounterLabel count={count}/>
    </div>
  )
}

export default Counter
