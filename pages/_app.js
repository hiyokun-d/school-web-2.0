import Head from "next/head"
import Navbar from "../layouts/Navbar"
import "../style/global.css"

function MyApp({ Component, pageProps }) {
  return (
    <Navbar>
      <Head>
          <title>smansabantaeng</title>
      </Head>
      <Component {...pageProps} />
    </Navbar>
  )
}

export default MyApp
