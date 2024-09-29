'use client'
import React, { useEffect, useState } from 'react'

const Box = () => {
    const [width, setWidth]  = useState(50)
    const [height, setHeight]  = useState(50)
    const [backgroundColor, setBackgroundColor]  = useState('red')

    const [marginLeft, setMarginLeft] = useState(10)
    const [marginTop, setMarginTop] = useState(10)

    const [borderRadius, setBorderRadius] = useState(0)

    useEffect(()=>{
      document.addEventListener('keydown', function(event){
        switch(event.key){
          case 'ArrowDown':
            setMarginTop(marginTop => marginTop+10)
            break;
          case 'ArrowUp':
            setMarginTop(marginTop => marginTop-10)
            break;
          default:
            break;
        }
       })
    },[])

  return (
    <div>
        {marginTop}
        <button onClick={()=> setWidth(width=> width+10)}>Increase width</button>
        <button onClick={()=>setBorderRadius(borderRadius=>borderRadius+50)}>Change to circle</button>
        <input onChange={(e)=> setBackgroundColor(e.target.value)}/>
        <button onClick={()=>setMarginLeft(marginLeft=>marginLeft+10)}>Move right</button>
      
        <div style={{height, width,backgroundColor,marginTop,marginLeft,borderRadius}}>
        </div>
    </div>
  )
}

export default Box