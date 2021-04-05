import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function UhOh() {
  return (
    <div>
      <Head>
        <title>bruh</title>
      </Head>
      <h1 className='text-xl font-black'>500 - Internal Server Error</h1>
      <p>Yeah, that's my fault. 😐</p>
      <div className='m-4'>
        <Link href='/'>Go home</Link>
      </div>
    </div>
  );
}
