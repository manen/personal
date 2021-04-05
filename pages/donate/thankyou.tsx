import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Header from '../../components/Header';

const ThankYou: React.FC = () => {
  const router = useRouter();
  const { s } = router.query;

  return (
    <div>
      <Head>
        <title>Thank you for donating - manen</title>
        <meta name='description' content='Post-donation page' />
      </Head>
      <Header />
      <main className='m-4'>
        <div className='m-4 font-black'>
          <h1 className='text-4xl'>Thank you so much</h1>
          <p className='text-xl'>for donating!</p>
        </div>
        <p>
          Your donation helps support {s || 'me'}, and I <b>really</b>{' '}
          appreciate that.
        </p>
      </main>
    </div>
  );
};

export default ThankYou;
