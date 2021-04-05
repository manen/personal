import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (
  <div className='border-b border-accent-200 dark:border-accent-700'>
    <header className='m-4 sm:flex sm:flex-row sm:justify-center sm:items-center'>
      <div className='flex-1 text-left flex-row'>
        <div className='text-center sm:text-left'>
          <h1 className='text-2xl'>
            <Link href='/'>manen</Link>
          </h1>
          <p className='text-xs'>I do things sometimes</p>
        </div>
      </div>
      <nav className='mt-4 sm:m-0'>
        <span className='m-2'>
          <Link href='/projects'>Projects</Link>
        </span>
        <span className='m-2'>
          <Link href='/contact'>Contact</Link>
        </span>
        <span className='m-2'>
          <Link href='/about'>About</Link>
        </span>
        <span className='m-2 p-2 transition-colors bg-accent-200 hover:bg-accent-300 dark:bg-accent-800 dark:hover:bg-accent-700 rounded-lg cursor-pointer'>
          <Link href='/donate'>Donate</Link>
        </span>
      </nav>
    </header>
  </div>
);

export default Header;
