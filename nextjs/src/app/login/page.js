'use client'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button, Input} from "@nextui-org/react";
import React from 'react'


const Login = () => {
  return (
    <div className='login'>
  
    <img src='/pathoa.svg' width={100} height={100}/>
     <p>User Name:  <Input placeholder='Enter User Name'/></p> 
     <p>Password:  <Input placeholder='Enter Password'/></p> 
     <p><Button className='loginbtn'>Login</Button></p> 
        Don't have an account ? <a href='/register'>Sign Up</a>  instead
    </div>
  )
}

export default Login

// 2--> ecommerce---> mini ecommerce
// 1--> social media   ---
// 3--> school management ----- 
// 4--> video platform 
// 5--> chat application
// 6--> library management
// 7--> event booking system
// 8--> food ordering   -
// 10--> CRM
// 11--> Blog Site
// 12--> hotel booking system
// 13--> inventory management -
// 14--> health care management system
// 15--> stock portfolio 