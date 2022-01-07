import Head from 'next/head';
import { Navbar } from '../components/navbar';
import austin_pfp from './resources/austin.JPEG';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-h-screen items-center bg-blue-900 overflow-hidden">
      <Head>
        <title>Landing</title>
      </Head>
      <Navbar className="fixed" />

      <main className="flex min-h-screen content-center items-center justify-center flex-wrap content-around bg-blue-900">
        <div>
          <Image src={austin_pfp} className="object-cover shadow rounded-full max-w-full h-auto align-middle border-none" height={256} width={256} alt="Austin Wang" />
        </div>
        <div>
          <h1 className="text-6xl font-bold text-white font-sans px-8 py-4">
            Hi, I&apos;m Austin Wang
          </h1>
          <p className="text-xl font-sm text-white font-mono px-8">
            - Yale Physics, Computer Science, and Economics
          </p>
          <p className="text-xl font-sm text-white font-mono px-8">
            - Experienced Developer and Problem Solver
          </p>
          <p className="text-xl font-sm text-white font-mono px-8">
            - Travel and Food Enthusiast
          </p>
        </div>
        <div className="p-4 font-sm text-white font-mono">
          Currently building a more realistic metaverse. Check out my <Link href="/blog">blog</Link>.
        </div>
      </main >

    </div >
  )
}
