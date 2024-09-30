'use client'
import Sidebar from '@/components/sidebar/page'
import { Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import React from 'react'

const Products = () => {
  return (
    <div className='flex-gap-3 m-4'>
        <Card className='w-72'>
            <CardHeader>
                <Image src ="/product.jpg" className = 'w-full' width ={300} height={200}/>
                </CardHeader>
            <CardFooter>footer her..</CardFooter>

        </Card>
        <Card className='w-72 m-4'>
            <CardHeader>
                <Image src ="/product.jpg" className = 'w-full' width ={300} height={200}/>
                </CardHeader>
            <CardFooter>footer her..</CardFooter>

        </Card>
        
    </div>
    
  )
}

export default Products