// Next
import styles from '../styles/About.module.css'
// import Image from 'next/image'

// React
import { useState } from 'react'

export default function about() {
  // State
  const [showCard, setShowCard] = useState(false)

  // Handlers
  const revealCard = () => {
    setShowCard(true)
  }

  // Output
  return (
    <div className={styles.aboutInnerWrapper}>
      <section>
        <div 
          className={`${styles.card} ${showCard ? styles.info : null}`}
          onClick={revealCard}
        >
          <h1>{`Hi, I'm Ian!`}</h1>

          <p>After recently graduating from the General Assembly school for software engineering, I am ready to exceed in this new chapter of my life. I hope that it will be with one of you reading this right now!</p>

        </div>
      </section>
    </div >
  )
}