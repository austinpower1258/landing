import Head from 'next/head'
import { Navbar } from './components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Landing</title>
      </Head>

      <Navbar />

      <main className="flex items-center flex-wrap justify-between bg-blue-200 md:flex-row px-3 p-1">

        <h1 className="font-bold font-serif">
          austin
        </h1>

        <p>

        </p>

        <div>

        </div>
      </main>
    </div >
  )
}
