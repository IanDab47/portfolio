// Next
import main from '../../styles/Home.module.css'
import styles from '../../styles/Skills.module.css'

// React
import { useState, useEffect } from 'react'

// Components
import Tab from './tab'

import { skills } from '../../utils/skills'

export default function Skills({ isDark, loading, loadedPage }) {
  // State
  const [tab, setTab] = useState('languages')
  const [tabKeys, setTabKeys] = useState(Object.keys(skills))
  const [colorSelect, setColorSelect] = useState(0)

  console.log(skills[tab].images.length)

  useEffect(() => {
    // use index of tab to select color of tab bg
    setColorSelect(tabKeys.indexOf(tab) % 5)
  }, [tab])

  const color = colorSelect === 0 ? styles.colorOne :
                colorSelect === 1 ? styles.colorTwo :
                colorSelect === 2 ? styles.colorThree :
                colorSelect === 3 ? styles.colorFour :
                colorSelect === 4 ? styles.colorFive : null

  const tabDisplay = tabKeys.map((filter, i) => {
    return (
      <Tab 
        key={`tab_${i}`}
        i={i}
        filter={filter}
        color={color}
        tab={tab}
        setTab={setTab}
      />
    )
  })

  return (
    <section id='skills' 
      className={`
        ${styles.skillsPage} 
        ${isDark ? styles.dark : null}
      `}
    >
      <article 
        className={`
          ${styles.skillsWrapper}
          ${main.revealPage}
          ${main.waiting}
          ${loading ? null : main.hidden}
          ${loadedPage ? main.display : null}
        `}
      >
        <nav className={styles.tabBar}>{tabDisplay}</nav>

        <div className={styles.info}>
          <header>
            <p>{skills[tab].title}</p>
          </header>

          <section>
            <p>{skills[tab].text}</p>

            <div style={{ '--size': skills[tab].images.length }}
            >
              {isDark ? 
                skills[tab].images.dark.map((image, i) => 
                  <img key={`dark_${i}`} src={image} title='Sorry, these are not links :/' layout='fill'/>)
                :
                skills[tab].images.light.map((image, i) => 
                  <img key={`light_${i}`} src={image} title='Sorry, these are not links :/' layout='fill'/>)
              }
            </div>
          </section>
        </div>

      </article>
    </section>
  )
}