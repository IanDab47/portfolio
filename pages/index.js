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
import About from '../components/About/about'
import Skills from '../components/Skills/skills'
import Projects from '../components/Projects/projects'
import Scrollspy from 'react-scrollspy'

export default function Home({ isDark, setIsDark, loadedPages, animatePageLoad }) {
  // States
  const [delay, setDelay] = useState(800)
  const [offsetY, setOffsetY] = useState(540)
  const [loading, setLoading] = useState(false)
  const [loadPage, setLoadPage] = useState(null)
  const [displayHome, setDisplayHome] = useState(null)
  const [screenWidth, setScreenWidth] = useState(0)

  // Hooks
  useEffect(() => {
    if(screenWidth === 0) setScreenWidth(window.innerWidth)
    setOffsetY(innerHeight / 5 * -2)
    
    // console.log(window)
    
    function handleResize() {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return _ => window.removeEventListener('resize', handleResize)
  }, [screenWidth])

  useEffect(() => console.log(loadedPages), [loadedPages])

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
  const lightSelector = isDark ? 'dark' : 'light'

  return (
    <div className={`${styles.main} ${displayHome} ${styles.scrollSnap} ${isDark ? styles.dark : null}`}>
      <Head>
        <title>{`Ian's Portfolio`}</title>
        <meta name="author" conetnet="Ian Dabinett" />
        <meta name="description" content="The site that localizes all of my Software Engineering journey into one single page. Be sure to use the links to checkout my LinkedIn and GitHub for more up to date info, and contact me if you have any questions." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/self/att2.png" />
      </Head>
      
      <Scrollspy
        items={ ['loading', 'home', 'about', 'skills', 'projects'] }
        // currentClassName={''}
        onUpdate={e => animatePageLoad(e)}
        offset={offsetY}
      >

      <ModeSwitch 
        isDark={isDark}
        setIsDark={setIsDark}
      />

      <div id='loading' className={`${styles.center} ${styles.cover} ${loadPage}`}>
        <Loading
          killLoad={killLoad}
          addDelay={addDelay}
          isDark={isDark}
        />
      </div>

      <div id='home' className={`${styles.heroBg} ${loading ? null : styles.hidden}`}>
        <img 
          src='/self/hero_bg_lite.png'
          className={styles.heroImg} 
          style={{'--curr-w': screenWidth}}
        />

        <div>
          <a href='https://drive.google.com/file/d/1UjB5UMILitRU5kqluCf3nuNkqlyawudI/view' rel='noreferrer' target='_blank'>
            <h1 className={styles.homeHeader}>ID</h1>
          </a>
        </div>

        <div className={`TABLE OF CONTENTS`} style={{ position: 'relative', marginLeft: '8vw' }}>
          <section className={styles.contact}>
            <a href='https://github.com/IanDab47' rel={'noreferrer'} target='_blank'>
              <img 
                src={`/Logos/GitHub/${lightSelector}.svg`}
                alt='github-logo'
                title='Check out my GitHub!'
                layout='fill'
              />
            </a>

            <a href='https://www.linkedin.com/in/ian-dabinett/' rel={'noreferrer'} target='_blank'>
              <img 
                src={`/Logos/LinkedIn/${lightSelector}.svg`}
                alt='LinkedIn-logo'
                title='Check out my LinkedIn!'
                layout='fill'
              />
            </a>

            {/* CONTACT ME BUTTON HERE */}

          </section>
          <p>______</p>
          <div>
            <a href='#about' value='about'>about</a>
            <a href='#skills' value='skills'>skills</a>
            <a href='#projects' value='projects'>projects</a>
          </div>
        </div>
        
      </div>
    
      <About isDark={isDark} loading={loading}/>

      <Skills 
        isDark={isDark}
        loading={loading}
        loadedPage={loadedPages.includes('skills')}
      />

      <Projects 
        isDark={isDark}
        loading={loading}
        loadedPage={loadedPages.includes('projects')}
      />
      </Scrollspy>

    </div>
  )
}