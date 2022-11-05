import Head from "next/head"
import styles from "../styles/Test.module.css"

import { useState, useEffect } from "react"

import Scrollspy from "react-scrollspy"

export default function Test(props) {
  // States
  const [something, setSomething] = useState([''])
  const [detectY, setDetectY] = useState(-540)

  // Hooks
  useEffect(() => setDetectY(window.innerHeight / 5 * -3), [])

  // Handler
  const doSomething = (e) => {
    console.log(e.id)

    if(!something.includes(e.id)) setSomething([...something, e.id])
  }

  // Output
  return (
    <div id={styles.test}>
      <nav>
      <Scrollspy 
        items={ ['section-1', 'section-2', 'section-3'] } 
        currentClassName={styles.isCurrent}
        onUpdate={(e) => doSomething(e)}
        offset={detectY}
      >
        <section className={`${styles.hidden} ${something.includes('section-1') ? styles.reveal : null}`} id="section-1">section 1</section>
        <section className={`${styles.hidden} ${something.includes('section-2') ? styles.reveal : null}`} id="section-2">section 2</section>
        <section className={`${styles.hidden} ${something.includes('section-3') ? styles.reveal : null}`} id="section-3">section 3</section>
      </Scrollspy>
      </nav>
    </div>
  )
}