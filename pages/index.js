// Next
import Head from 'next/head'
import Image from 'next/image'

// React
import { useState, useEffect } from 'react'

// Styles
import styles from '../styles/Home.module.css'

// Components
import Loading from '../components/loading'

export default function Home() {
  // States
  const [delay, setDelay] = useState(800)
  const [isDark, setIsDark] = useState(false)
  const [loadPage, setLoadPage] = useState(null)
  const [displayHome, setDisplayHome] = useState(null)
  const [screenWidth, setScreenWidth] = useState(0)

  // Hooks
  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)')) setIsDark(true)
    
    function handleResize() {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return _ => window.removeEventListener('resize', handleResize)
  }, [])

  // Handlers
  const killLoad = () => {
    setLoadPage(styles.fadeOut)
    setDisplayHome(styles.glassOff)
  }

  const addDelay = () => {
    setDelay(delay + 33)
    console.log(delay)
  }

  // Output
  return (
    <div className={`${displayHome}`}>
      <Head>
        <title>{`Ian's Portfolio`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.center} ${styles.cover} ${loadPage}`} style={{position: 'absolute'}}>
        <Loading
          killLoad={killLoad}
          addDelay={addDelay}
        />
      </div>

      <div className={styles.heroBg}>
        <img 
        src={`${isDark ? '/self/hero_bg_dark.png' : '/self/hero_bg_lite.png'}`} 
        className={styles.heroImg} 
        style={{'--curr-w': screenWidth}}
        />

        <div>
          <h1 className={styles.homeHeader}>ID</h1>
        </div>

        <div>
          <p>This is the home page</p>
        </div>
        
      </div>

      <div>
        
      </div>

    </div>
  )
}
