// Next
import styles from '../../styles/About.module.css'

// React
import { useState } from 'react'

export default function AboutCard({ info, i, z }) {
  // State
  const [seedX, setSeedX] = useState(Math.random())
  const [seedY, setSeedY] = useState(Math.random())
  const [showCard, setShowCard] = useState(false)
  const [cardStyles, setCardStyles] = useState({
    axis: -1,
    color: -1,
    ratio: -1,
    posX: -1,
    posY: -1,
    width: -1
  })

  // Handlers
  const revealCard = () => {
    z === 2 ? setShowCard(true) : null
  }

  const setStyles = () => {
    // return nulls if window is not rendered
    if(typeof window !== 'object') return 

    // rng for style variables
    // choose which axis for the card to be
    const axisSelect = z === 2 ? 1 : i % 2 // 0 == horizontal, 1 == vertical
    // choose one of 5 colors
    const colorSelect = Math.floor((i + Math.round(seedX)) % 5) 
    // generate a rnd int between 6 and 11
    const sizeNarrowGen = Math.floor(seedX * 5 + 6)
    // generate a rnd int between 11 and 19
    const sizeWideGen = Math.floor(seedY * 8 + 11)
    // generate aspect ratio
    const cardRatio = z === 2 ? 9 / 16 : axisSelect ?
      sizeNarrowGen / sizeWideGen // Vertical Calculation
      :
      sizeWideGen / sizeNarrowGen // Horizontal Calculation
    // generate a rnd position on the screen
    const [rndXPos, rndYPos] = z === 2 ? 
      [info.styles.posX, info.styles.posY]
      :
      rndPosGen(axisSelect, cardRatio, sizeNarrowGen, sizeWideGen) 
    
    // Assign variables to styles state
    setCardStyles({
      axis: axisSelect,
      color: colorSelect,
      ratio: cardRatio,
      posX: rndXPos,
      posY: rndYPos,
      width: axisSelect ? info.styles.width | sizeNarrowGen : sizeWideGen
    })
  }

  const rndPosGen = (axis, ratio, narrow, wide) => {
    // Declare variables for clarity
    const screenX = window.innerWidth,
          screenY = window.innerHeight,
          tempSeedX = Math.floor(seedX * (screenX * .8) + (screenX * .1)),
          tempSeedY = Math.floor(seedY * (screenY * .9) + (screenY * .1)),
          remConv = window.innerWidth >= 3840 ? 32 :
                    window.innerWidth >= 2560 ? 24 : 16

    // Calculate card position based on inputs and window size
    const rndXPos = axis ?
      tempSeedX - Math.ceil(ratio * narrow * remConv) // Vertical
      :
      tempSeedX - Math.ceil(ratio * wide * remConv) // Horizontal
    const rndYPos = axis ?
      tempSeedY - Math.ceil(ratio * wide * remConv) // Vertical
      :
      tempSeedY - Math.ceil(ratio * narrow * remConv) // Horizontal

    return [rndXPos, rndYPos]
  }

  // Output
  if(cardStyles.axis === -1) setStyles()
  // if(info.styles.width > 0) console.log(z, info.styles, cardStyles.posX, cardStyles.posY)

  return (
    <div id={`card_${i}:${z}`}
      className={`
        ${styles.card} 
        ${z === 2 ? styles.clickMe : null}
        ${showCard ? styles.info : null}
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
        '--posY': `${cardStyles.posY}`,
        '--width': cardStyles.width
      }}
      onClick={revealCard}
    >
      <h1>{info ? info.title : null}</h1>
      
      <p>{info ? info.description : null}</p>

    </div>
  )
}