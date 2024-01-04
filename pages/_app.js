import '@styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head' // Importing Head to inject things in the <head> of the document

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
       <link href="https://fonts.googleapis.com/css2?family=Germania+One&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default Application
