'use client'
import React, { useState } from 'react'

const Facebook = () => {
    const [color, setColor] = useState('bg-gray-300');  
    const [reactionDivOpen, setReactionDivOpen] = useState(false)

    const [reaction, setSelectedReaction] = useState('Like')
    function changeReaction(selectedreaction){
        if (reaction === selectedreaction){
            setSelectedReaction('')
        }
        else{
            setSelectedReaction(selectedreaction)
        }
        

    }
    function generateIcon(){
        if (reaction === 'Haha'){
            return <button onClick={()=>changeReaction('Haha')}>😆</button>
        }
        else if (reaction ==='Wow'){
            return <button onClick={()=>changeReaction('Wow')}>👏</button>
        }
        else{
            return <button onClick={ ()=>changeReaction('Like')}>{reaction == 'Like'? <span>👍🏼</span>:<span>👍</span> } </button>
        }
    }

    return (
        <div className='text-4xl'>
            {reactionDivOpen && <div onMouseLeave={()=> setReactionDivOpen(false)}>
                <button onClick={ ()=>changeReaction('Like')}  >👍</button>
                <button onClick={()=>changeReaction('Wow')}  >👏</button>
                <button onClick={()=>changeReaction('Haha')}  >😆</button>
            </div>}
            <div onMouseEnter={()=> setReactionDivOpen(true)}>{generateIcon()}</div>
        </div>
    );
}

export default Facebook;
