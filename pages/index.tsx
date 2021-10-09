import Footer from 'components/Footer';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Head>
				<link rel='canonical' href='https://dmod.gg' />
			</Head>
			<main>
				<div className='top'>
					<h1>Discord Moderation at your fingertips!</h1>
					<p>
						Launching mid-late 2021.
					</p>
				</div>
				<div id='about'>
					<div className='right'>
						<div>
							<h2>Our Mission.</h2>
							<p>
								We believe that the online moderation community is lacking a centralized source for resources, guidance, and mentorship. Inclusivity & transparency take a front seat in everything we do.
								All of our finances, code and designs are publicly available on their respective platforms.
								We want everyone to be a part of our building process, and we want to create something impactful.
							</p>
						</div>
						<img src='/form.svg' alt='clipboard with tick' />
					</div>
					<div className='left'>
						<div>
							<h2>
								We're building a platform for Moderators.
							</h2>
							<p>
								Dmod will be the home for Moderators online, with profiles, free Vanity URLs, past position & timeline slots, and more.
								Share your experience with others & discover new friends in your industry. 
							</p>
						</div>
						<img src='/mod.svg' alt='person sitting at desk' />
					</div>
					<div className='right'>
						<div>
							<h2>
								Are you a Server Owner? <br />
								Dmod is for you, too.
							</h2>
							<p>
								Server Owners have been wasting time using random tools for way
								too long. With Dmod, you can create custom application forms,
								share them with a Vanity URL, collect responses, write mod
								reviews, and more. All built to help make managing a community
								easier!
							</p>
						</div>
						<img src='/owner.svg' alt='person with flag' />
					</div>
					<div className='left'>
						<div>
							<h2>Built By The Community</h2>
							<p>
								We want this to be a team effort; Dmod was built with the help
								of Discord Partners, Verified Developers, Certified Moderators,
								and highly experienced community members. We're even 
								<Link href='https://github.com/dmod-gg'> open source on GitHub! </Link>
							</p>
						</div>
						<img src='/users.svg' alt='person sending emoji on phone' />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
