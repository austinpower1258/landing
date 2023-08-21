import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../pages/resources/logo.svg';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='bg-gray-800 p-3'>
            <div className='flex items-center justify-between'>
                <Link href='/' legacyBehavior>
                    <a className='inline-flex items-left p-2 md:mr-16'>
                        <Image src={logo} height={50} width={50} alt="Austin Wang" />
                    </a>
                </Link>

                <button className='md:hidden p-2' onClick={() => setIsOpen(!isOpen)}>
                    &#9776;
                </button>

                <div className={`mt-2 ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-center`}>
                    <Link href="/" legacyBehavior><a className='block text-md text-white tracking-wide py-2 px-8 hover:bg-blue-700 md:inline-block md:mr-8'>Home</a></Link>
                    <Link href="../education" legacyBehavior><a className='block text-md text-white tracking-wide py-2 px-8 hover:bg-blue-700 md:inline-block md:mr-8'>Education</a></Link>
                    <Link href="../projects" legacyBehavior><a className='block text-md text-white tracking-wide py-2 px-8 hover:bg-blue-700 md:inline-block md:mr-8'>Projects</a></Link>
                    <Link href="../experience" legacyBehavior><a className='block text-md text-white tracking-wide py-2 px-8 hover:bg-blue-700 md:inline-block md:mr-8'>Experience</a></Link>
                    <Link href="../blog" legacyBehavior><a className='block text-md text-white tracking-wide py-2 px-8 hover:bg-blue-700 md:inline-block md:mr-8'>Blog</a></Link>
                </div>
            </div>
        </nav>
    );
};
