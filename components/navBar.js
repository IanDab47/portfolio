// import built-in link from next
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav style={{position: 'fixed', top: 0, zIndex: 10}}>
      <Link href='#home'>Home - </Link>

      <Link href='#about'>About Me - </Link>

      <Link href='#skills'>Skills - </Link>

      <Link href='#projects'>Projects</Link>
    </nav>
  )
}