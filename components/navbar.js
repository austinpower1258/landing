import Link from 'next/link';
import logo from '../pages/resources/logo.svg';
import github_logo from '../pages/resources/github-logo.svg';
import linkedin_logo from '../pages/resources/linkedin-logo.svg';
import twitter_logo from '../pages/resources/twitter-logo.svg';
import Image from 'next/image';

export const Navbar = () => {
    return (
        <>
            <nav className='flex items-center flex-wrap justify-between bg-blue-900 md:flex-row px-3'>
                <Link href='/'>
                    <a className='inline-flex items-center p-2 mr-4 '>
                        <Image src={logo} height={50} width={50} alt="Austin Wang" />
                        <span className='text-xl p-2 text-white font-mono uppercase tracking-wide'>
                            Austin-Wang
                        </span>
                    </a>
                </Link>
                <div>
                    <Link href="/">
                        <a className='inline-flex items-center mr-8 px-8 hover:bg-blue-700'>
                            <h1 className='text-md p-2 text-white font-mono tracking-wide'>Home</h1>
                        </a>
                    </Link>

                    <Link href="../education">
                        <a className='inline-flex items-center mr-8 px-8 hover:bg-blue-700'>
                            <h1 className='text-md p-2 text-white font-mono tracking-wide'>Education</h1>
                        </a>
                    </Link>

                    <Link href="../projects">
                        <a className='inline-flex items-center mr-8 px-8 hover:bg-blue-700'>
                            <h1 className='text-md p-2 text-white font-mono tracking-wide'>Projects</h1>
                        </a>
                    </Link>

                    <Link href="../experience">
                        <a className='inline-flex items-center mr-8 px-8 hover:bg-blue-700'>
                            <h1 className='text-md p-2 text-white font-mono tracking-wide'>Experience</h1>
                        </a>
                    </Link>

                    <Link href="../blog">
                        <a className='inline-flex items-center mr-8 px-8 hover:bg-blue-700'>
                            <h1 className='text-md p-2 text-white font-mono tracking-wide'>Blog</h1>
                        </a>
                    </Link>
                </div>
                <div className="flex items-center">
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
            </nav>

        </>
    );
};