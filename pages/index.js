// Next
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// React
import { useState, useEffect } from 'react'

// Styles
import styles from '../styles/Home.module.css'

// Components
import Loading from '../components/loading'
import ModeSwitch from '../components/modeSwitch'
import About from '../components/about'

export default function Home() {
  // States
  const [delay, setDelay] = useState(800)
  const [isDark, setIsDark] = useState(false)
  const [loading, setLoading] =useState(false)
  const [loadPage, setLoadPage] = useState(null)
  const [displayHome, setDisplayHome] = useState(null)
  const [screenWidth, setScreenWidth] = useState(0)

  // Hooks
  useEffect(() => {
    if(screenWidth === 0) setScreenWidth(window.innerWidth)
    if(window.matchMedia('(prefers-color-scheme: dark)').matches && screenWidth > 600) setIsDark(true)
    
    function handleResize() {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return _ => window.removeEventListener('resize', handleResize)
  }, [screenWidth])

  // Handlers
  const killLoad = () => {
    setLoading(true)
    setLoadPage(styles.fadeOut)
    setDisplayHome(styles.glassOff)
  }

  const addDelay = () => {
    setDelay(delay + 33)
  }

  // Output
  return (
    <div className={`${displayHome} ${styles.scrollSnap} ${isDark ? styles.dark : null}`}>
      <Head>
        <title>{`Ian's Portfolio`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ModeSwitch 
        isDark={isDark}
        setIsDark={setIsDark}
      />

      <div className={`${styles.center} ${styles.cover} ${loadPage}`}>
        <Loading
          killLoad={killLoad}
          addDelay={addDelay}
          isDark={isDark}
        />
      </div>

      <div id='home' className={styles.heroBg}>
        <img 
          src='/self/hero_bg_lite.png'
          className={styles.heroImg} 
          style={{'--curr-w': screenWidth}}
        />

        <div>
          <h1 className={styles.homeHeader}>ID</h1>
        </div>

        <div style={{ marginLeft: '8vw' }}>
          <p>______</p>
          <div className={`TABLE OF CONTENTS`} >
            <a href='#about' value='about'>about</a>
            <a href='#skills' value='skills'>skills</a>
            <a href='#projects' value='projects'>projects</a>
          </div>
        </div>
        
      </div>
      
      <div id='about'>
        <About loading={loading}/>
      </div>

      {/* <div id='skills'>
        Section about skills
      </div>

      <div id='projects'>
        Section about projects
      </div> */}

    </div>
  )
}