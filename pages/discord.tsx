import MetaTags from 'components/MetaTags';

export async function getServerSideProps() {
	return {
		redirect: {
			permanent: true,
			destination: 'https://discord.com/invite/429zwpugYf',
		},
	};
}

export default function Discord() {
	return (
		<>
			<MetaTags
				title='Dmod Discord'
				description='The official dmod.gg Discord server! Join us to learn how we are innovating the Moderation Community.'
			/>
		</>
	);
}
