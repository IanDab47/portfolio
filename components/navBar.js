// import built-in link from next
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav>
      <Link href='/'>Home</Link>

      <Link href='/about'>About Me</Link>
    </nav>
  )
}