import CustomHead from "../components/CustomHead"
import "../style/global.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CustomHead />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
