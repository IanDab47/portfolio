// Next
import '../styles/globals.css'

// React
import { useState, useEffect } from 'react'

// Components
import NavBar from '../components/navBar'

function MyApp({ Component, pageProps }) {
  // State
  const [isDark, setIsDark] = useState(false)
  const [onHome, setOnHome] = useState(true)
  const [loadedPages, setLoadedPages] = useState([])

  // Hooks
  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) setIsDark(true)
  }, [])

  const animatePageLoad = (e) => {
    console.log(e.id)
    if(!loadedPages.includes(e.id)) setLoadedPages([...loadedPages, e.id])
    if(e.id !== 'loading') setOnHome(false)
    else setOnHome(true)
  }

  return (
    <>
      {/* header */}
      <NavBar 
        isDark={isDark}
        onHome={onHome}
      />
      {/* aside */}
      <Component {...pageProps}
        isDark={isDark}
        setIsDark={setIsDark}
        loadedPages={loadedPages}
        animatePageLoad={animatePageLoad}
      />
      {/* footer */}
    </>
  )
}

export default MyApp