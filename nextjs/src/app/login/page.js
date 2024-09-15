
import React from 'react'

const Login = () => {
  return (
    
    <div className='login'>
      <div className='content'>
      <p>USERNAME<input type = "text" placeholder='Enter Name'/></p>
      <p> PASSWORD <input type="text" placeholder='Enter password'/></p>
      <p><button className='button'>Login</button></p>
      </div>
    </div>
  )
}

export default Login