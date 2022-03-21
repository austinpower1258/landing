import Head from 'next/head';
import { Navbar } from '../components/navbar';
import austin_pfp from './resources/austin-wang.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-black content-center">
      <Head>
        <title>Landing</title>
      </Head>
      <Navbar className="fixed" />

      <main className="p-8 flex bg-black place-content-center mt-16">
        <div className="flex-row">
          <Image src={austin_pfp} className="object-cover shadow rounded-full" height={256} width={256} alt="Austin Wang" />
        </div>
        <div>
          <h1 className="text-6xl font-bold text-white px-8 py-4">
            Austin Wang
          </h1>
          <p className="text-xl font-sm text-white text-gray-600 px-8">
            - Yale Physics, Computer Science, and Economics
          </p>
          <p className="text-xl font-sm text-white text-gray-600 px-8">
            - Experienced Developer and Problem Solver
          </p>
          <p className="text-xl font-sm text-white text-gray-600 px-8">
            - Travel and Food Enthusiast
          </p>
        </div>

      </main >

      <div className=" p-8 flex place-content-center font-sm text-white text-gray-600">
        Interested in Software Development, the Metaverse, Web3, Crypto, Fintech, and Startups.
      </div>
    </div >
  )
}
