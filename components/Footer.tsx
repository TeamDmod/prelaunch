import Link from 'next/link';

export default function Footer() {
	return (
		<footer>
			<div className='content'>
				<div>
					<h2>
						Looking forward to launch day? <br />
						Stay up to date:
					</h2>
					<Link href='/discord'>
						<a>
							<img src='discord.svg' />
							<h3>Discord</h3>
						</a>
					</Link>
					<Link href='/twitter'>
						<a>
							<img src='twitter.svg' />
							<h3>Twitter</h3>
						</a>
					</Link>
					<Link href='/blog'>
						<a>
							<img src='intro.svg' />
							<h3>Blog</h3>
						</a>
					</Link>
				</div>
				<img src='/launch.svg' />
			</div>
			<p>© 2021 Dmod | Not affiliated with Discord</p>
		</footer>
	);
}
