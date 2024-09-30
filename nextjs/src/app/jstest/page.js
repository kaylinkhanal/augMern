'use client'
import React from 'react'

const JsPest = () => {
    const num = Math.random()
  return (
    <div>
        {num > 0.5 ? "Yes you are right" : "nope"}
        </div>
  )
}

export default JsPest