import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="sticky top-0">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      {/* Banner */}

    </div>
  )
}
