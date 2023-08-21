import Head from 'next/head';
import { Navbar } from '../components/navbar';
import austin_pfp from './resources/austinwang.jpg';
import Image from 'next/image';
import Link from "next/link";
import github_logo from '../pages/resources/github-logo.svg';
import linkedin_logo from '../pages/resources/linkedin-logo.svg';
import twitter_logo from '../pages/resources/twitter-logo.svg';
import styles from './index.module.css';

export default function Home() {
  return (
    <div className="bg-black min-h-screen content-center">
      <Head>
        <title>Landing</title>
      </Head>
      <Navbar className="fixed" />

      <main className="p-8 flex bg-black place-content-center mt-16">
        <div className="flex-row">
          <Image
            src={austin_pfp}
            className={`object-cover ${styles.profileImage}`}
            style={styles.object}
            alt="Austin Wang" />
        </div>

        <div>
          <h1 className="text-6xl font-bold text-white px-8 py-4">
            Austin Wang
          </h1>
          <p className="text-xl font-sm text-gray-600 px-8">
            - Yale Physics, Computer Science, and Economics
          </p>
          <p className="text-xl font-sm text-gray-600 px-8">
            - Experienced Leader and Problem Solver
          </p>
          <p className="text-xl font-sm text-gray-600 px-8">
            - Violinist, Inventor, and Foodie
          </p>
          <div className="flex px-8 py-4 items-center">
            <Link href='https://www.github.com/austinpower1258' legacyBehavior>
              <a className='inline-flex items-center mr-4 '>
                <Image src={github_logo} height={24} width={24} alt="Github" />
              </a>
            </Link>

            <Link href='https://www.linkedin.com/in/austinwang115/' legacyBehavior>
              <a className='inline-flex items-center mr-4 '>
                <Image src={linkedin_logo} height={24} width={24} alt="Linkedin" />
              </a>
            </Link>

            <Link href='https://twitter.com/austinywang' legacyBehavior>
              <a className='inline-flex items-center mr-4 '>
                <Image src={twitter_logo} height={24} width={24} alt="Twitter" />
              </a>
            </Link>

          </div>
        </div>

      </main >

      <div className={styles.description}>
        Building bold beliefs into 10x breakthroughs for a better world. Check out my&nbsp;
        <a href="../projects" className="underline hover:text-white">projects</a>.
      </div>
    </div >
  )
}
