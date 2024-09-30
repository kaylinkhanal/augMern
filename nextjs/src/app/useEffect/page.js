'use client'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [num, setNum] = useState(0)

    useEffect(()=>{
        console.log('Hi')
    }, []);
  return (
    <div>
        {num}
        <button onClick={()=> setNum(num+1)}>increment</button>
    </div>
  )
}

export default page