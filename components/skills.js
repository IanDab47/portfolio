// Next
import main from '../styles/Home.module.css'
import styles from '../styles/Skills.module.css'

export default function Skills({ loading, loadedPage }) {
  console.log(loadedPage)
  return (
    <section id='skills' 
      className={`
        ${styles.skillsWrapper} 
        ${main.revealPage}
        ${main.waiting}
        ${loading ? null : main.hidden}
        ${loadedPage ? main.display : null}
      `}
    >
      Section about skills
    </section>
  )
}