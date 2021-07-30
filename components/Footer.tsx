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
							<img src='discord.svg' alt='discord logo' />
							<h3>Discord</h3>
						</a>
					</Link>
					<Link href='/twitter'>
						<a>
							<img src='twitter.svg' alt='twitter logo' />
							<h3>Twitter</h3>
						</a>
					</Link>
					<Link href='/news'>
						<a>
							<img src='intro.svg' alt='newsletter' />
							<h3>Newsletter</h3>
						</a>
					</Link>
				</div>
				<img src='/launch.svg' alt='person sitting on rocket' />
			</div>
			<p className='copyright'>© 2021 Dmod | Not affiliated with Discord</p>
		</footer>
	);
}
