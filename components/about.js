// Next
import styles from '../styles/About.module.css'
// import Image from 'next/image'

// React
import { useState } from 'react'

// Components
import AboutCard from './aboutCard'

export default function about() {
  // Output
  const generateCards = () => {
    let zPosArr = [0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1]
    zPosArr = zPosArr.sort((a, b) => .5 - Math.random())
    
    const cards = zPosArr.map((z, i) => {
      return (
        <AboutCard
          key={`card_${i}`}
          z={z}
        />
      )
    })

    return cards
  }
  
  return (
    <div className={styles.aboutInnerWrapper}>
      <section>
        {generateCards()}
      </section>
    </div >
  )
}