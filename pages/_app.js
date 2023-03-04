import CustomHead from "../components/CustomHead"
import Navbar from "../layouts/Navbar"
import "../style/global.css"

function MyApp({ Component, pageProps }) {
  return (
    <Navbar>
      <CustomHead />
      <Component {...pageProps} />
    </Navbar>
  )
}

export default MyApp
