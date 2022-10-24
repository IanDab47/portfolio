import '../styles/globals.css'
import NavBar from '../components/navBar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* header */}
      <NavBar />
      {/* aside */}
      <Component {...pageProps}
      />
      {/* footer */}
    </div>
  )
}

export default MyApp