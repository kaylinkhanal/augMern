'use client'
import React, { useState } from 'react'

const Facebook = () => {
    const [selectedVideo, setSelectedVideo] = useState('')

    function showVideo(videoName) {
        if (selectedVideo === videoName) {
            setSelectedVideo('') 
        } else {
            setSelectedVideo(videoName)
        }
    }

    function generateVideo() {
        if (selectedVideo === 'Tulips') {
            return <video key="tulips-video" controls autoPlay className="w-1/2 h-[65%]">
                <source src="tulips.mp4" type="video/mp4" />

            </video>
        } else if (selectedVideo === 'Daisy') {
            return <video key="daisy-video" controls autoPlay className="w-1/2 h-[65%]">
                <source src="daisy.mp4" type="video/mp4" />

            </video>
        } else if (selectedVideo === 'CherryBlossom') {
            return <video key="cherryblossom-video" controls autoPlay className="w-1/2 h-[65%]">
                <source src="cherryblossom.mp4" type="video/mp4" />

            </video>
        } else {
            return null;
        }
    }

    return (
        <div className="relative h-screen bg-[url('/bgbg.jpg')] bg-cover bg-center">
            <div className='p-5 font-thin text-6xl absolute top-0 left-1/2 -translate-x-1/2'>
                Select a flower to grow.
            </div>
            <div className='p-10 text-8xl absolute top-16 left-1/2 -translate-x-1/2'>
                <button onClick={() => showVideo('Daisy')}>🌻</button>
                <button onClick={() => showVideo('Tulips')}>🌷</button>
                <button onClick={() => showVideo('CherryBlossom')}>🌸</button>
            </div>
            
            <div className='absolute top-[35%] left-[30%] w-full h-full'>
                {generateVideo()}
            </div>
        </div>
    )
}

export default Facebook
