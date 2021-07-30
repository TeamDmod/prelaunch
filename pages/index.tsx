import Footer from 'components/Footer';
import Head from 'next/head';

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
						Launching in mid-late 2021, dmod will be the platform for Server
						Owners and Moderators alike.
					</p>
				</div>
				<div id='about'>
					<div className='right'>
						<div>
							<h2>Goodbye Google Forms.</h2>
							<p>
								With Dmod, making staff applications will never be better! We're
								creating highly-customizable discord staff applications for
								admins, moderators, and helpers.
							</p>
						</div>
						<img src='/form.svg' alt='clipboard with tick' />
					</div>
					<div className='left'>
						<div>
							<h2>
								Are you a Moderator? <br />
								We've got you covered.
							</h2>
							<p>
								Create and Customize your own moderator profile, claim your free
								Vanity URL, fill in past positions, timezone, etc, and you're
								set!
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
								and highly experienced community members. We're even open source
								on GitHub!
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
