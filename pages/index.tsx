import Footer from '@components/Footer';

export default function Home() {
	return (
		<>
			<main>
				<div className='top'>
					<h1>Discord Moderation at your fingertips!</h1>
					<p>
						Launching in mid-late 2021, dmod will be the platform for Server
						Owners and Moderators alike.
					</p>
				</div>
				<div className='right'>
					<div>
						<h2>Goodbye Google Forms.</h2>
						<p>
							With Dmod, finding moderators or a server to work for has never
							been quicker! Create or apply for Applications. Even search by
							Rating, Time Zone, and more.
						</p>
					</div>
					<img src='/form.svg' />
				</div>
				<div className='left'>
					<div>
						<h2>
							Made by Discord Users, <br />
							for Discord Users.
						</h2>
						<p>
							As Moderators and Server Owners, we’re always looking for tools
							that can others in the community out. We hope Dmod will become a
							helpful tool.
						</p>
					</div>
					<img src='/users.svg' />
				</div>
				<div className='right'>
					<div>
						<h2>
							Are you a Moderator? <br />
							We've got you covered.
						</h2>
						<p>
							Create and Customize your profile, get your own Vanity URL, fill
							in past experience and all sorts of info, and inquire for
							positions.
						</p>
					</div>
					<img src='/mod.svg' />
				</div>
				<div className='left'>
					<div>
						<h2>
							Are you a Server Owner? <br />
							Dmod is for you, too.
						</h2>
						<p>
							Server Owners have been wasting time using random tools for way
							too long. Here, you can create forms, share them with a Vanity
							URL, and collect responses, write mod reviews, all made to help
							Server Owners.
						</p>
					</div>
					<img src='/owner.svg' />
				</div>
			</main>
			<Footer />
		</>
	);
}
