import '@styles/globals.css'
import Head from 'next/head' // Importing Head to inject things in the <head> of the document

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Adding Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default Application
