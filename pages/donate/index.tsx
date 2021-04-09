import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Link from 'next/link';
import { usePlausible } from 'next-plausible';

const Donate: React.FC = () => {
  const router = useRouter();
  const { s } = router.query;

  const plausible = usePlausible();

  return (
    <div>
      <Head>
        <title>Support {s || 'my work'} - manen</title>
        <meta name='description' content={'Donate to ' + (s || 'manen')} />
      </Head>
      <Header />
      <div className='m-4'>
        <h1 className='font-black text-4xl sm:text-5xl'>
          Donate{s ? ' to ' + s : ''}
        </h1>
        <div className='mt-1 text-sm text-accent-500 dark:text-accent-400'>
          <p>
            You can support {s || 'my work'} by donating
            {s ? ' to manen' : ''}.
          </p>
        </div>
        <p className='m-6'>
          While it's completely optional, it'd be <b>really</b> greatly
          appreciated.
        </p>
        <div className='mx-4 h-full grid grid-cols-3 gap-4'>
          <a
            target='_blank'
            href='https://paypal.me/maneney'
            onClick={() => {
              plausible('Donate with PayPal');
              setTimeout(() => {
                router.push('/donate/thankyou' + (s ? '?s=' + s : ''));
              }, 100);
            }}
            className='mt-4 sm:m-0 px-7 sm:px-14 py-6 sm:py-8 bg-accent-200 hover:bg-accent-300 dark:bg-accent-800 dark:hover:bg-accent-700 text-xl transition-colors rounded-xl'
          >
            PayPal
          </a>
          <Link href='/donate/bitcoin'>
            <div
              onClick={() => {
                plausible('Donate with BTC');
              }}
              className='mt-4 sm:m-0 px-7 sm:px-14 py-6 sm:py-8 bg-accent-200 hover:bg-accent-300 dark:bg-accent-800 dark:hover:bg-accent-700 text-xl transition-colors rounded-xl cursor-pointer'
            >
              Bitcoin
            </div>
          </Link>
          <a
            target='_blank'
            href='https://patreon.com/manen_'
            onClick={() => {
              plausible('Donate with Patreon');
            }}
            className='mt-4 sm:m-0 px-7 sm:px-14 py-6 sm:py-8 bg-accent-200 hover:bg-accent-300 dark:bg-accent-800 dark:hover:bg-accent-700 text-xl transition-colors rounded-xl'
          >
            Patreon
          </a>
        </div>
      </div>
    </div>
  );
};

export default Donate;
