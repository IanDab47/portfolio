// Next
import main from '../../styles/Home.module.css'
import styles from '../../styles/Projects.module.css'

export default function Projects({ isDark, loading, loadedPage }) {
  return (
    <section id='projects' 
      className={`
      ${styles.projectsWrapper} 
      ${main.revealPage}
      ${main.waiting}
      ${loading ? null : main.hidden}
      ${loadedPage ? main.display : null}
  `}
    >
      Section about projects
    </section>
  )
}