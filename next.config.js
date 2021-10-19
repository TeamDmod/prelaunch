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
				destination: 'https://www.getrevue.co/profile/dmod',
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
