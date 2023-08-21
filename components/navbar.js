import Link from 'next/link';
import logo from '../pages/resources/logo.svg';
import Image from 'next/image';

export const Navbar = () => {
    return (
        <>
            <nav className='flex items-center justify-center place-content-center bg-gray-800 md:flex-row px-3'>
                <div>
                    <Link href='/' legacyBehavior>
                        <a className='inline-flex items-left p-2 mr-16'>
                            <Image src={logo} height={50} width={50} alt="Austin Wang" />

                        </a>
                    </Link>
                </div>

                <div>
                    <Link href="/" legacyBehavior>
                        <a className='inline-flex items-center mr-8 px-8 hover:bg-blue-700'>
                            <h1 className='text-md p-2 text-white tracking-wide'>Home</h1>
                        </a>
                    </Link>

                    <Link href="../education" legacyBehavior>
                        <a className='inline-flex items-center mr-8 px-8 hover:bg-blue-700'>
                            <h1 className='text-md p-2 text-white tracking-wide'>Education</h1>
                        </a>
                    </Link>

                    <Link href="../projects" legacyBehavior>
                        <a className='inline-flex items-center mr-8 px-8 hover:bg-blue-700'>
                            <h1 className='text-md p-2 text-white tracking-wide'>Projects</h1>
                        </a>
                    </Link>

                    <Link href="../experience" legacyBehavior>
                        <a className='inline-flex items-center mr-8 px-8 hover:bg-blue-700'>
                            <h1 className='text-md p-2 text-white tracking-wide'>Experience</h1>
                        </a>
                    </Link>

                    <Link href="../blog" legacyBehavior>
                        <a className='inline-flex items-center mr-8 px-8 hover:bg-blue-700'>
                            <h1 className='text-md p-2 text-white tracking-wide'>Blog</h1>
                        </a>
                    </Link>
                </div>

            </nav>

        </>
    );
};