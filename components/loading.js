// React
import { useState, useEffect } from 'react'

// Styles
import styles from '../styles/Home.module.css'

export default function Loading({addDelay, killLoad}) {
  // States
  const [firstLoad, setFirstLoad] = useState(true)
  const [hidden, setHidden] = useState('')
  const [width, setWidth] = useState(.0001)
  const [delay, setDelay] = useState(0)

  // Hooks
  useEffect(() => {
    // Render loading bar
    if(firstLoad) { // Delay if first load
      setFirstLoad(false)
      setTimeout(fillLoading, 800)
    } else { // Run function continuously without delay
      fillLoading()
    }
  }, [width])

  // Handlers
  const fillLoading = () => {
    if(width < 100) {
      setTimeout(() => {
        setWidth(width + ((Math.random() + .3) ** ((Math.random() * 10 + 1)) + .0001))
      }, 33)
      addDelay()
    }
    if(width > 100) {
      setWidth(100)
    }
    if(width === 100) {
      killLoad()
    }
  }

  const closeLoading = () => {
    setTimeout(() => { if(width === 100) setHidden(styles.hidden) }, 3000)
  }

  // Output
  return (
    <div className={`${styles.loading} ${hidden} ${closeLoading()}`}>
      {/* <h1>JavaScript Progress Bar</h1> */}

      <div 
        id={styles.loadingBar}
        className={width === 100 ? styles.break : styles.slideUp}
        style={{'--order': 0, '--shift': 80}}
      >
        <div id={styles.fill} style={{width: `${width}%`}}></div>

      </div>
      
      <p 
        id={styles.percentage} 
        className={width === 100 ? styles.break : styles.slideUp} 
        style={{'--order': 1, '--shift': -10}}
      >
        {Math.floor(width)}%
      </p>

    </div>
  )
}