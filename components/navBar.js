// Next
import Link from 'next/link'
import styles from '../styles/NavBar.module.css'

export default function NavBar({ isDark, onHome }) {
  console.log(onHome)

  return (
    <nav id='nav-bar' 
      className={`
      ${styles.navWrapper}
      ${styles.waiting}
      ${styles.revealNav}
      ${isDark ? styles.dark : null}
      ${onHome ? null : styles.display}
    `}
    >
      <div className={`${styles.nav}`}>
        <Link href='#'>Home</Link>{' - '}

        <Link href='#about'>About</Link>{' - '}

        <Link href='#skills'>Skills</Link>{' - '}

        <Link href='#projects'>Projects</Link>
      </div>
    </nav>
  )
}