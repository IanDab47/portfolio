// Next
import main from '../styles/Home.module.css'
import styles from '../styles/Projects.module.css'

export default function Projects({ loading }) {
  return (
    <section id='projects' className={`${styles.projectsWrapper} ${loading ? null : main.hidden}`}>
      Section about projects
    </section>
  )
}