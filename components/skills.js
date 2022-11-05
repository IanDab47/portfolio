// Next
import main from '../styles/Home.module.css'
import styles from '../styles/Skills.module.css'

export default function Skills({ loading }) {
  return (
    <section id='skills' className={`${styles.skillsWrapper} ${loading ? null : main.hidden}`}>
      Section about skills
    </section>
  )
}