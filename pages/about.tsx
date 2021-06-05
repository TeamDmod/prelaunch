import Link from 'next/link';

export default function About() {
	return (
		<main className='error'>
			<div className='right'>
				<div>
					<h2>We're sorry...</h2>
					<p>This page is still under construction. 🚧</p>
					<Link href='/'>
						<button>Go Home</button>
					</Link>
				</div>
				<img src='dev.svg' />
			</div>
		</main>
	);
}
