'use client'
import React, { useState } from 'react'

const Box = () => {
    const [width, setWidth]  = useState(50)
    const [height, setHeight]  = useState(50)
    const [backgroundColor, setBackgroundColor]  = useState('red')
    const [marginTop, setMarginTop] = useState(10)
    const [marginLeft, setMarginLeft] = useState(10)
    const [borderRadius, setBorderRadius] = useState(10)

  return (
    <div>
        <button onClick={()=> setWidth(width+10)}>Increase width</button>

        <input onChange={(e)=> setBackgroundColor(e.target.value)}/>
        <button onClick={()=>setMarginLeft(marginLeft+50)}>Move right</button>
        <button onClick={() => setMarginTop(marginTop - 10)}>Move top</button>
        <button onClick={() => setMarginTop(marginTop + 10)}>Move bottom</button>

        <button onClick ={()=>setBorderRadius(borderRadius+50)}> make it a circle</button>

        <div style={{height, width,backgroundColor,marginLeft, borderRadius, marginTop}}>

        </div>

        
    </div>
  )
}

export default Box