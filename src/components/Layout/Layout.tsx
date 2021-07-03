import React from 'react';
import Head from 'next/head';

import Header from '../Header/Header';

interface Props {
	title?: string;
}

const Layout: React.FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<Header />
			<main>{children}</main>
		</>
	);
};

export default Layout;
