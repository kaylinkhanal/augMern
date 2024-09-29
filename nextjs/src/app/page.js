'use client'
import React, { useState } from 'react'

const Main = () => {
  const [number, setNumber] = useState(1)
  function handleIncrement(){
    
    setNumber(number+1)
  }
  return (
    <div>
      {number}
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default Main