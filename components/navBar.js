// Next
import Link from 'next/link'
import styles from '../styles/NavBar.module.css'

export default function NavBar({ isDark }) {
  return (
    <nav className={`${styles.navWrapper} ${isDark ? styles.dark : null}`}>
      <div className={`${styles.nav}`}>
        <Link href='#'>Home</Link>{' - '}

        <Link href='#about'>About</Link>{' - '}

        <Link href='#skills'>Skills</Link>{' - '}

        <Link href='#projects'>Projects</Link>
      </div>
    </nav>
  )
}