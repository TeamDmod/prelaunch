import '../styles/globals.scss';
import Navbar from 'components/Navbar';
import Metatags from 'components/MetaTags';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Metatags />
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

export default App;
