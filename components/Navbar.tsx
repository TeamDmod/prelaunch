import Link from 'next/link';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';

export default function Navbar() {
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const [active, setActive] = useState(false);
	const router = useRouter();

	const handleClick = () => {
		setActive(!active);
	};

	const buttonRedirect = () => {
		router.push(`/discord`);
	};

	return (
		<header>
			<nav>
				<Link href='/'>
					<img src={'/logo.png'} alt='dmod.gg logo' width={48} height={48} />
				</Link>
				{isMobile && (
					<button onClick={handleClick} name='menu'>
						<svg
							width={48}
							height={48}
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M4 6h16M4 12h16M4 18h16'
							/>
						</svg>
					</button>
				)}
				{(!isMobile || active) && (
					<ul>
						<li>
							<Link href='/#about'>
								<a>About</a>
							</Link>
						</li>
						<li>
							<Link href='/news'>
								<a>Newsletter</a>
							</Link>
						</li>
						<li>
							<Link href='/dispatch'>
								<a>Dispatch</a>
							</Link>
						</li>
						<li>
							<Link href='/twitter'>
								<a>Twitter</a>
							</Link>
						</li>
						<li>
							<button onClick={buttonRedirect}>
								Join Our Discord
							</button>
						</li>
					</ul>
				)}
			</nav>
		</header>
	);
}
