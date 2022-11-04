// Next
import styles from '../styles/About.module.css'
// import Image from 'next/image'

// React
import { useState, useEffect } from 'react'

// Components
import AboutCard from './aboutCard'

export default function About({ loading }) {
  // States
  const [cards, setCards] = useState([])

  // Hooks
  useEffect(() => {
    generateCards()
  }, [loading])

  // Handlers
  const convPxToRem = (width) => {
    const rem = width >= 3840 ? 32 :
                width >= 2560 ? 24 : 16

    return rem
  }

  // Output
  const screenX = typeof window === 'object' ? window.innerWidth : null,
        screenY = typeof window === 'object' ? window.innerHeight : null,
        remConv = typeof window === 'object' ? convPxToRem(screenX) : null

  const generateCards = () => {
    // Object of info
    const aboutMe = {
      0: {
        title: `Hi, I'm Ian`,
        description: `I'm a software engineer who loves to pursue creative design in any way imaginable.`,
        styles: { width: 10, posX: (screenX / 2) - (10 * remConv / 2), posY: (screenY / 2) - (16 * remConv / 2) }
      },
      1: {
        title: `I've been programming for over 10 years now!`,
        description: `I started with Java and C++ in high school, but I'm most proficient in JS/TS.`,
        styles: { width: 13, posX: screenX / 9, posY: screenY / 6 }
      },
      2: {
        title: `Being a former video and audio producer has helped me a lot!`,
        description: `Learning new programs and adapting to new environments are my strongest qualities because of it!`,
        styles: { width: 14, posX: screenX * 3 / 4, posY: screenY / 12 }
      },
      3: {
        title: `My hobbies keep me motivated!`,
        description: `While I'm currently focused on mechanical keyboards, my other hobbies give me new inspiration and motivate me to strive to be better!`,
        styles: { width: 11, posX: screenX * 4 / 13, posY: screenY * 5 / 9 }
      },
      4: {
        title: ``,
        description: ``,
        styles: { width: 14, posX: screenX * 2 / 3, posY: screenY * 4 / 7 }
      },
      default: {
        title: null,
        description: null,
        styles: { width: null, posX: null, posY: null }
      },
    }

    // Declare arrays for preset variables
    let zPosArr = [0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1],
        infoArr = [0,1,2,3,4]
        
    // Shuffle arrays for variation on load
    // zPosArr = zPosArr.sort((a, b) => .5 - Math.random())
    
    // Generate cards
    setCards(zPosArr.map((z, i) => {
      const info = z === 2 ? aboutMe[infoArr.shift()] : aboutMe.default
      // if(z === 2) console.log(info)
      return (
        <AboutCard
          key={`card_${i}`}
          info={info}
          i={i}
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