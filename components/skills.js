// Next
import main from '../styles/Home.module.css'
import styles from '../styles/Skills.module.css'

// React
import { useState } from 'react'

import { skills } from '../utils/skills'

export default function Skills({ isDark, loading, loadedPage }) {
  // State
  const [tab, setTab] = useState('languages')

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
        <nav className={styles.tabBar}>
          <div 
            id='languages'
            className={`${styles.tab} ${tab === 'languages' ? styles.active : null}`} 
            onClick={e => setTab('languages')}
          >
            Languages
          </div>

          <div 
            id='frameworks'
            className={`${styles.tab} ${tab === 'frameworks' ? styles.active : null}`} 
            onClick={e => setTab('frameworks')}
          >
            Frameworks
          </div>

          <div 
            id='databases'
            className={`${styles.tab} ${tab === 'databases' ? styles.active : null}`} 
            onClick={e => setTab('databases')}
          >
            Databases
          </div>

          <div 
            id='version-control'
            className={`${styles.tab} ${tab === 'version-control' ? styles.active : null}`} 
            onClick={e => setTab('version-control')}
          >
            Version Control
          </div>

        </nav>

        <div className={styles.info}>
          <header>
            <p>{skills[tab].title}</p>
          </header>

          <section>
            <p>This is where the text for all the details will go.</p>

            {skills[tab].images.map(image => <img href={image}/>)}
          </section>
        </div>

      </article>
    </section>
  )
}