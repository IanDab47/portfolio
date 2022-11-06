// Next
import main from '../../styles/Home.module.css'
import styles from '../../styles/Projects.module.css'

// React
import { useState, useEffect } from 'react'

// Components
import Tab from './tab'

import { projects } from '../../utils/projects'

export default function Projects({ isDark, loading, loadedPage }) {
  // State
  const [tab, setTab] = useState('global keebs')
  const [tmb, setTmb] = useState(projects[tab].images[0])
  const [tabKeys, setTabKeys] = useState(Object.keys(projects))
  const [colorSelect, setColorSelect] = useState(0)

  // console.log(projects[tab].images.length)

  // Hooks
  useEffect(() => {
    // use index of tab to select color of tab bg
    setColorSelect(tabKeys.indexOf(tab) % 5)
    // set main display to first image of project
    setTmb(projects[tab].images[0])
  }, [tab])

  // Handlers
  const selectImage = (e) => {
    setTmb('/Thumbnails' + e.target.src.split('Thumbnails')[1])
  }
  
  // Output
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
    <section id='projects' 
      className={`
        ${styles.projectsPage} 
        ${isDark ? styles.dark : null}
      `}
    >
      <article 
        className={`
          ${styles.projectsWrapper}
          ${main.revealPage}
          ${main.waiting}
          ${loading ? null : main.hidden}
          ${loadedPage ? main.display : null}
        `}
      >
        <nav className={styles.tabBar}>{tabDisplay}</nav>

        <div className={`${styles.info}`}>
          <header>
            <p>{projects[tab].title}</p>

            <p>{projects[tab].text}</p>

            <a href={projects[tab].link} rel='noreferrer' target='_blank' 
              className={styles.button}
              style={{ '--color': projects[tab].color }}
            >
              Check It Out!
            </a>
          </header>

          <section>
            <img src={tmb}/>

            <div style={{ '--size': projects[tab].images.length }}
            >
              {projects[tab].images.map((image, i) => 
                <img 
                  key={`light_${i}`} 
                  src={image} 
                  title={`${projects[tab].title}_${i+1}`} 
                  layout='fill' 
                  onClick={selectImage}
                />)}
            </div>
          </section>
        </div>

      </article>
    </section>
  )
}