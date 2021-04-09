import Head from 'next/head';
import React from 'react';
import Header from '../../components/Header';

export default function Bitcoin() {
  return (
    <div>
      <Head>
        <title>Donate with Bitcoin - manen</title>
      </Head>
      <Header />
      <div className='m-4'>
        <h1 className='mb-4 text-2xl'>Donate with Bitcoin</h1>
        My BTC Address: bc1qtg09pjnwf976vlwp42qq6slh99423xepraa5vw
      </div>
    </div>
  );
}
