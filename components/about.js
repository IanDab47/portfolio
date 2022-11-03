// Next
import styles from '../styles/About.module.css'
// import Image from 'next/image'

// React
import { useState, useEffect } from 'react'

// Components
import AboutCard from './aboutCard'

export default function about({ loading }) {
  const [cards, setCards] = useState([])

  useEffect(() => {
    generateCards()
  }, [loading])

  // Output
  const generateCards = () => {
    let zPosArr = [0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1]
    zPosArr = zPosArr.sort((a, b) => .5 - Math.random())
    
    setCards(zPosArr.map((z, i) => {
      console.log(`card_${i}`)
      return (
        <AboutCard
          key={`card_${i}`}
          z={z}
        />
      )
    }))
  }
  
  return (
    <div className={styles.aboutInnerWrapper}>
      <section>
        {cards}
      </section>
    </div >
  )
}