import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Header from '../components/Header';

export default function UhOh() {
	const router = useRouter();

	return (
		<div>
			<Head>
				<title>Not quite - manen</title>
			</Head>
			<Header />
			<div className='m-4'>
				<h1 className='text-2xl font-black'>404</h1>
				<p className='p-4'>You're lost.</p>
				<a
					href='https://twitter.com/maneney_'
					className='p-4 text-sm text-accent-500 dark:text-accent-400'
				>
					Maybe you were looking for my Twitter?
				</a>
			</div>
		</div>
	);
}
