'use client'
import React, { useState } from 'react'

const initialBox = [
    ['1', '2' ,'3','4'],
    ['', '5' ,'',''],
    ['6', '7','',''],
    ['', '8' ,'9','10']
]

const mineBox = initialBox.map((item)=>{
    const randomNum = Math.floor(Math.random()*4)
    const randomBomb = Math.floor(Math.random()*4)
    item[randomNum] = 'bomb'
    item[randomBomb] = randomNum > randomBomb ? 'bomb':''
    
    
    return item
  })

const Mine = () => {
    const [selections, setSelections] = useState([])
    const [isGameOver, setIsGameOver] = useState(false)

   const saveResults = (val)=> {
    if(val=='bomb'){
        alert("Game over!!")
        setIsGameOver(true)
        return;
    }
    setSelections([...selections, val])
   }

   const handleRestart = ()=> {
    setIsGameOver(false)
    setSelections([ ])
   }
   return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-[30%] h-[40%] bg-gray-200 grid grid-cols-4 gap-2 p-2'>
            {!isGameOver ? mineBox.map((item) => (
                item.map((val) => (
                    <div onClick={()=>saveResults(val)} className='flex items-center justify-center border border-gray-400 p-4'>{selections.includes(val) ? val : ''}</div>
                ))
            )): <button onClick={()=>handleRestart()}>Restart</button>}

        </div>
       your score is: {JSON.stringify(selections)}
    </div>
)
}

export default Mine