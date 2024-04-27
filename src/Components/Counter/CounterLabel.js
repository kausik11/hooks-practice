import React, { useState } from 'react'

const CounterLabel = ({count}) => {
        console.log('count is',count);
    const[prevcount,setPrevcount]= useState(count);
    const[trend,setTrend]=useState(null);
    console.log('prevcount is',prevcount);

    if (prevcount !== count) {
        setPrevcount(count);
        setTrend(count > prevcount ? 'increasing' : 'decresing');
    }
  return (
    <div>
     <p>{count}</p>
     {trend && <p>The count is {trend}</p>}
    </div>
  )
}

export default CounterLabel
