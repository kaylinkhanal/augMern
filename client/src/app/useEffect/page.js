'use client'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [num ,setNum] = useState(0)
    const [num2 ,setNum2] = useState(0)

    useEffect(()=>{
        console.log("Hi")
    },[num])
  return (
    <div>
        {num}-
        {num2}
        <br/>
        <button onClick={()=>setNum(num+1)}>increment num1</button><br/>
        <button onClick={()=>setNum2(num2+1)}>increment num2</button>

    </div>
  )
}

export default page