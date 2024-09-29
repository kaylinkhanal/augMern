'use client'
import React, { useState } from 'react'

const Facebook = () => {

    const [reaction, setReaction] = useState('')
    const [reactionDivOpen, setReactionDivOpen] = useState(false)

    function changeReaction(selectedReaction){
        if(reaction == selectedReaction){
            setReaction('')
        }else{
            setReaction(selectedReaction)
        }
    }

    function generateIcons(){
        if(reaction === 'Haha'){
            return <button  onClick={()=> changeReaction('Haha')} >😆</button>
        }else if(reaction  === 'Wow'){
            return <button  onClick={()=> changeReaction('Wow')}>😲</button>
        }else{
            return <button onClick={()=> changeReaction('Like')} className='text'>{reaction == 'Like' ? <span>👍🏼</span>: <span><img src='/greylike.jpg' width={40} height={40}/></span>}</button>
        }
    }
  return (
    <div className='text-4xl'>
           {reactionDivOpen && <div onMouseLeave={()=> setReactionDivOpen(false)}>
                <button  onClick={()=> changeReaction('Like')}>👍🏼</button>
                <button onClick={()=> changeReaction('Haha')}>😆</button>
                <button onClick={()=>changeReaction('Wow')}>😲</button>
            </div>}
                
            <div onMouseEnter={()=>setReactionDivOpen(true)}>{generateIcons()}</div>
    
    </div>
  )
}

export default Facebook