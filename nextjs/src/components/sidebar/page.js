import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-4 h-[100vh] w-[10%]'>
        <Image src='/pathoa.svg' width={100} height={100}/>
        <span className='p-2'><Link href='/admin/dashboard'>Dashboard</Link> </span>
        <span className='p-2'><Link href='/admin/students'>Students</Link></span>
        <span className='p-2'><Link href='/admin/attendance'> Attendance</Link></span>
    </div>
  )
}

export default Sidebar