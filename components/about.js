// Next
import styles from '../styles/About.module.css'
// import Image from 'next/image'

// React
import { useState, useEffect } from 'react'

// Components
import AboutCard from './aboutCard'

export default function About({ loading }) {
  const [cards, setCards] = useState([])

  useEffect(() => {
    generateCards()
  }, [loading])

  // Output
  const generateCards = () => {
    const aboutMe = {
      0: {
        title: `Hi, I\'m Ian`,
        description: `I'm a software engineer who loves to pursue creative design in any way imaginable.`
      },
      1: {
        title: `I\'ve been programming for 10+ years now!`,
        description: `Whether it be from high school, robots, or even in video games like Minecraft. The skills I\'ve learned in the past have all come together to create what you see here and much more if you\'ll let me!`
      },
      2: {
        title: `Being a former Video and Audio Producer has helped me a lot!`,
        description: `By learning new programs and diving into creative fields, I am more than comfortable with working on new projects, and sharing the results to be utilized by many!`
      },
      3: {
        title: ``,
        description: ``
      },
      4: {
        title: ``,
        description: ``
      },
    }

    let zPosArr = [0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1],
        infoArr = [0,1,2,3,4]
        
    zPosArr = zPosArr.sort((a, b) => .5 - Math.random())
    
    setCards(zPosArr.map((z, i) => {
      const info = z === 2 ? aboutMe[infoArr.pop()] : {title: null, description: null}
      return (
        <AboutCard
          key={`card_${i}`}
          info={info}
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