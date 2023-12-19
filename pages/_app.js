import '@styles/globals.css'
import Head from 'next/head' // Importing Head to inject things in the <head> of the document

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
       
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default Application
