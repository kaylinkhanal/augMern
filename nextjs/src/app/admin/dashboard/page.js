import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex gap-4 m-12 justify-center font-mono'>
  <div className='flex flex-col bg-red-100 w-48 h-72 shadow-md rounded-lg justify-center items-center p-4 '>
      <span>Total Students</span>
      <span className='font-bold text-2xl'>15993</span>
      </div>
  <div className='flex flex-col bg-blue-100 w-48 h-72 shadow-md rounded-lg justify-center items-center p-4 '>
  <span>Total Teacher</span>
      <span className='font-bold text-2xl'>200</span>
      </div>
</div>
  )
}

export default Dashboard




