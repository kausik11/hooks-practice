import React from 'react'
import ArrayUseState from './Components/ArrayUseState'
import Counter from './Components/Counter/Counter'
import Useref from './Components/Useref'
import StopWatch from './Components/StopWatch_Useref.js/StopWatch'
import Windowevent from './Components/effecthook/Windowevent'
import MouseEvent from './Components/effecthook/MouseEvent'
import Box from './Components/eleVisibleEffect.js/Box'

const App = () => {
  return (
    // <div>
    //   {/* <ArrayUseState/> */}
    //   {/* <Counter/> */}
    //   {/* <Useref/> */}
    //   {/* <StopWatch/> */}
    //   {/* <Windowevent/> */}
    //   {/* <MouseEvent/> */}
    // </div>
    <>
      <LongSection/>
      <Box/>
      <LongSection/>
      <Box/>
      <LongSection/>
    </>
  )
  
}

const LongSection = ()=>{
  const Items=[];
  for (let i = 0; i < 50; i++) {
    Items.push(<li>Item #{i} (Keep scrolling)</li>)
  }
  return <ul>{Items}</ul>
}
export default App
