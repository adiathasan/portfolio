import { AppProps } from 'next/app';

import '../styles/global.css';
import Theme from '../theme/Theme';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Theme>
			<Component {...pageProps} />
		</Theme>
	);
}

export default MyApp;
