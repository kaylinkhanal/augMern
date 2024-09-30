'use client'
import React, { useState } from 'react'

const Main = () => {
  const [number, setNumber] = useState(1)
  const handleIncrement=()=>{
    if (number<10){
      setNumber(number + 1)
    }
  }

  const handleDecrement =()=>{
    if (number > 0){
      setNumber(number-1)
    }
    
  }
  return (
    
    <div> 
      <input placeholder='enter here'/>
      {number}
      <button onClick={handleIncrement}>Increment</button>
      <br/>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Main