import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Avatar} from "@nextui-org/react";

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-4 h-[100vw] w-[10%] bg-white'>
      <Image src='/bg_img.jpg' width={100} height={100} alt='Background Image'/>
        <span className='p-2'><Link href ='/admin/dashboard'>Dashboard</Link></span>
        <span className='p-2'><Link href ='/admin/students'>Students</Link></span>
        <span className='p-2'><Link href ='/admin/attendance'>Attendance</Link></span>
        <span className='p-2'><Link href ='/admin/products'>Products</Link></span>

    </div>
  )
}

export default Sidebar