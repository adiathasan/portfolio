import styled from 'styled-components';

import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';

const Main = styled.main`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
`;

const Home: React.FC = () => {
	return (
		<Layout title='Adiat Hasan | JS | TS'>
			<Main>
				<Hero />
			</Main>
		</Layout>
	);
};

export default Home;
