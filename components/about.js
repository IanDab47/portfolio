import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function about() {
  return (
    <div className={styles.body}>
      <h1>{`Hi, I'm Ian!`}</h1>

      <p>I am a super cool software engineer! I make neat stuff with code stuff.</p>

      {/* load an image locally */}
      <Image 
        src='/vercel.svg'
        alt='logo'
        width={300}
        height={300}
        className='filter-white'
      />

      {/* load an image hosted on another domain */}
      <Image 
        src='https://i.redd.it/xdd1wlu4rwt31.jpg'
        alt='uncanny pic of me'
        width={400}
        height={500}
      />

    </div >
  )
}