'use client'
import { Card, CardFooter, CardHeader } from '@nextui-org/react'
import Image from 'next/image'
import { IoBookmarkOutline } from "react-icons/io5";

import React from 'react'

const Products = () => {
  return (
    <div className='flex gap-3 m-4'>
      <Card className='w-72'>
        <CardHeader>
        <IoBookmarkOutline className='absolute right-4 opacity-20 top-4' size={40}/>
          <Image src="/nike.jpeg" className='w-full' width={200} height={200}/>
        </CardHeader>
        <CardFooter> footer her..</CardFooter>

      </Card>
      <Card className='w-72'>
        <CardHeader>
          <Image src="/nike.jpeg" className='w-full' width={200} height={200}/>
        </CardHeader>
        <CardFooter> footer her..</CardFooter>

      </Card>
    </div>
  )
}

export default Products