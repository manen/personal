import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';

const About: React.FC = () => (
  <div>
    <Head>
      <title>About - manen</title>
      <meta name='description' content='About manen' />
    </Head>
    <Header />
    <div className='m-4'>
      <h1 className='text-2xl'>About</h1>
      <div className='flex flex-row text-justify'>
        <img
          src='/img/192.png'
          alt='Profile Picture'
          className='mr-4 w-48 h-48'
        />
        <div className='text-lg'>
          Hi, I'm <span className='text-bruh-100'>manen</span>, and I write
          code. Just kidding, I actually have no idea what I'm doing.
        </div>
      </div>
    </div>
  </div>
);

export default About;
