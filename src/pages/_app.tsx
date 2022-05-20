import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Aglv - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon.svg" />
        <link rel="apple-touch-icon" href="/img/icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#352364" />
        <meta
          name="description"
          content="A simple shop starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
