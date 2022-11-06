// Next
import styles from '../../styles/Projects.module.css'

export default function Tab({ i, filter, color, tab, setTab }) {
  return (
    <div 
      key={`tab_${i}`}
      id={filter}
      className={`${styles.tab} ${color} ${tab === filter ? styles.active : null}`} 
      onClick={e => setTab(filter)}
    >
      {filter}
    </div>
  )
}