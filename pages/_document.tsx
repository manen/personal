import React from 'react';
import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
	DocumentInitialProps,
} from 'next/document';
import PlausibleProvider from 'next-plausible';

class Doc extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang='en' className='dark'>
				<Head>
					<script
						async
						defer
						data-domain='manen.me'
						src='https://analytics.manen.me/js/index.js'
					></script>
				</Head>
				<body className='p-0 m-0 font-sans text-center bg-accent-50 text-black dark:bg-accent-900 dark:text-accent-200'>
					<PlausibleProvider
						domain='manen.me'
						customDomain='analytics.manen.me'
						trackOutboundLinks
						enabled={process.env.NODE_ENV != 'development'}
					>
						<Main />
						<NextScript />
					</PlausibleProvider>
				</body>
			</Html>
		);
	}
}

export default Doc;
