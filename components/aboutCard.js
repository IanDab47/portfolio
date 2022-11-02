// Next
import styles from '../styles/About.module.css'

// React
import { useState } from 'react'

export default function AboutCard({ z }) {
  // State
  const [showCard, setShowCard] = useState(false)
  const [cardStyles, setCardStyles] = useState({
    axis: -1,
    color: -1,
    ratio: -1,
    posX: -1,
    posY: -1
  })

  // Handlers
  const revealCard = () => {
    setShowCard(true)
  }

  const rndStyleGen = () => {
    // return nulls if window is not rendered
    if(typeof window !== 'object') return 

    // rnd generate numbers for style variables
    // choose which axis for the card to be
    const axisSelect = Math.round(Math.random()) // 0 == horizontal, 1 == vertical
    // choose one of 5 colors
    const colorSelect = Math.floor(Math.random() * 8 % 5) 
    // generate a rnd int between 6 and 11
    const sizeNarrowGen = Math.floor(Math.random() * 5 + 6)
    // generate a rnd int between 11 and 19
    const sizeWidGen = Math.floor(Math.random() * 8 + 11)
    // generate aspect ratio
    const cardRatio = axisSelect ?
      sizeNarrowGen / sizeWidGen // Vertical Calculation
      :
      sizeWidGen / sizeNarrowGen // Horizontal Calculation
    // generate a rnd position on the screen
    const [rndXPos, rndYPos] = rndPosGen(axisSelect, cardRatio, sizeNarrowGen, sizeWidGen)
    setCardStyles({
      axis: axisSelect,
      color: colorSelect,
      ratio: cardRatio,
      posX: rndXPos,
      posY: rndYPos
    })
  }

  const rndPosGen = (axis, ratio, narrow, wide) => {
    // Declare variables for clarity
    const screenX = window.innerWidth
    const screenY = window.innerHeight
    // Calculate card position based on inputs and window size
    const rndXPos = axis ?
      Math.floor(Math.random() * screenX) - Math.ceil(ratio * narrow) // Vertical
      :
      Math.floor(Math.random() * screenX) - Math.ceil(ratio * wide) // Horizontal
    const rndYPos = axis ?
      Math.floor(Math.random() * screenY) - Math.ceil(ratio * wide) // Vertical
      :
      Math.floor(Math.random() * screenY) - Math.ceil(ratio * narrow) // Horizontal

    return [rndXPos, rndYPos]
  }

  // Output
  if(axis === -1) [axis, color, ratio, posX, posY] = rndStyleGen()

  return (
    <div 
      className={`
        ${styles.card} 
        ${showCard ? styles.info : null}
        ${
          color === 0 ? styles.colorOne :
          color === 1 ? styles.colorTwo :
          color === 2 ? styles.colorThree :
          color === 3 ? styles.colorFour :
          color === 4 ? styles.colorFive : null
        }
      `}
      style={{ 
        '--ratio': ratio, 
        '--posX': `${posX}`, 
        '--posY': `${posY}` 
      }}
      onClick={revealCard}
    >
      <h1>{`Hi, I'm Ian!`}</h1>
      
      <p>After recently graduating from the General Assembly school for software engineering, I am ready to exceed in this new chapter of my life. I hope that it will be with one of you reading this right now!</p>

    </div>
  )
}