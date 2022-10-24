import Image from "next/image"

export default function ModeSwitch({ isDark, setIsDark }) {
  const lightLamp = '/light-lamp.svg'
  const darkLamp = '/dark-lamp.svg'

  return (
    <div style={{ position: 'sticky', top: 0, margin: '1.5rem 3vw 0 auto',  width: '4vw', zIndex: 99 }}>
      <img 
        src={isDark ? darkLamp : lightLamp}
        onClick={() => setIsDark(!isDark)}
      />
    </div>
  )
}