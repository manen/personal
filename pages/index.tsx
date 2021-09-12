import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';

const Home: React.FC = () => (
	<div>
		<Head>
			<title>manen</title>
			<meta name='description' content="manen's project" />
		</Head>
		<Header />
		<p className='m-4'>Hi</p>
	</div>
);

export default Home;
