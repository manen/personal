import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';

export default function Vanilla() {
  return (
    <div>
      <Head>
        <title>Vanilla - manen</title>
      </Head>
      <Header />
      <div className='m-4'>
        <h1 className='mb-2 font-black text-xl sm:text-2xl'>Vanilla</h1>
        <div>
          <div className='text-justify'>
            <section>
              Vanilla is a fully client-side shopping list web app, made to be
              simple yet powerful. Written in TypeScript with Next.js, deployed
              from GitHub on Netlify.
            </section>
          </div>
          <div className='mt-8 sm:grid sm:grid-cols-2 sm:divide-x'>
            <div className='m-2 p-4 dark:bg-accent-800 rounded-lg'>
              <a href='https://vanilla.manen.me'>Try it</a>
            </div>
            <div className='m-2 p-4 border-2 dark:border-accent-800 rounded-lg'>
              <a href='https://github.com/manen/vanilla'>
                Source code on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
