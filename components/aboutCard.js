// Next
import styles from '../styles/About.module.css'

// React
import { useState } from 'react'

export default function AboutCard({ z, info }) {
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
    const screenX = window.innerWidth,
          screenY = window.innerHeight
    // Calculate card position based on inputs and window size
    const rndXPos = axis ?
      console.log('X:', Math.floor(Math.random() * (screenX * .8) + (screenX * .1)) - Math.ceil(ratio * narrow)) // Vertical
      :
      console.log(Math.floor(Math.random() * (screenX * .8) + (screenX * .1)) - Math.ceil(ratio * wide)) // Horizontal
    const rndYPos = axis ?
      console.log('Y:', Math.floor(Math.random() * (screenY * .8)) - Math.ceil(ratio * wide)) // Vertical
      :
      console.log(Math.floor(Math.random() * (screenY * .8)) - Math.ceil(ratio * narrow)) // Horizontal

    return [rndXPos, rndYPos]
  }

  // Output
  if(cardStyles.axis === -1) rndStyleGen()

  return (
    <div 
      className={`
        ${styles.card} 
        ${showCard ? styles.info : null}
        ${
          z === 0 ? styles.plxBack :
          z === 1 ? styles.noPlx :
          z === 2 ? styles.plxFront : null
        }
        ${
          cardStyles.color === 0 ? styles.colorOne :
          cardStyles.color === 1 ? styles.colorTwo :
          cardStyles.color === 2 ? styles.colorThree :
          cardStyles.color === 3 ? styles.colorFour :
          cardStyles.color === 4 ? styles.colorFive : null
        }
      `}
      style={{ 
        '--ratio': cardStyles.ratio, 
        '--posX': `${cardStyles.posX}`, 
        '--posY': `${cardStyles.posY}` 
      }}
      onClick={revealCard}
    >
      <h1>{info ? info.title : null}</h1>
      
      <p>{info ? info.description : null}</p>

    </div>
  )
}