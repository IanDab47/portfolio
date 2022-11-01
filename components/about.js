import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function about() {
  return (
    <div className={styles.aboutInnerWrapper}>

      <div className={styles.infoCard}>
        <h1>{`Hi, I'm Ian!`}</h1>
        <p>After recently graduating from the General Assembly school for software engineering, I am ready to exceed in this new chapter of my life. I hope that it will be with one of you reading this right now!</p>
      </div>
      

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