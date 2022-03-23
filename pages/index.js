import Head from 'next/head';
import { Navbar } from '../components/navbar';
import austin_pfp from './resources/austin-wang.jpg';
import Image from 'next/image';
import Link from "next/link";
import github_logo from '../pages/resources/github-logo.svg';
import linkedin_logo from '../pages/resources/linkedin-logo.svg';
import twitter_logo from '../pages/resources/twitter-logo.svg';

export default function Home() {
  return (
    <div className="bg-black min-h-screen content-center">
      <Head>
        <title>Landing</title>
      </Head>
      <Navbar className="fixed" />

      <main className="p-8 flex bg-black place-content-center mt-16">
        <div className="flex-row">
          <Image src={austin_pfp} className="object-cover rounded-full" height={256} width={256} alt="Austin Wang" />

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
          <div className="flex px-8 py-4 items-center">
            <Link href='https://www.github.com/austinpower1258'>
              <a className='inline-flex items-center mr-4 '>
                <Image src={github_logo} height={24} width={24} alt="Github" />
              </a>
            </Link>

            <Link href='https://www.linkedin.com/in/austinwang115/'>
              <a className='inline-flex items-center mr-4 '>
                <Image src={linkedin_logo} height={24} width={24} alt="Linkedin" />
              </a>
            </Link>

            <Link href='https://twitter.com/austinywang'>
              <a className='inline-flex items-center mr-4 '>
                <Image src={twitter_logo} height={24} width={24} alt="Twitter" />
              </a>
            </Link>

          </div>
        </div>

      </main >

      <div className=" p-8 flex place-content-center font-sm text-white text-gray-600">
        Interested in Software Development, the Metaverse, Web3, Crypto, Fintech, and Startups.
      </div>
    </div >
  )
}
