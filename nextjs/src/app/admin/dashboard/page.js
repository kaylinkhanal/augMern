import React from 'react'
import Sidebar from '@/components/sidebar/page'
const Dashboard = () => {
  return (
    <div>
    <div className='flex gap-4 m-12 font-sans justify-center'>
        <div className = ' flex flex-col bg-red-200 w-48 shadow-md rounded-md h-40 justify-center items-center'> <span > Total Students</span> <span className='font-bold' text-2xl>15000</span> </div>
        <div className = 'flex flex-col bg-blue-200 w-48 shadow-md rounded-md h-40 justify-center items-center'> Total Teachers 1500 </div>
        <div className='absolute'>
          Avatar
        </div>
    </div>
    </div>
  )
}

export default Dashboard