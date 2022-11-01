export default function ModeSwitch({ isDark, setIsDark }) {
  const lightLamp = '/light-lamp.svg'
  const darkLamp = '/dark-lamp.svg'

  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, right: 0, 
      width: 'clamp(1.8rem, 4vw, 4vw)', 
      margin: '1.5rem clamp(1.2rem, 3vw, 3vw) 0 auto',  
      zIndex: 99 
    }}>
      <img 
        src={isDark ? darkLamp : lightLamp}
        onClick={() => setIsDark(!isDark)}
      />
    </div>
  )
}