// Next
import '../styles/globals.css'

// React
import { useState, useEffect } from 'react'

// Components
import NavBar from '../components/navBar'

function MyApp({ Component, pageProps }) {
  // State
  const [isDark, setIsDark] = useState(false)

  // Hooks
  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) setIsDark(true)
  }, [])

  return (
    <>
      {/* header */}
      <NavBar 
        isDark={isDark}
      />
      {/* aside */}
      <Component {...pageProps}
        isDark={isDark}
        setIsDark={setIsDark}
      />
      {/* footer */}
    </>
  )
}

export default MyApp