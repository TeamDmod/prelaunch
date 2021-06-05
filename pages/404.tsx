import Link from 'next/link';

export default function _404() {
	return (
		<main className='error'>
			<div className='right'>
				<div>
					<h2>404 Error</h2>
					<p>
						You’ve landed somewhere you’re not supposed to be! Press the button
						below to return to safety 👀
					</p>
					<Link href='/'>
						<button>Go Home</button>
					</Link>
				</div>
				<img src='error.svg' />
			</div>
		</main>
	);
}
