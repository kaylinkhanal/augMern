'use client'
import { GrapeIcon, LeafyGreenIcon } from 'lucide-react'
import React from 'react'

const UserListBox = (props) => {

  return (
    <div  className='flex flex-col bg-white  w-[20%] h-screen shadow-md rounded-2xl p-2'> 
        {props.userData.map((item)=>{
            return (<div onClick={()=>props.setUserSelection(item)} className='flex gap-3 p-4 mb-2 shadow-sm  rounded-xl'>
         
                <div className='relative'>
                    <img src= {item.avatar} className='rounded-[50%] h-[50px]'/>
                    <div className='absolute bottom-1 '> {item.onlineStatus ? <LeafyGreenIcon size={10}/> : <GrapeIcon size={10}/>}</div>
                </div>
                <div className='font-semibold text-sm'>
                {item.name}
                </div>
           
                </div>)
        })}
    </div>
  )
}

export default UserListBox