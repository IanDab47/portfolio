// Next
import styles from '../../styles/About.module.css'
import main from '../../styles/Home.module.css'
// import Image from 'next/image'

// React
import { useState, useEffect } from 'react'

// Components
import AboutCard from './aboutCard'

export default function About({ isDark, loading }) {
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
        description: `I'm a software engineer who loves to pursue unique design and new technologies.`,
        styles: { width: (screenX / 214 + 6) * (16 / remConv), posX: (screenX / 2) - (10 * remConv / 2), posY: (screenY) - (16 * remConv / 2) }
      },
      1: {
        title: `I've been programming for over 10 years now!`,
        description: `I started with Java and C++ in high school, but I'm most proficient in JavaScript and TypeScript.`,
        styles: { width: (screenX / 214 + 6) * (16 / remConv), posX: screenX / 20, posY: screenY / 6 }
      },
      2: {
        title: `Being a former video and audio producer has helped me a lot!`,
        description: `Learning new programs and adapting to new environments are my strongest qualities because of it!`,
        styles: { width: (screenX / 294 + 9) * (16 / remConv), posX: screenX * 3 / 4, posY: screenY - screenY / 100 }
      },
      3: {
        title: `My hobbies keep me motivated!`,
        description: `While I'm currently focused on mechanical keyboards, my other hobbies give me new inspiration and motivate me to strive to be better!`,
        styles: { width: (screenX / 273 + 8.5) * (16 / remConv), posX: screenX * 4 / 17, posY: screenY * 5 / 9 }
      },
      4: {
        title: `Learning has always been exciting for me`,
        description: `From learning to play musical instruments, to building keyboards, to using code to solve logical problems. I'm always up for a new expeience and challenge to pursue greater`,
        styles: { width: (screenX / 273 + 8.5)  * (16 / remConv), posX: screenX * 2 / 3, posY: screenY * 2 / 7 }
      },
      default: {
        title: null,
        description: null,
        styles: { width: null, posX: null, posY: null }
      },
    }

    // Declare arrays for preset variables
    let zPosArr = [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,2,2,2,2,2],
        infoArr = [0,1,2,3,4]
        
    // Shuffle arrays for variation on load
    // zPosArr = zPosArr.sort((a, b) => .5 - Math.random())
    
    // Generate cards
    setCards(zPosArr.map((z, i) => {
      const info = z === 2 ? aboutMe[infoArr.shift()] : aboutMe.default
      // if(z === 2) console.log(info)
      return (
        <section 
          key={`card_${i}`}
          id={`card_${i}`}
          className={`
            ${
              z === 0 ? styles.plxBack :
              z === 1 ? styles.noPlx :
              z === 2 ? styles.plxFront : null
            }
          `}
        >
          <AboutCard
            info={info}
            i={i}
            z={z}
          />
        </section>
      )
    }))
  }
  
  return (
    <div id='about' className={`${styles.aboutWrapper} ${isDark ? styles.dark : null} ${loading ? null : main.hidden}`}>
      {cards}
    </div>
  )
}