import Head from 'next/head';
import MetaTags from 'components/MetaTags';

export default function Discord() {
	return (
		<>
			<MetaTags title='Dmod Discord' />
			<Head>
				<meta
					httpEquiv='refresh'
					content='0;url=https://discord.com/invite/429zwpugYf'
				/>
			</Head>
		</>
	);
}
