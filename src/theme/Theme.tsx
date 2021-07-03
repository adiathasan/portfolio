import { ThemeProvider } from 'styled-components';

import { theme } from './appTheme';
import GlobalStyles from './GlobalStyles';

const Theme: React.FC = ({ children }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		{children}
	</ThemeProvider>
);

export default Theme;
