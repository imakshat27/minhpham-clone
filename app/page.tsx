'use client'

import { useEffect, useState } from 'react'
import './globals.css'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
  return (
    <div className="loading-screen">
      <img src="/logo.gif" alt="Loading..." className="loading-gif" />
      <h1>Loading...</h1>
    </div>
  )
}


  if (!showContent) {
    return (
      <div className="start-screen" >
        <img src="/logo.gif" alt="Logo gif" className="loading-gif" />
        <button className="start-button" onClick={() => setShowContent(true)}>
          START
        </button>
      </div>
    )
  }


  return (
    <main>
      <div className="video-wrapper">
        <video
          autoPlay
          loop
          playsInline
          className="background-video"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay" />
        <div className="content">
          <h1>MINH PHAM</h1>
          <p>MAKING</p>
          <p>GOOD</p>
          <p>SHIT</p>
          <p>SINCE</p>
          <p>2009</p>
        </div>
      </div>
    </main>
  )
}
