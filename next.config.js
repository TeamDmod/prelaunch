module.exports = {
	async redirects() {
		return [
			{
				source: '/twitter',
				destination: 'https://twitter.com/dmodgg',
				permanent: true,
			},
			{
				source: '/news',
				destination: 'https://dmod.substack.com',
				permanent: true,
			},
			{
				source: '/blog',
				destination: 'https://medium.com/dmod-gg',
				permanent: true,
			},
		];
	},
};
