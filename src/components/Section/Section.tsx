import React from 'react';

import { Container } from '../Layout/LayoutStyle';

interface Props {
	fluid?: boolean;
	className?: string;
}

const Section: React.FC<Props> = ({ fluid, children, className }) => {
	if (fluid) {
		return <section className={className}>{children}</section>;
	}

	return <Container className={className}>{children}</Container>;
};

export default Section;
