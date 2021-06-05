module.exports = {
	async redirects() {
		return [
			{
				source: '/twitter',
				destination: 'https://twitter.com/dmodgg',
				permanent: true,
			},
			// {
			// 	source: '/leaks',
			// 	destination: '/* Unknown */',
			// 	permanent: true,
			// },
			{
				source: '/discord',
				destination: 'https://discord.com/invite/429zwpugYf',
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
